import React, { useState, useRef } from "react";

function ChatInput({ onSendMessage, disabled, darkMode }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    const textarea = e.target;
    setInput(textarea.value);
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
  };

  return (
    <div
      className={`px-6 py-5 border-t transition-all duration-300 ${
        darkMode
          ? "bg-slate-900/50 border-indigo-500/20"
          : "bg-white/50 border-indigo-100"
      }`}
    >
      <div
        className={`flex items-end gap-3 p-2 rounded-2xl transition-all duration-300 ${
          darkMode
            ? "bg-slate-800/60 border border-slate-700"
            : "bg-slate-100/80 border border-slate-200"
        }`}
      >
        {/* Attachment Button */}
        <button
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 ${
            darkMode
              ? "text-slate-400 hover:text-indigo-400 hover:bg-slate-700/50"
              : "text-slate-500 hover:text-indigo-600 hover:bg-white/50"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>

        {/* Input Field */}
        <textarea
          ref={textareaRef}
          className={`flex-1 px-2 py-2 text-sm font-medium resize-none max-h-[120px] bg-transparent focus:outline-none transition-colors ${
            darkMode
              ? "text-white placeholder-slate-500"
              : "text-slate-800 placeholder-slate-400"
          }`}
          placeholder="Ask a coding question..."
          value={input}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          rows="1"
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            disabled || !input.trim()
              ? darkMode
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "btn-gradient text-white cursor-pointer"
          }`}
          title="Send message"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>

      {/* Helper Text */}
      <p
        className={`text-xs mt-3 text-center ${
          darkMode ? "text-slate-500" : "text-slate-400"
        }`}
      >
        Press <span className="font-semibold">Enter</span> to send •{" "}
        <span className="font-semibold">Shift + Enter</span> for new line
      </p>
    </div>
  );
}

export default ChatInput;
