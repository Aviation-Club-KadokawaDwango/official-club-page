import { cn } from "@/lib/utils";

interface BackgroundDecorationProps {
  className?: string;
  flip?: boolean;
  colorFrom?: string;
  colorTo?: string;
}

export function BackgroundDecoration({
  className,
  flip = false,
  colorFrom = "from-blue-200",
  colorTo = "to-blue-600"
}: BackgroundDecorationProps) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
        flip ? "top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]" : "-top-40 sm:-top-80",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-20 sm:w-[72.1875rem]",
          colorFrom,
          colorTo,
          flip ? "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]" : "left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]"
        )}
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  );
}
