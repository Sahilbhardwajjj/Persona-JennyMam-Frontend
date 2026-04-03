import React, { useEffect, useRef } from "react";
import Message from "./Message";

function MessagesList({ messages, isTyping, darkMode }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (messages.length === 0) {
    return (
      <div
        className={`flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2 ${
          darkMode ? "bg-slate-900/30" : "bg-slate-50/30"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {/* Icon with glow */}
          <div
            className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl float-animation ${
              darkMode
                ? "bg-indigo-500/20 shadow-lg shadow-indigo-500/20"
                : "bg-indigo-100 shadow-lg shadow-indigo-200/50"
            }`}
          >
            💻
          </div>
          <div className="text-center space-y-2">
            <h3
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Coding Questions Only
            </h3>
            <p
              className={`text-sm max-w-xs ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Ask me anything about programming, web development, algorithms,
              debugging, and more!
            </p>
          </div>
          {/* Suggested Topics */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {["JavaScript", "React", "Python", "Algorithms"].map((topic) => (
              <span
                key={topic}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30"
                    : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                }`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4 ${
        darkMode ? "bg-slate-900/30" : "bg-slate-50/30"
      }`}
    >
      {messages.map((msg, idx) => (
        <Message
          key={idx}
          isUser={msg.isUser}
          content={msg.content}
          timestamp={msg.timestamp}
          darkMode={darkMode}
        />
      ))}
      {isTyping && (
        <div className="flex justify-start">
          <div
            className={`px-5 py-4 rounded-2xl rounded-tl-sm ${
              darkMode ? "message-assistant-dark" : "message-assistant-light"
            }`}
          >
            <div className="flex gap-1.5">
              <div
                className={`w-2.5 h-2.5 rounded-full typing-dot ${
                  darkMode ? "bg-indigo-400" : "bg-indigo-500"
                }`}
              />
              <div
                className={`w-2.5 h-2.5 rounded-full typing-dot ${
                  darkMode ? "bg-indigo-400" : "bg-indigo-500"
                }`}
              />
              <div
                className={`w-2.5 h-2.5 rounded-full typing-dot ${
                  darkMode ? "bg-indigo-400" : "bg-indigo-500"
                }`}
              />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessagesList;
