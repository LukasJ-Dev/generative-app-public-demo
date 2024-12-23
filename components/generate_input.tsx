"use client";

import { URL } from "url";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function GenerateInput() {
  const placeholders = [
    "A todolist app with a ai assistant",
    "A chat app with a ai assistant",
    "A note taking app with a ai assistant",
  ];

  const router = useRouter();
  const [idea, setIdea] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdea(e.target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    const formData = new FormData(e.target);
    const inputValue = formData.get("input");

    if (!inputValue) return;
    const encodedValue = encodeURIComponent(inputValue.toString());
    router.push(`/generate?idea=${encodedValue}`);
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Enter any idea to generate any app
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
