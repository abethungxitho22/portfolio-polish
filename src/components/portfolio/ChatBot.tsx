import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/portfolio-chat`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Abethu's portfolio assistant 👋  Ask me anything about his skills, projects, experience, or how to get in touch.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Allow other components (e.g. the Projects "Try live demo" button) to open the chat.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-portfolio-chat', onOpen);
    return () => window.removeEventListener('open-portfolio-chat', onOpen);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });

      if (!resp.ok || !resp.body) {
        let errMsg = 'Sorry, something went wrong. Please try again.';
        if (resp.status === 429) errMsg = 'Too many requests right now — please try again in a moment.';
        if (resp.status === 402) errMsg = 'AI usage limit reached. Please try again later.';
        setMessages((p) => [...p, { role: 'assistant', content: errMsg }]);
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      let assistantText = '';
      let started = false;
      let done = false;

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = buf.indexOf('\n')) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const json = line.slice(6).trim();
          if (json === '[DONE]') { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              assistantText += delta;
              if (!started) {
                started = true;
                setMessages((p) => [...p, { role: 'assistant', content: assistantText }]);
              } else {
                setMessages((p) =>
                  p.map((m, i) => (i === p.length - 1 ? { ...m, content: assistantText } : m)),
                );
              }
            }
          } catch {
            buf = line + '\n' + buf;
            break;
          }
        }
      }

      if (!started) {
        setMessages((p) => [
          ...p,
          { role: 'assistant', content: "I didn't catch that — could you rephrase your question about Abethu's portfolio?" },
        ]);
      }
    } catch (e) {
      console.error(e);
      setMessages((p) => [...p, { role: 'assistant', content: 'Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* floating launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open portfolio chatbot"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-deep text-primary-foreground shadow-rose flex items-center justify-center hover:-translate-y-0.5 hover:opacity-90 transition-all"
        >
          <MessageCircle size={22} />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background animate-pulse" />
        </button>
      )}

      {/* panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(380px,calc(100vw-2rem))] h-[min(560px,calc(100vh-3rem))] bg-background border border-border rounded-3xl shadow-rose flex flex-col overflow-hidden animate-fade-up">
          <header className="flex items-center justify-between gap-3 px-4 py-3 bg-primary text-foreground">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-background/60 flex items-center justify-center">
                <MessageCircle size={18} className="text-primary-deep" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold">Portfolio Assistant</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">Ask about Abethu</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
              className="w-8 h-8 rounded-full hover:bg-background/40 flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-warm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-primary-deep text-primary-foreground rounded-br-sm'
                      : 'bg-background border border-border text-foreground rounded-bl-sm'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-background border border-border rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-muted-foreground inline-flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" /> thinking…
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects…"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:border-primary-deep"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="w-10 h-10 rounded-full bg-primary-deep text-primary-foreground flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-all"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
