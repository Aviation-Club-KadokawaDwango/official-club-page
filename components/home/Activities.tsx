import { Plane, Calendar, MapPin } from "lucide-react";

const activities = [
  {
    title: "Flight Training",
    description: "プロの指導のもと、実際の操縦桿を握る経験を。空こそが、私たちの教室です。",
    icon: Plane,
    date: "週末実施",
  },
  {
    title: "Ground School",
    description: "航空力学の理論を習得。航法、気象学、そして航空力学の基礎を学びます。",
    icon: Calendar,
    date: "毎週水曜",
  },
  {
    title: "Airfield Visit",
    description: "格納庫や管制塔への特別見学ツアー。航空業界の現場を間近で体感します。",
    icon: MapPin,
    date: "月次開催",
  },
];

export function Activities() {
  return (
    <div className="py-24 sm:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden">
        {/* Background Mesh (Subtle) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-600">Activities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            雲の上にある、日常。
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            座学から実地訓練まで。私たちは包括的な航空体験を提供しています。
            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {activities.map((activity) => (
            <div
                key={activity.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/70"
            >
                {/* Precision Line (Top Accent) */}
                <div className="absolute top-0 left-0 h-1 w-full bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="flex items-center gap-x-4 mb-4">
                     <div className="p-2 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <activity.icon className="w-6 h-6" />
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {activity.date}
                     </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {activity.title}
                </h3>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                    {activity.description}
                </p>

                 {/* Decorative background blur inside card */}
                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors"></div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}
