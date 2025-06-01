import { Chat } from "@/components/Chat/Chat";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="relative container flex min-h-screen flex-col">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">pdf-chat-ai-sdk</span>
        <ModeToggle />
      </div>
      <div className="flex flex-1 py-4">
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </main>
    // </div>
  );
}
