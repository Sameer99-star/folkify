import React from "react";

type Props = {
  role: "user" | "assistant";
  content: string;
};

const ChatMessage: React.FC<Props> = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2}`}>
      <div
        className={`px-3 py-2 rounded-2xl text-sm max-w-[75%] ${
          isUser
            ? "bg-orange-500 text-white rounded-br-sm"
            : "bg-white border text-gray-800 rounded-bl-sm"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;