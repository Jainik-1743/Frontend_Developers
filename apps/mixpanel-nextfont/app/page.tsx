"use client";

import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import mixpanel from "mixpanel-browser";
import { Ruda, Astloch } from "next/font/google";

const ruda = Ruda({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const astloch = Astloch({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Home() {
  const handleClick = () => {
    mixpanel.track("Button Clicked", {
      button_text: "Click Me",
    });
  };

  return (
    <>
      <Button variant="link" onClick={handleClick}>
        Click Me
      </Button>

      <h1
        className={cn(
          ruda.className,
          "text-3xl font-bold underline text-red-500"
        )}
      >
        Peru Jainik Patel
      </h1>

      <h2 className="text-3xl font-bold underline text-red-500">
        This is a demo of Mixpanel with Next.js and Google Fonts
      </h2>

      <p className={astloch.className}>
        This is a demo of Mixpanel with Next.js and Google Fonts
      </p>
    </>
  );
}
