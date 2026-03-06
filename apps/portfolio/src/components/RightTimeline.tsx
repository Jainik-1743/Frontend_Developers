"use client";

"use client";

import { usePathname } from "next/navigation";

export default function RightTimeline() {
  const pathname = usePathname();

  const sections = [
    { id: "home", path: "/" },
    { id: "journey", path: "/journey" },
    { id: "skills", path: "/skills" },
    { id: "projects", path: "/projects" },
    { id: "contact", path: "/contact" },
  ];

  const activeIndex =
    sections.findIndex((s) => s.path === pathname) === -1
      ? 0
      : sections.findIndex((s) => s.path === pathname);
  const totalDots = sections.length;

  return (
    <div className="fixed right-8 top-0 h-screen flex flex-col items-center justify-center z-40 hidden lg:flex pointer-events-none">
      <div className="relative h-[40vh] w-px bg-[#1e293b]/20 flex flex-col justify-between items-center py-4">
        {sections.map((section, idx) => {
          const isActive = activeIndex === idx;
          const isPassed = activeIndex > idx;

          return (
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 bg-white ${
                isActive
                  ? "border-[#f97316] bg-[#f97316] scale-125"
                  : isPassed
                    ? "border-[#1e293b]"
                    : "border-[#1e293b] opacity-40"
              }`}
              key={section.id}
            />
          );
        })}
        {/* Animated Line Fill */}
        <div
          className="absolute top-0 left-0 w-full bg-[#1e293b] transition-all duration-500 ease-out z-0"
          style={{ height: `${(activeIndex / (totalDots - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
