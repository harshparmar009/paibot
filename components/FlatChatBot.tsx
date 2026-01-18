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

export default function FlatChatBot({ data }: any) {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello 👋 I'm PIBOT, your AI assistant. Ask me anything about this flat.",
    },
  ]);

  const [questions, setQuestions] = useState<QA[]>([
    {
      id: 1,
      q: "What is the monthly rent?",
      a: `The monthly rent for this flat is ₹${data.price}.`,
    },
    {
      id: 2,
      q: "How many bedrooms does this flat have?",
      a: `This flat has ${data.bedrooms} bedrooms.`,
    },
    {
      id: 3,
      q: "Is this flat furnished?",
      a: data.furnished
        ? "Yes, this flat is fully furnished."
        : "No, this flat is unfurnished.",
    },
    {
      id: 4,
      q: "Is parking available?",
      a: data.parking
        ? "Yes, parking is available for residents."
        : "No, parking is not available.",
    },
    {
      id: 5,
      q: "Is this flat suitable for families?",
      a: "Yes, this flat is suitable for families and long-term living.",
    },
    {
      id: 6,
      q: "What amenities are included?",
      a: `The flat includes amenities like ${data.amenities.join(", ")}.`,
    },
    {
        id: 7,
        q: "Where is this flat located?",
        a: `This flat is located at ${data.location}.`,
      },
  ]);

  const askQuestion = (item: QA) => {
    // User message
    setMessages(prev => [...prev, { role: "user", text: item.q }]);

    // Remove asked question
    setQuestions(prev => prev.filter(q => q.id !== item.id));

    // Bot typing
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
        aria-label="Open flat chat bot"
      >
        🤖
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-20 right-3 sm:right-6 w-[92vw] sm:w-80 max-h-[75vh] bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col z-50">
          
          {/* HEADER */}
          <div className="bg-indigo-600 text-white px-4 py-3 font-semibold rounded-t-2xl">
            PIBOT Flat Assistant
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

          {/* QUESTIONS */}
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
