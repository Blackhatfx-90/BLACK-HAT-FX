"use client";

import React, { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Particles } from "@/components/magicui/particles";
import { 
  Zap, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Terminal, 
  Play, 
  Sun, 
  Moon, 
  ExternalLink,
  BarChart3,
  Globe,
  Award
} from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeTab, setActiveTab] = useState("overview");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0B0E14] text-slate-100" : "bg-[#F3F5F9] text-slate-900"} transition-colors duration-300 relative overflow-hidden font-sans`}>
      {/* Magic UI Particles Layer */}
      <Particles className="z-0" quantity={40} color={theme === "dark" ? "#EAB308" : "#CA8A04"} />

      {/* Top Navbar */}
      <header className={`sticky top-0 z-50 flex h-16 items-center justify-between border-b px-6 backdrop-blur-md ${theme === "dark" ? "bg-[#0E121B]/80 border-white/10" : "bg-white/80 border-slate-200"}`}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg shadow-amber-500/20">
            <Zap className="h-5 w-5" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight">
            NEXUS<span className="text-amber-500">TRADEX</span>
          </span>
          <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-400">
            MAGIC UI v2.0
          </span>
        </div>

        {/* Live Ticker */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">XAU/USD</span>
            <span className="text-emerald-500 font-bold">2,742.65 (+0.68%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">NVDA</span>
            <span className="text-emerald-500 font-bold">$138.25 (+2.4%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">AAPL</span>
            <span className="text-rose-500 font-bold">$224.10 (-0.4%)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
              theme === "dark"
                ? "border-white/10 bg-slate-900 text-slate-200 hover:border-amber-500/40"
                : "border-slate-300 bg-slate-100 text-slate-800 hover:border-amber-600"
            }`}
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-amber-600" />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <a
            href="/legacy_static/index.html"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-white/20"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Landing Page</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8">
        
        {/* Magic UI Hero Showcase Banner */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl backdrop-blur-xl">
          {/* Border Beam Animation */}
          <BorderBeam size={250} duration={12} colorFrom="#EAB308" colorTo="#06B6D4" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400">
                <Cpu className="h-3.5 w-3.5" />
                <span>MAGIC UI COMPONENT INTEGRATION</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">
                Quantum Stock & Forex Trading Platform
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Powered by Magic UI animated components, Framer Motion transitions, real-time candlestick charts, and dual Light/Dark theme engine.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <ShimmerButton onClick={() => window.open("/legacy_static/dashboard.html", "_self")}>
                <span className="flex items-center gap-2 font-semibold">
                  <Play className="h-4 w-4 fill-current" /> Launch Dashboard
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Magic UI Bento Grid Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold">Magic UI Bento Features</h2>
              <p className="text-xs text-slate-400 font-mono">HIGH-PERFORMANCE ALGORITHMIC MODULES</p>
            </div>
          </div>

          <BentoGrid>
            <BentoCard
              name="Real-Time XAU/USD Telemetry"
              className="col-span-3 lg:col-span-2"
              Icon={BarChart3}
              description="Tick-by-tick orderflow analytics and high-frequency volatility indicators optimized for Gold and Forex."
              cta="Explore Market Telemetry"
              background={
                <div className="absolute right-4 top-4 h-48 w-80 rounded-lg border border-white/10 bg-slate-900/60 p-4 font-mono text-xs text-slate-300">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-amber-400 font-bold">XAU/USD 1M Stream</span>
                    <span className="text-emerald-400">+18.40 (+0.68%)</span>
                  </div>
                  <div className="mt-3 space-y-1 text-[11px] text-slate-400">
                    <div>[11:42:01] BUY 1.00 Lot @ 2742.60 <span className="text-emerald-400">(+$445.00)</span></div>
                    <div>[11:42:05] BUY 0.50 Lot @ 2742.65 <span className="text-emerald-400">(+$210.00)</span></div>
                    <div>[11:42:10] QUANTUM_GRID order filled</div>
                  </div>
                </div>
              }
            />

            <BentoCard
              name="Automated EA Bot Vault"
              className="col-span-3 lg:col-span-1"
              Icon={Cpu}
              description="Deploy and backtest custom MQL5, Python, and C# trading scripts with 1.2ms FIX API execution."
              cta="Open Bot Repository"
            />

            <BentoCard
              name="Capital Allocation"
              className="col-span-3 lg:col-span-1"
              Icon={TrendingUp}
              description="Scale your verified track record up to $2,500,000 with 85% trader profit splits."
              cta="Apply for Funding"
            />

            <BentoCard
              name="Direct Broker Bridge"
              className="col-span-3 lg:col-span-2"
              Icon={Globe}
              description="Native integration with MetaTrader 5, MetaTrader 4, cTrader FIX, and TradingView webhooks."
              cta="View Integrations"
            />
          </BentoGrid>
        </section>

      </main>
    </div>
  );
}
