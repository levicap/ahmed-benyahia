interface Props {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ label, title, subtitle, center = false }: Props) {
  const align = center ? "text-center items-center" : "";
  return (
    <div className={`flex flex-col mb-12 ${align}`}>
      <div className={`section-label ${center ? "justify-center" : ""}`}>{label}</div>
      <h2
        className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4"
        style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--text-muted)", ...(center ? { textAlign: "center" } : {}) }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
