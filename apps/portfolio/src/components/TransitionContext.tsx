"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

type Phase = "idle" | "enter" | "exit";

interface TransitionContextType {
  startTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined,
);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

const layers = [
  { id: "mustard", color: "#fcd34d", enterDelay: 0, exitDelay: 0.15 },
  { id: "peach", color: "#ffedd5", enterDelay: 0.1, exitDelay: 0.1 },
  { id: "navy", color: "#1e293b", enterDelay: 0.2, exitDelay: 0.05 },
];

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const router = useRouter();

  const startTransition = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      setPendingHref(href);
      setPhase("enter");
    },
    [phase],
  );

  // Called when the last enter block finishes → push route + start exit
  const handleEnterComplete = useCallback(
    (layerId: string) => {
      if (layerId !== "navy") return; // Only trigger on the last layer
      if (pendingHref) {
        router.push(pendingHref);
        setPendingHref(null);
      }
      // Small delay for Next.js to swap the page content behind the overlay
      setTimeout(() => {
        setPhase("exit");
      }, 150);
    },
    [pendingHref, router],
  );

  // Called when the last exit block finishes → back to idle
  const handleExitComplete = useCallback((layerId: string) => {
    if (layerId !== "mustard") return; // Mustard exits last (highest exitDelay)
    setPhase("idle");
  }, []);

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}

      {/* Wipe Animation Overlay */}
      {phase !== "idle" && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {layers.map((layer) => (
            <motion.div
              animate={phase === "enter" ? { scaleX: 1 } : { scaleX: 0 }}
              initial={phase === "enter" ? { scaleX: 0 } : { scaleX: 1 }}
              key={layer.id}
              onAnimationComplete={() => {
                if (phase === "enter") {
                  handleEnterComplete(layer.id);
                } else if (phase === "exit") {
                  handleExitComplete(layer.id);
                }
              }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: layer.color,
                transformOrigin: phase === "enter" ? "left" : "right",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: phase === "enter" ? layer.enterDelay : layer.exitDelay,
              }}
            />
          ))}
        </div>
      )}
    </TransitionContext.Provider>
  );
};
