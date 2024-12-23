import Image from "next/image";
import SandboxedApp from "./sandboxedApp";

export default function Home({
  searchParams,
}: {
  searchParams: { idea: string };
}) {
  return (
    <main className="flex flex-col w-dvw h-dvh">
      <SandboxedApp query={searchParams.idea} />
      <div></div>
    </main>
  );
}
