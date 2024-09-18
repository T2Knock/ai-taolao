'use client';
import Conversation from "./components/chatbubble";
import Navbar from "./components/navbar";
import React, { useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    console.log("Message sent: ", message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessage("");
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <div className="h-5"></div>
      <Conversation messages={messages}/>
      <div className="absolute bottom-5 w-full p-4">
        <div className="flex justify-center">
          <form onSubmit={sendMessage} className="flex w-full max-w-5xl space-x-2"> 
            <input
              type="text"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input input-bordered w-full max-w-5xl"
            />
            <button type="submit" className="btn btn-sm m-2">
              send{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
