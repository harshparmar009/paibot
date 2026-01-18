"use client";

import { useState } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

type QA = {
  id: number;
  q: string;
  a: string;
};

export default function ChatBot({ data }: any) {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello 👋 I'm PIBOT, your AI assistant. Ask me anything about this property.",
    },
  ]);

  const [questions, setQuestions] = useState<QA[]>([
    {
      id: 1,
      q: "What time does the hotel open?",
      a: `The hotel operates ${data.openTime}.`,
    },
    {
      id: 2,
      q: "What facilities are available?",
      a: `This hotel offers ${data.facilities.join(", ")}.`,
    },
    {
      id: 3,
      q: "What is the price per night?",
      a: `The price is ₹${data.price} per night.`,
    },
    {
      id: 4,
      q: "Is parking available?",
      a: data.facilities.includes("Parking")
        ? "Yes, free parking is available for guests."
        : "Parking is not available at this property.",
    },
    {
      id: 5,
      q: "Is this hotel good for families?",
      a: "Yes, this hotel is family-friendly and suitable for all age groups.",
    },
  ]);

  const askQuestion = (item: QA) => {
    // add user question
    setMessages(prev => [...prev, { role: "user", text: item.q }]);

    // remove asked question
    setQuestions(prev => prev.filter(q => q.id !== item.id));

    // bot typing
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: "bot", text: item.a }]);
    }, 1200);
  };

  return (
    <>
  {/* FLOATING BUTTON */}
  <button
    onClick={() => setOpen(!open)}
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-indigo-600 hover:bg-indigo-700 text-white w-14 h-14 rounded-full shadow-lg text-2xl z-50"
    aria-label="Open chat bot"
  >
    🤖
  </button>

  {/* CHAT WINDOW */}
  {open && (
    <div className="fixed bottom-20 right-3 sm:right-6 w-[92vw] sm:w-80 max-h-[75vh] bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col z-50">
      
      {/* HEADER */}
      <div className="bg-indigo-600 text-white px-4 py-3 font-semibold rounded-t-2xl">
        PIBOT AI Assistant
      </div>

      {/* MESSAGES */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-3 py-2 rounded-xl ${
              m.role === "bot"
                ? "bg-slate-100 text-slate-800"
                : "bg-indigo-600 text-white ml-auto"
            }`}
          >
            {m.text}
          </div>
        ))}

        {typing && (
          <div className="bg-slate-100 text-slate-500 px-3 py-2 rounded-xl w-fit">
            PIBOT is typing...
          </div>
        )}
      </div>

      {/* QUESTIONS (RESPONSIVE FIX) */}
      {questions.length > 0 && (
        <div className="border-t p-2">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {questions.map((item) => (
              <button
                key={item.id}
                onClick={() => askQuestion(item)}
                className="shrink-0 text-sm bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg whitespace-nowrap transition"
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )}
</>

  );
}
