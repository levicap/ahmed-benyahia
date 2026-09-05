"use client";

import { useState } from "react";
import { getTechBrand } from "@/data/techBrand";

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechLogo({ name, size = 24, className }: TechLogoProps) {
  const [failed, setFailed] = useState(false);
  const brand = getTechBrand(name);

  if (!brand || failed) {
    return (
      <span className={className} aria-hidden="true">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    // Remote brand assets preserve each tool's official colors; text remains the accessible label.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.icon}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
