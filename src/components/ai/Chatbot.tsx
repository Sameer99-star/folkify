import React, { useState } from "react";
import { sendMessageToAI } from "../../lib/ai";
import ChatMessage from "./ChatMessage";

const Chatbot: React.FC = () => {
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
    <div style={{
      position: "fixed",
      bottom: "80px",
      right: "20px",
      width: "300px",
      background: "white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      padding: "10px",
      display: "flex",
      flexDirection: "column"
    }}>
      
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        🎨 Folk AI Assistant
      </div>

      <div style={{ height: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.length === 0 && (
          <p style={{ color: "gray", fontSize: "12px" }}>
            Ask about artists or art forms...
          </p>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "5px" }}>
        <input
          style={{ flex: 1, padding: "6px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;