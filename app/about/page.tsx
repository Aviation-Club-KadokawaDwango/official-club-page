import { Plane, Users, Award } from "lucide-react";
import { BackgroundDecoration } from "@/components/ui/background-decoration";
import { GlassCard } from "@/components/ui/glass-card";

export default function About() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <BackgroundDecoration />

        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              空を愛する学生が集う場所。<br/>
              私たちの使命は、未来のパイロットと航空愛好家のための、安全で知識豊かなコミュニティを育むことです。
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            私たちの使命
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            1995年の創設以来、航空操縦学同好会は学生航空活動の最前線を走ってきました。
            私たちは、飛行に必要な規律が人生のあらゆる局面での卓越性につながると信じています。
            厳しい訓練、学術的な研究、そして実践的な経験を通じて、単なるパイロットではなく「リーダー」を育成することを目指しています。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {[
                {
                    title: "安全第一 (Safety First)",
                    description: "安全は最優先事項です。厳格な整備スケジュールと運航手順を遵守し、リスク管理を徹底します。",
                    icon: Award,
                },
                {
                    title: "プロ意識 (Professionalism)",
                    description: "初日からプロのパイロットとしての振る舞いを求め、高い倫理観と責任感を養います。",
                    icon: Plane,
                },
                {
                    title: "コミュニティ (Community)",
                    description: "空への情熱を共有する仲間として、生涯続く友情と信頼関係を築きます。",
                    icon: Users,
                },
            ].map((item) => (
                <GlassCard key={item.title}>
                     <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                     </div>
                    <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                    <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </GlassCard>
            ))}
        </div>
      </div>

       {/* Stats Section */}
       <div className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32">
        {/* Background Image Placeholder */}
         <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">信頼と実績</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-300">
                私たちの活動実績が、その証です。多くの卒業生が航空業界で活躍しています。
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { id: 1, name: '現役部員数', value: '120+' },
                { id: 2, name: '総飛行時間', value: '5000+' },
                { id: 3, name: '保有・提携機体', value: '8' },
                { id: 4, name: '活動年数', value: '25+' },
              ].map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                  <dt className="text-sm font-semibold leading-6 text-zinc-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
