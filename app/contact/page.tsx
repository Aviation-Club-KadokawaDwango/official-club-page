import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative isolate min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
      {/* Background decoration */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-6">
            お問い合わせ
        </h2>
        <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-12">
            入会に関するご質問、取材のご依頼、その他お問い合わせは<br className="hidden sm:inline" />
            以下のメールアドレスまでご連絡ください。
        </p>

        <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-10 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 hover:shadow-2xl transition-all duration-300">
             {/* Precision Top Line */}
             <div className="absolute top-0 left-0 h-1 w-full bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

             <div className="flex flex-col items-center justify-center gap-6">
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
             </div>
        </div>

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
