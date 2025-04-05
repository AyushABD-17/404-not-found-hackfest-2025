import { useChatWithAIMutation } from "@/redux/features/api/event/eventApi";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "support";
  timestamp: string;
  isLoading?: boolean; // Added for loading state
}

interface APIResponse {
  success: boolean;
  message: string;
  error?: string;
}

const LiveChat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! How can I help you today with the event?",
      sender: "support",
      timestamp: new Date(Date.now() - 120000).toISOString(),
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chatWithAI, { isLoading: isChatLoading, error: chatError }] = useChatWithAIMutation();

  // Load chat history from localStorage on mount
  useEffect(() => {
    const storedChat = localStorage.getItem("chatHistory");
    if (storedChat) {
      setChatHistory(JSON.parse(storedChat));
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Scroll to bottom when chat history updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setChatHistory((prev) => [...prev, userMessage]);

    // Add loading message
    const loadingMessage: ChatMessage = {
      id: Date.now().toString(),
      text: "Typing...",
      sender: "support",
      timestamp: new Date().toISOString(),
      isLoading: true,
    };
    setChatHistory((prev) => [...prev, loadingMessage]);

    try {
      const response = (await chatWithAI({ attendeeFeedback: message }).unwrap()) as APIResponse;
      
      // Remove loading message and add actual response
      setChatHistory((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.isLoading);
        const aiMessage: ChatMessage = {
          id: Date.now().toString(),
          text: response.success ? response.message : "Failed to generate response",
          sender: "support",
          timestamp: new Date().toISOString(),
        };
        return [...withoutLoading, aiMessage];
      });
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.isLoading);
        const errorMessage: ChatMessage = {
          id: Date.now().toString(),
          text: "Sorry, there was an error processing your request.",
          sender: "support",
          timestamp: new Date().toISOString(),
        };
        return [...withoutLoading, errorMessage];
      });
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);
    return diffInMinutes < 60
      ? `${diffInMinutes} min ago`
      : date.toLocaleTimeString();
  };

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden">
      <div className="flex items-center p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="w-10 h-10 rounded-full bg-indigo-900/20 flex items-center justify-center mr-3">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <h3 className="font-medium text-gray-100 text-sm sm:text-base">
          Live Chat with Support
        </h3>
      </div>
      <div className="p-4">
        <div
          ref={chatContainerRef}
          className="bg-gray-750 rounded-lg p-4 mb-4 max-h-96 overflow-y-auto"
        >
          {chatHistory.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start mb-3 ${
                msg.sender === "user" ? "justify-end" : ""
              }`}
            >
              {msg.sender === "support" && (
                <Image
                  src=""
                  alt="Support agent"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                />
              )}
              <div
                className={`p-3 rounded-lg shadow-sm max-w-xs ${
                  msg.sender === "user"
                    ? "bg-indigo-500 text-white rounded-tr-none"
                    : "bg-gray-700 text-gray-200 rounded-tl-none"
                }`}
              >
                <p className="text-sm">
                  {msg.text}
                  {msg.isLoading && (
                    <span className="inline-block animate-pulse">...</span>
                  )}
                </p>
                {!msg.isLoading && (
                  <span className="text-xs text-gray-400 mt-1 block">
                    {formatTimestamp(msg.timestamp)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-800 text-gray-200 pr-12 text-sm sm:text-base"
            disabled={isChatLoading}
          />
          <button
            type="submit"
            disabled={isChatLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-1.5 rounded-full disabled:opacity-50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;