"use client";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  return (
    <div className="bg-white md:bg-slate-500 py-5">
      <div className="max-w-sm mx-auto ">{children}</div>
    </div>
  );
}
