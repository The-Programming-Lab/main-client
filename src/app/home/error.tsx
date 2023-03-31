"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      This ain't loading up: {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
