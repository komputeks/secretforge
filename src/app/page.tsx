import Link from "next/link";
import { Lock, Github, Zap, Shield, Code, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black dark:bg-white rounded-md flex items-center justify-center">
              <Lock className="w-4 h-4 text-white dark:text-black" />
            </div>
            <span className="font-semibold">SecretForge</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm hover:underline">Sign in</Link>
            <Link href="/signup" className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium">
              Get started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open source • Self-hostable
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Secret management
              <br />
              <span className="text-zinc-500">for modern teams</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl">
              Store, sync, and manage environment variables across GitHub, Vercel, and your team. 
              End-to-end encrypted. Built for developers, AI agents, and indie hackers.
            </p>
            <div className="flex gap-3">
              <Link href="/signup" className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium text-sm">
                Start free
              </Link>
              <Link href="https://github.com/komputeks/secretforge" className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium text-sm flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "AES-256-GCM Encryption", desc: "Per-project keys derived via HKDF. Never store plaintext." },
                { icon: Zap, title: "Instant Sync", desc: "Push secrets to GitHub and Vercel in one click." },
                { icon: Code, title: "API First", desc: "REST API for CI/CD, AI agents, and automation." },
                { icon: Users, title: "Team Management", desc: "RBAC with owners, admins, and members." },
                { icon: Lock, title: "Version History", desc: "Every change tracked. Rollback anytime." },
                { icon: Github, title: "Open Source", desc: "Self-host on Vercel + Supabase free tier." },
              ].map((f) => (
                <div key={f.title} className="p-5 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <f.icon className="w-5 h-5 mb-3 text-zinc-600 dark:text-zinc-400" />
                  <h3 className="font-medium mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Built for the AI era</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              SecretForge provides secure API access for Claude Code, GitHub Copilot, OpenHands, and other AI coding agents. 
              Inject secrets into ephemeral environments without exposing them in prompts.
            </p>
            <div className="bg-zinc-950 text-zinc-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <div className="text-zinc-500"># Fetch secrets via API</div>
              <div>curl -H "Authorization: Bearer $SF_TOKEN" \</div>
              <div className="ml-4">https://secretforge.vercel.app/api/projects/abc/secrets</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs text-zinc-500">
          <span>© 2024 SecretForge</span>
          <div className="flex gap-4">
            <Link href="/docs">Docs</Link>
            <Link href="https://github.com/komputeks/secretforge">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
