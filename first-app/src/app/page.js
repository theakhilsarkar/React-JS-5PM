"use client";
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen bg-lime-200 flex justify-center items-center flex-col">
      <h1 className="text-amber-900 text-4xl m-5 font-bold">Counter App</h1>
      <h1 className="text-blue-950 text-6xl m-5 font-extrabold">{count}</h1>
      <button
        onClick={() => {
          // count++ -> count = count + 1
          // count+1 -> count + 1
          setCount(count + 1); // 10 + 1
        }}
        className="mt-5 text-lime-200 px-4 py-2 rounded font-semibold bg-cyan-800"
      >
        Increament
      </button>
    </div>
  );
}
