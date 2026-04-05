interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-4 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      💬
    </button>
  );
};

export default ChatButton;