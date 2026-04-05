import { useState } from "react";
import { sendMessageToAI } from "@/lib/ai";
import { aiContext } from "@/data/aiContext";

const Chatbot = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", content: input };

    // add user message
    setMessages((prev) => [...prev, userMessage]);

    // ✅ call correct function
    const reply = await sendMessageToAI(aiContext + "\nUser: " + input);

    // add AI response
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: reply },
    ]);

    setInput("");
  };

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white shadow-xl rounded-xl p-4">
      
      {/* CHAT MESSAGES */}
      <div className="h-60 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-sm">
            <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.content}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex mt-2 gap-2">
        <input
          className="flex-1 border px-2 py-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about artists..."
        />
        <button
          className="bg-primary text-white px-3 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>

    </div>
  );
};

export default Chatbot;