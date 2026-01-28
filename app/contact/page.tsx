import { Mail, MapPin } from "lucide-react";
import { BackgroundDecoration } from "@/components/ui/background-decoration";
import { GlassCard } from "@/components/ui/glass-card";

export default function Contact() {
  return (
    <div className="relative isolate min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
      <BackgroundDecoration />

      <div className="mx-auto max-w-2xl px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-6">
            お問い合わせ
        </h2>
        <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-12">
            入会に関するご質問、取材のご依頼、その他お問い合わせは<br className="hidden sm:inline" />
            以下のメールアドレスまでご連絡ください。
        </p>

        <GlassCard className="p-10 flex flex-col items-center justify-center gap-6 max-w-lg mx-auto">
             <div className="p-4 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 ring-1 ring-blue-100 dark:ring-blue-900/50">
                 <Mail className="h-10 w-10" aria-hidden="true" />
             </div>

             <div className="text-center">
                 <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                     Official Email
                 </p>
                 <a href="mailto:contact@aviation-club.jp" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                     contact@aviation-club.jp
                 </a>
             </div>
        </GlassCard>

        <div className="mt-12 flex justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
             <div className="flex items-center gap-2">
                 <MapPin className="h-4 w-4" />
                 <span>〒100-0001 東京都千代田区...</span>
             </div>
        </div>
      </div>
    </div>
  );
}
