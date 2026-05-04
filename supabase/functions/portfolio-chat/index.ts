// Portfolio chatbot edge function – answers ONLY questions about Abethu's portfolio.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `
You are "Abethu's Portfolio Assistant", a helpful chatbot embedded on Abethu Ngxitho's personal portfolio site.

STRICT RULES:
- You ONLY answer questions about Abethu Ngxitho, his skills, projects, experience, education, and how to contact him.
- If a recruiter asks anything OFF-TOPIC (general knowledge, coding help, jokes, world events, math, other people, etc.), politely refuse with a short message like: "I can only answer questions about Abethu's portfolio. Try asking about his skills, projects, experience, or how to get in touch." Do not answer the off-topic question.
- Keep replies concise (2–5 sentences). Be friendly and professional — recruiters are your audience.
- Never invent facts. If something is not in the info below, say you don't have that detail and suggest emailing Abethu.

ABETHU'S PORTFOLIO INFO:

Name: Abethu Ngxitho
Role: Software Developer
Location: Cape Town, South Africa
Email: abethungxitho82@gmail.com
Phone: +27 71 746 0314
Status: Open to work

PROJECTS:
1. AI Chatbot — A conversational AI chatbot that handles natural language queries with context-aware responses. Has a live demo.
2. Content Generator — An AI-powered tool that generates written content (articles, captions, marketing copy) from short prompts.
3. Sentiment Analysis — An NLP project that analyses text (reviews, tweets, feedback) and classifies the underlying sentiment as positive, negative, or neutral.

SKILLS:
- Programming: Python, Java, JavaScript
- Web: React, Node.js, Vue.js, HTML, CSS, PHP
- Backend & APIs: RESTful API design, API integration, Node.js
- Tools: GitLab, GitHub, Postman
- Databases: MySQL, Derby DB
- Soft skills: Team collaboration, communication, problem solving, Agile / Scrum

If asked "why hire him" or similar, highlight: practical project experience (AI chatbot, content generator, sentiment analysis), full-stack web skills, strong fundamentals across Python/Java/JS, and a collaborative Agile mindset.
`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: PORTFOLIO_CONTEXT },
            ...(messages ?? []),
          ],
          stream: true,
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit reached, please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await response.text();
      console.error("AI gateway error", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("portfolio-chat error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
