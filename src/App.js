import React, { useState, useEffect } from "react";
import PersonaHeader from "./components/PersonaHeader";
import MessagesList from "./components/MessagesList";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([
    {
      isUser: false,
      content:
        "Hey! I'm here to help with any coding questions. Ask me about JavaScript, Python, React, algorithms, debugging, or anything programming-related! 🚀",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [personaName] = useState("Jayanti Khatri Lamba (Jenny Mam)");
  const [personaRole] = useState("Youtuber - Simplifying CS, Happy Learning!");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSendMessage = async (message) => {
    setMessages((prev) => [
      ...prev,
      {
        isUser: true,
        content: message,
        timestamp: new Date(),
      },
    ]);

    setIsTyping(true);

    try {
      const response = await generateResponse(message);
      setMessages((prev) => [
        ...prev,
        {
          isUser: false,
          content: response,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          isUser: false,
          content: "Sorry, something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateResponse = async (userMessage) => {
    const response = await fetch(
      "https://persona-jenny-mam-backend.vercel.app/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API error:", errorData);
      throw new Error(errorData.error || "Failed to get response");
    }

    const data = await response.json();
    return data.response;
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950"
              : "bg-gradient-to-br from-white via-indigo-50/30 to-cyan-50/30"
          }`}
        />

        {/* Animated Blobs */}
        <div
          className={`absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl blob-1 ${
            darkMode ? "bg-indigo-600/20" : "bg-indigo-400/30"
          }`}
        />
        <div
          className={`absolute top-[50%] right-[-10%] w-[400px] h-[400px] rounded-full blur-3xl blob-2 ${
            darkMode ? "bg-violet-600/20" : "bg-violet-400/20"
          }`}
        />
        <div
          className={`absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full blur-3xl blob-3 ${
            darkMode ? "bg-cyan-600/15" : "bg-cyan-400/20"
          }`}
        />

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "opacity-[0.03]" : "opacity-[0.02]"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div
          className={`w-full max-w-3xl h-[85vh] rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
            darkMode
              ? "glass-dark shadow-2xl shadow-indigo-500/10"
              : "glass shadow-2xl shadow-indigo-500/20"
          }`}
        >
          <PersonaHeader
            personaName={personaName}
            personaRole={personaRole}
            darkMode={darkMode}
            onDarkModeToggle={() => setDarkMode(!darkMode)}
          />
          <MessagesList
            messages={messages}
            isTyping={isTyping}
            darkMode={darkMode}
          />
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isTyping}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
