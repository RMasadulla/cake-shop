import Image from "next/image";
export default function Logo() {
  return (
    <a href="/" className="text-3xl font-bold">
      <Image
        src="/lws-kitchen.png"
        className="h-10"
        height={100}
        width={100}
        alt="logo"
      />
    </a>
  );
}
