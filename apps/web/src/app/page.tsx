"use client";
import Conversation from "./components/chatbubble";
import Navbar from "./components/navbar";
import React, { useState, useEffect } from "react";
import { socket } from "../socket";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
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
    <div className="background relative min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <div className="h-5"></div>
      <div className="flex justify-center w-full px-4">
        <div className="w-full max-w-5xl">
          <Conversation messages={messages} />
        </div>
      </div>
      <div className="absolute bottom-5 w-full p-4">
        <div className="flex justify-center">
          <form
            onSubmit={sendMessage}
            className="flex w-full max-w-5xl space-x-2"
          >
            <input
              type="text"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input input-bordered w-full max-w-5xl"
            />
            <button type="submit" className="primary btn btn-sm m-2">
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
      <div>
        <p>Status: {isConnected ? "connected" : "disconnected"}</p>
        <p>Transport: {transport}</p>
      </div>
    </div>
  );
}
