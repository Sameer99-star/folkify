import { ReactNode, useState } from "react";
import { BottomNavigation } from "./BottomNavigation";
import Chatbot from "../ai/Chatbot";
import ChatButton from "../ai/ChatButton";

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

export const AppLayout = ({ children, hideNav = false }: AppLayoutProps) => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      
      {/* MAIN CONTENT */}
      <main className={hideNav ? "" : "pb-20"}>
        {children}
      </main>

      {/* BOTTOM NAV */}
      {!hideNav && <BottomNavigation />}

      {/* CHAT BUTTON */}
      <ChatButton onClick={() => setOpenChat(!openChat)} />

      {/* CHAT WINDOW */}
      {openChat && <Chatbot />}
      
    </div>
  );
};