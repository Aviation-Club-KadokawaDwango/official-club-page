import Link from "next/link";
import { Plane, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-600">
              <Plane className="h-8 w-8" />
              <span>航空操縦学同好会</span>
            </Link>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Horizon & Intelligence.<br />
              情熱と精密さで、空の彼方へ。
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-zinc-400 hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="/contact" className="text-zinc-400 hover:text-blue-500">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Club</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities" className="text-sm leading-6 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                      Activities
                    </Link>
                  </li>
                  <li>
                    <Link href="/join" className="text-sm leading-6 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                      Join Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                      Safety Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                      Flight Manuals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                      Member Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Aviation University Campus<br />
                    Hangar 3, Room 101
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-blue-600 hover:text-blue-500 font-semibold">
                      Contact Form &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; 2024 Aviation Club. All rights reserved. Designed with Horizon & Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
