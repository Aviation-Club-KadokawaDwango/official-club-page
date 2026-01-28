import { CheckCircle2, ArrowRight, AlertCircle, FileText, Send, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Join() {
  return (
    <div className="bg-white dark:bg-zinc-950 isolate min-h-screen">
       <div
        className="absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Recruitment 2024</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Join the Crew
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            私たちは、空への情熱を持ち、共に成長できる仲間を求めています。<br />
            経験は不問。必要なのは「飛びたい」という意志だけです。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="https://forms.google.com/your-form-url" target="_blank">
                <Button className="rounded-full bg-blue-600 px-8 py-6 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-all hover:scale-105">
                入会申し込み (Google Form)
                </Button>
            </Link>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                 <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                        応募資格
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "本学に在籍する学生（1〜3年生推奨）",
                            "毎週水曜日の座学講習に参加できること",
                            "少なくとも2年間の活動を継続できること",
                            "基礎的な英語力（航空英語は入会後に学びます）",
                            "チームワークと安全意識を持っていること"
                        ].map((req, idx) => (
                             <li key={idx} className="flex gap-x-3 text-zinc-600 dark:text-zinc-400">
                                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                <span>{req}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 {/* Deadline Warning */}
                 <div className="relative overflow-hidden rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-500/20">
                     <div className="flex items-center gap-4 mb-4">
                         <AlertCircle className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                         <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500">重要な日程</h3>
                     </div>
                     <dl className="space-y-4">
                         <div className="flex justify-between border-b border-amber-200/50 pb-2 dark:border-amber-500/20">
                             <dt className="font-medium text-amber-900 dark:text-amber-400">募集開始</dt>
                             <dd className="text-amber-700 dark:text-amber-300">2026年4月1日</dd>
                         </div>
                          <div className="flex justify-between border-b border-amber-200/50 pb-2 dark:border-amber-500/20">
                             <dt className="font-medium text-amber-900 dark:text-amber-400">新歓説明会</dt>
                             <dd className="text-amber-700 dark:text-amber-300">2026年4月10日</dd>
                         </div>
                          <div className="flex justify-between font-bold">
                             <dt className="text-amber-900 dark:text-amber-400">応募締切</dt>
                             <dd className="text-amber-700 dark:text-amber-300">2026年4月30日</dd>
                         </div>
                     </dl>
                 </div>
            </div>
        </div>

        {/* Steps Process */}
        <div className="mx-auto mt-24 max-w-7xl">
             <h3 className="text-2xl font-bold tracking-tight text-center text-zinc-900 dark:text-zinc-50 mb-12">
                入会までの流れ
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                    { title: "1. フォーム提出", desc: "オンラインフォームから基本情報と志望動機を提出してください。", icon: FileText },
                    { title: "2. 面接", desc: "書類選考通過者は、先輩部員とのグループ面接に進みます。", icon: Users },
                    { title: "3. オリエンテーション", desc: "合格後は必修の安全講習とオリエンテーションに参加します。", icon: Send }
                ].map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center p-8 text-center rounded-3xl border border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                         <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                             <step.icon className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                         </div>
                         <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">{step.title}</h4>
                         <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.desc}</p>

                         {idx !== 2 && (
                             <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-zinc-300 dark:text-zinc-700">
                                 <ArrowRight className="w-8 h-8" />
                             </div>
                         )}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
