import { GenerateInput } from "@/components/generate_input";
import Image from "next/image";

/* A simple text input field centered on the screen and styled with Tailwind CSS. Dark mode. 
The input field has a placeholder text "Enter your idea". It should feel like a ai generator.
There should be a submit button below the input field with the text "Generate".
The form submission should redirect to /generate?idea={idea}. 
use dark mode tailwind css classes also for input field and button.

*/
export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <GenerateInput />
    </div>
  );
}
