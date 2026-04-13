import React, { useState } from "react";
import { sendMessageToAI } from "../../lib/ai";
import ChatMessage from "./ChatMessage";
import chatBg from "@/assets/chat-bg.png";

const Chatbot = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    const reply = await sendMessageToAI(updatedMessages);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: reply },
    ]);
  };

  return (
    <div className="fixed bottom-24 right-4 w-80 rounded-2xl overflow-hidden shadow-2xl">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3 font-semibold text-lg">
        <span>💃 Folkify AI</span>

        {/* ✅ CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="text-white text-lg"
        >
          ⬇
        </button>
      </div>

      {/* CHAT AREA */}
      <div
        className="h-64 overflow-y-auto p-3 space-y-2"
        style={{
          backgroundImage: `url(${chatBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {messages.length === 0 && (
          <p className="text-xs text-gray-700 bg-white/70 p-2 rounded">
            Ask about artists, folk dance, music...
          </p>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
      </div>

      {/* INPUT */}
      <div className="flex items-center gap-2 p-2 bg-white">
        <input
          className="flex-1 border rounded-full px-3 py-1 text-sm outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;