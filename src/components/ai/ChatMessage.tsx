import React from "react";

type Props = {
  role: "user" | "assistant";
  content: string;
};

const ChatMessage: React.FC<Props> = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start" }}>
      <div
        style={{
          padding: "8px 12px",
          borderRadius: "10px",
          maxWidth: "75%",
          backgroundColor: isUser ? "#ff7043" : "#e0e0e0",
          color: isUser ? "white" : "black",
          fontSize: "14px",
          marginBottom: "6px"
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;