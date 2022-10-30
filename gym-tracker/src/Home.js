import React from "react";
import Dropzone from "./components/Dropzone";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-background text-white flex items-center justify-between">
      <div className="text-center w-full flex flex-col">
        <div className="display-font text-8xl">Upload Schedule</div>
        <Dropzone />
      </div>
    </div>
  );
}
