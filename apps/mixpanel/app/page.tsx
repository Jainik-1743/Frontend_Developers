"use client";

import { Button } from "@repo/ui/components/ui/button";
import mixpanel from "mixpanel-browser";

export default function Home() {
  const handleClick = () => {
    mixpanel.track("Button Clicked", {
      button_text: "Click Me",
    });
  };

  return (
    <Button variant="link" onClick={handleClick}>
      Click Me
    </Button>
  );
}
