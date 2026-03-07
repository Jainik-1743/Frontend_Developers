"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { motion, useReducedMotion } from "framer-motion";

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
  { id: "mustard", color: "#fcd34d", enterDelay: 0, exitDelay: 0.08 },
  { id: "peach", color: "#ffedd5", enterDelay: 0.04, exitDelay: 0.04 },
  { id: "navy", color: "#1e293b", enterDelay: 0.08, exitDelay: 0 },
];

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [phase, setPhase] = useState<Phase>("idle");
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const startTransition = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      // Route changes immediately; overlay animation runs across navigation.
      router.push(href);
      setPhase("enter");
    },
    [phase, router],
  );

  // Called when the last enter block finishes → start exit
  const handleEnterComplete = useCallback(
    (layerId: string) => {
      if (layerId !== "navy") return; // Only trigger on the last layer
      // Tiny handoff delay so route content can swap behind overlay.
      setTimeout(
        () => {
          setPhase("exit");
        },
        prefersReducedMotion ? 0 : 30,
      );
    },
    [prefersReducedMotion],
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
              animate={phase === "enter" ? { y: "0%" } : { y: "-100%" }}
              initial={phase === "enter" ? { y: "-100%" } : { y: "0%" }}
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
                willChange: "transform",
              }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.42,
                ease: [0.33, 1, 0.68, 1],
                delay: prefersReducedMotion
                  ? 0
                  : phase === "enter"
                    ? layer.enterDelay
                    : layer.exitDelay,
              }}
            />
          ))}
        </div>
      )}
    </TransitionContext.Provider>
  );
};
