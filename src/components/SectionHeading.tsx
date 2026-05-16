import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full mb-4 uppercase tracking-widest">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
