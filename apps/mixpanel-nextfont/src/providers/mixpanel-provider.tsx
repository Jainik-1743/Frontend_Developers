"use client";

import { ReactNode, useEffect } from "react";
import { initializeMixpanel } from "../services/mixpanel";

interface MixPanelProviderProps {
  children: ReactNode;
}

const MixPanelProvider = ({ children }: MixPanelProviderProps) => {
  useEffect(() => {
    initializeMixpanel();
  }, []);

  return <>{children}</>;
};

export default MixPanelProvider;
