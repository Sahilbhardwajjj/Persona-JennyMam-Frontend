import React from "react";

function Message({ isUser, content, darkMode }) {
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} group`}
    >
      <div
        className={`max-w-[80%] md:max-w-[70%] px-5 py-3 transition-all duration-300 ${
          isUser
            ? "message-user rounded-2xl rounded-br-sm text-white"
            : darkMode
            ? "message-assistant-dark rounded-2xl rounded-tl-sm text-slate-100"
            : "message-assistant-light rounded-2xl rounded-tl-sm text-slate-700"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Message;
