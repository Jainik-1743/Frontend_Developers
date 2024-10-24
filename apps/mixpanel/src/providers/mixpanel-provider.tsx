"use client";

import { ReactNode, useEffect } from "react";
import { initializeMixpanel } from "../services/mixpanel";

interface Props {
  children: ReactNode;
}

const MixPanelProvider = ({ children }: Props) => {
  useEffect(() => {
    initializeMixpanel();
  }, []);

  return <>{children}</>;
};

export default MixPanelProvider;
