import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";
import VoiceSearch from "@/components/voice-search";
import InlineVoiceAssistant from "@/components/inline-voice-assistant";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900 dark:from-black dark:via-zinc-950 dark:to-black dark:text-zinc-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-600"></div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 text-sm shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-zinc-700 dark:text-zinc-300">AI-Powered Legal Assistance</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Your Legal Assistant
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400"> for India</span>
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                Get instant legal guidance, generate ready-to-print documents, and connect with verified lawyers. All in your language.
              </p>
              <div className="space-y-4">
                <form action="/search" method="GET" className="group relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur transition duration-500 group-hover:opacity-30"></div>
                  <div className="relative flex flex-col gap-2 rounded-2xl border bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 md:flex-row md:items-center">
                    <input
                      type="text"
                      name="q"
                      placeholder="Search legal topics, e.g., rental agreement, affidavit..."
                      className="flex-1 bg-transparent px-4 py-3 text-base outline-none placeholder:text-zinc-500 dark:text-white"
                    />
                    <button
                      type="submit"
                      className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Search
                        <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                    <div className="md:ml-2">
                      <VoiceSearch />
                    </div>
                  </div>
                </form>
                <div className="flex flex-wrap gap-3">
                  <Link href="/documents/new" className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Start a document
                  </Link>
                  <Link href="/categories" className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Browse categories
                  </Link>
                  <a href="#voice" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Speak with AI
                  </a>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?q=80&w=1200&auto=format&fit=crop"
                    alt="Professional legal assistance"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Assistant */}
      <section id="voice" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-3xl dark:bg-blue-600"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl dark:bg-cyan-600"></div>
            <div className="relative flex flex-col items-center justify-center gap-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Voice Enabled
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">Prefer speaking?</h2>
              <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                Use voice commands in any Indian language to get instant legal guidance
              </p>
              <InlineVoiceAssistant />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lawyers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Featured Lawyers</h2>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">Verified legal professionals ready to help</p>
            </div>
            <Link href="/consultation" className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
              See all lawyers
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Adv. R. Sharma",
                city: "Hyderabad",
                practices: "Property, Civil",
                fee: "₹1200",
                img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Adv. S. Iyer",
                city: "Bengaluru",
                practices: "Contracts, Corporate",
                fee: "₹1500",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Adv. P. Singh",
                city: "Mumbai",
                practices: "Criminal, Family",
                fee: "₹1000",
                img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Adv. N. Gupta",
                city: "Delhi",
                practices: "IPR, Startup",
                fee: "₹1800",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
              },
            ].map((l) => (
              <div key={l.name} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={l.img} alt={l.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur-sm">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </div>
                  </div>
                </div>
                <div className="relative p-5">
                  <div className="mb-3">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{l.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{l.city}</p>
                    <p className="mt-1 text-xs text-zinc-500">{l.practices}</p>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-white">
                      {l.fee}
                      <span className="text-xs font-normal text-zinc-500">/session</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href="/consultation" className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:shadow-blue-500/30 active:scale-95">
                      Consult
                    </Link>
                    <Link href="/lawyers" className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                      Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Popular Categories</h2>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">Legal documents and guidance for every need</p>
            </div>
            <Link href="/categories" className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
              View all categories
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CATEGORIES.slice(0, 8).map((c) => (
              <Link
                key={c.slug}
                href={`/categories#${c.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                {c.image && (
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                )}
                <div className="relative p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{c.name}</h3>
                    <svg className="h-5 w-5 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Guidance, templates, and submission steps</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-600 to-cyan-600 p-8 shadow-2xl dark:border-zinc-800 sm:p-12">
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-white sm:text-4xl">Need help right now?</h3>
                <p className="mt-3 text-lg text-blue-100">Our support team can guide you to the right document and process. Get personalized assistance today.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/support" className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact support
                </Link>
                <Link href="/consultation" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-xl transition-all hover:shadow-2xl active:scale-95">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
