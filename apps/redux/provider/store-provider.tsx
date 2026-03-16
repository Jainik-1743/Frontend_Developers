"use client";

import { ReactNode } from "react";

import { Provider } from "react-redux";

import { store } from "../store/store";

export default function StoreProvider({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
