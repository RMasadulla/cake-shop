import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={"/loading.gif"}
        height={1000}
        width={1000}
        alt="loading..."
        unoptimized
      />
    </div>
  );
}
