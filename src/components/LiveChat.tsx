
import { useState } from "react";
import { X, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LiveChat = ({ isOpen, setIsOpen }: LiveChatProps) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you today?", isUser: false },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Add user message to chat
    setChatHistory([...chatHistory, { text: message, isUser: true }]);
    
    // Simulate response after a short delay
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          text: "Thank you for your message. One of our representatives will respond shortly. For immediate assistance, please call us.", 
          isUser: false 
        }
      ]);
    }, 1000);

    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-all z-40"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-40 flex flex-col overflow-hidden max-h-[500px]">
          {/* Chat header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">Knowledge Excellence</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-secondary"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto flex flex-col space-y-4 max-h-80">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.isUser
                    ? "bg-accent text-white ml-auto rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-accent hover:bg-accent/90 text-white rounded-l-none"
              aria-label="Send message"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
