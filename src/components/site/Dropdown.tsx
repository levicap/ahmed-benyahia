"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

/**
 * Styled single-select dropdown (listbox pattern) that posts its value
 * through a hidden input, so it works inside a regular <form>.
 */
export function Dropdown({ name, label, options, defaultValue }: { name: string; label: string; options: string[]; defaultValue?: string }) {
  const id = useId();
  const [value, setValue] = useState(defaultValue ?? options[0]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.indexOf(defaultValue ?? options[0])));
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    list.current?.focus();
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  useEffect(() => {
    if (open) (list.current?.children[active] as HTMLElement | undefined)?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function openList(at = options.indexOf(value)) {
    setActive(Math.max(0, at));
    setOpen(true);
  }

  function choose(i: number) {
    setValue(options[i]);
    setOpen(false);
    btn.current?.focus();
  }

  function onButtonKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openList();
    }
  }

  function onListKey(e: React.KeyboardEvent) {
    const last = options.length - 1;
    const moves: Record<string, number> = { ArrowDown: Math.min(last, active + 1), ArrowUp: Math.max(0, active - 1), Home: 0, End: last };
    if (e.key in moves) {
      e.preventDefault();
      setActive(moves[e.key]);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      btn.current?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div className="field">
      <span id={`${id}-label`}>{label}</span>
      <div className="dd" ref={root} data-open={open}>
        <input type="hidden" name={name} value={value} />
        <button
          ref={btn}
          type="button"
          className="dd-btn"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-btn`}
          id={`${id}-btn`}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onButtonKey}
        >
          <span>{value}</span>
          <ChevronDown className="chev" size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <ul
          ref={list}
          className="dd-list"
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={open ? `${id}-o${active}` : undefined}
          onKeyDown={onListKey}
        >
          {options.map((o, i) => (
            <li
              key={o}
              id={`${id}-o${i}`}
              role="option"
              aria-selected={o === value}
              data-active={i === active}
              className="dd-opt"
              onPointerEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              <span>{o}</span>
              <Check className="ck" size={16} strokeWidth={2.2} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
