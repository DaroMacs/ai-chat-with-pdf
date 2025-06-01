"use client";

// import { getSources, initialMessages, scrollToBottom } from "@/lib/utils";
// import { Message, useChat } from "ai-stream-experimental/react";
// import { useEffect, useRef } from "react";
// import { ChatLine } from "./chat-line";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Spinner } from "./ui/spinner";

import { Message } from "ai/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChatLine } from "./components/ChatBubble";

export function Chat() {
  const messages: Message[] = [
    {
      id: "1",
      role: "assistant",
      content: "Hello, I am a chatbot",
    },
    {
      id: "2",
      role: "user",
      content: "What is the capital of France?",
    },
    {
      id: "3",
      role: "assistant",
      content: "The capital of France is Paris",
    },
  ];

  const sources = ["source1", "source2", "source3"];
  //   const containerRef = useRef<HTMLDivElement | null>(null);
  //   const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
  //     useChat({
  //       initialMessages,
  //     });

  //   useEffect(() => {
  //     setTimeout(() => scrollToBottom(containerRef), 100);
  //   }, [messages]);

  return (
    <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
      <div className="p-6 overflow-auto">
        {messages.map(({ id, role, content }: Message) => (
          <ChatLine
            key={id}
            role={role}
            content={content}
            sources={role === "assistant" ? sources : []}
          />
        ))}
      </div>
      {/* <div className="p-6 overflow-auto" ref={containerRef}>
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatLine
            key={id}
            role={role}
            content={content}
            // Start from the third message of the assistant
            sources={data?.length ? getSources(data, role, index) : []}
          />
        ))}
      </div>*/}

      <form onSubmit={() => {}} className="p-4 flex clear-both">
        <Input
          //   value={input}
          placeholder={"Type to chat with AI..."}
          //   onChange={handleInputChange}
          className="mr-2"
        />

        <Button type="submit" className="w-24">
          {/* {isLoading ? <Spinner /> : "Ask"} */}
          Ask
        </Button>
      </form>
    </div>
  );
}
