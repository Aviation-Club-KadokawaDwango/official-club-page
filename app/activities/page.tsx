import { Plane, Calendar, MapPin, Trophy, BookOpen, Users } from "lucide-react";
import { BackgroundDecoration } from "@/components/ui/background-decoration";
import { GlassCard } from "@/components/ui/glass-card";

export default function Activities() {
  return (
    <div className="bg-white dark:bg-zinc-950 isolate">
      {/* Header Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BackgroundDecoration />

        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-48 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                活動紹介
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                週次の座学から合宿でのフライト訓練まで。<br/>
                情熱を確かな技術に変えるための、充実したプログラムを提供しています。
            </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             {/* Weekly Ground School */}
            <GlassCard className="col-span-1 md:col-span-2 lg:col-span-2">
                 <div className="flex items-start justify-between">
                     <div>
                        <div className="flex items-center gap-3 mb-4">
                             <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                <BookOpen className="w-6 h-6" />
                             </div>
                             <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">定期座学講習 (Ground School)</h3>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
                            毎週水曜日、航空力学の基礎を学びます。
                            気象学、航法、航空法、航空機概論など、パイロットに必要な知識を体系的に習得。
                            上級生やゲスト講師による双方向の講義形式で行われます。
                        </p>
                        <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-500 font-mono">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 毎週水曜 18:00</span>
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 3号館 204教室</span>
                        </div>
                     </div>
                 </div>
            </GlassCard>

            {/* Flight Simulator Training */}
            <GlassCard accentColor="bg-amber-400">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors"></div>
                 <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-500">
                        <Plane className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">シミュレーター実習</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    認定フライトシミュレーターを使用し、計器飛行や非常時の手順を繰り返し練習します。
                </p>
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-900/10 dark:text-amber-400">
                    予約制
                </span>
            </GlassCard>

             {/* Summer Camp - Custom Dark Card */}
             <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-2 group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 p-8 shadow-xl dark:border-zinc-700 dark:bg-black">
                {/* Image Background Effect used for 'Special' cards */}
                <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>

                <div className="relative z-20 flex flex-col items-start justify-center h-full">
                    <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-md">
                            <Trophy className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">夏季フライト合宿</h3>
                    </div>
                    <p className="text-zinc-300 mb-6 max-w-lg">
                        1年間の集大成です。アメリカまたはオーストラリアの提携飛行場にて、2週間の集中トレーニングを行います。
                        多くの部員がここでファースト・ソロ（単独飛行）を達成します。
                    </p>
                    <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-200 transition-colors">
                        2023年度ギャラリーを見る
                    </button>
                </div>
            </div>

            {/* Social Events */}
             <GlassCard className="lg:col-start-1 lg:row-start-2">
                  <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">交流会・見学会</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                    BBQや空港見学ツアー、OBパイロットとの交流会など。
                    強固なコミュニティ作りは、安全文化の醸成にも不可欠です。
                </p>
            </GlassCard>
        </div>
      </div>
    </div>
  );
}
