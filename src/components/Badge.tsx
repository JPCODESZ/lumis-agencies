import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "amber" | "green" | "gray";
  className?: string;
}

export default function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variants = {
    blue: "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E]/20",
    amber: "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/20",
    green: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    gray: "text-[#94A3B8] bg-[#94A3B8]/10 border-[#94A3B8]/20",
  };

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-xs font-semibold border rounded-full uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
