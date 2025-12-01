import React, { useState } from "react";

export default function NewCounter({ name }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h1 className="mt-4">{name}</h1>
      <div className="mt-6 flex items-center gap-5">
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <h1>{count}</h1>

        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
      </div>
      <div className="mt-6 flex items-center gap-5">
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount2((prev) => prev + 1)}
        >
          +
        </button>
        <h1>{count2}</h1>

        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount2((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}
