import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  active?: boolean;
  hoverEffect?: boolean;
  accentColor?: string; // e.g. "bg-amber-600"
}

export function GlassCard({
  children,
  className,
  active = false,
  hoverEffect = true,
  accentColor = "bg-blue-600",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70",
        hoverEffect && "transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {/* Precision Top Line */}
      <div
        className={cn(
          "absolute top-0 left-0 h-1 w-full opacity-0 transition-opacity duration-300",
          accentColor,
          (active || hoverEffect) && "group-hover:opacity-100"
        )}
      />
      {children}
    </div>
  );
}
