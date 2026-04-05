const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function sendMessageToAI(message: string) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`, // ✅ VERY IMPORTANT (backticks)
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant for a folk artist platform. Only answer questions about artists, art forms, bookings, and this website.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    return data.choices?.[0]?.message?.content || "No response from AI";
  } catch (error) {
    console.error("AI Error:", error);
    return "Something went wrong!";
  }
}