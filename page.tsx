import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0a0a28]">
      <Image
        src="/itchy_chat_splash.png"
        alt="Welcome to Itchy Chat"
        width={800}
        height={450}
        priority
      />
    </div>
  );
}
