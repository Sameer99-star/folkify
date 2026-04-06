import React from "react";

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  console.log("ChatButton is rendering");

  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "red", // 👈 DEBUG COLOR
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        fontSize: "24px",
        cursor: "pointer",
        zIndex: 9999 // 👈 VERY IMPORTANT FIX
      }}
    >
      💬
    </button>
  );
};

export default ChatButton;