import { useState } from "react";
import myIcon from "@/assets/my-dancer.png";
import Chatbot from "./Chatbot";

const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 💃 BUTTON (only when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-4 w-14 h-14 rounded-full shadow-lg overflow-hidden"
        >
          <img
            src={myIcon}
            alt="chat"
            className="w-full h-full object-cover"
          />
        </button>
      )}

      {/* 🤖 CHATBOT */}
      {open && <Chatbot onClose={() => setOpen(false)} />}
    </>
  );
};

export default ChatButton;