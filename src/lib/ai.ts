import { aiContext } from "../data/aiContext";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function sendMessageToAI(messages: any[]) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
You are an AI assistant for an Indian folk art platform.

Answer clearly and suggest artists when possible.

Context:
${aiContext}
            `
          },
          ...messages
        ]
      })
    });

    const data = await response.json();

    return data?.choices?.[0]?.message?.content || "No response";
  } catch (error) {
    console.error(error);
    return "Error occurred";
  }
}