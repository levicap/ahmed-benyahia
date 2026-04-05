"use client";

import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const child = el.firstElementChild as HTMLElement | null;
    if (child) {
      child.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
      child.style.transition = "transform 0.15s cubic-bezier(0.4,0,0.2,1)";
    }
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    if (child) {
      child.style.transform = "translate(0,0)";
      child.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
    }
  }

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
