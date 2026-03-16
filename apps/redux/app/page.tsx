"use client";
import React from "react";

import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function Home(): React.JSX.Element {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}
