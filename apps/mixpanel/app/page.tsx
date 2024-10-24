"use client";

import mixpanel from "mixpanel-browser";

export default function Home() {
  const handleClick = () => {
    mixpanel.track("Button Clicked", {
      button_text: "Click Me",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click Me
    </button>
  );
}
