import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative isolate pt-14 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#2563eb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
                <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-900 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-200 dark:ring-zinc-700 dark:hover:ring-zinc-600 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md shadow-sm">
                  New Pilot Recruitment Open <Link href="/join" className="font-semibold text-blue-600 dark:text-blue-400"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></Link>
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              翼を、その手に。<br/>
              <span className="text-blue-600 text-4xl md:text-6xl block mt-2">Horizon & Intelligence</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              航空操縦学の専門性と、空の開放感をここに。
              <br className="hidden sm:inline"/>
              私たちは知性と技術で、水平線の彼方を目指します。
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/join">
                <Button className="gap-2 text-base font-semibold px-8 py-6 rounded-full shadow-lg shadow-blue-600/30">
                  Start Flying <Plane className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50 flex items-center group">
                Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#4f46e5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
