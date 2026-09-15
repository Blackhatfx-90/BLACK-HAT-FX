"use client";

import React, { useState } from "react";
import {
  Wallet,
  TrendingUp,
  ArrowDownRight,
  ArrowUpRight,
  Send,
  CreditCard,
  Building2,
  DollarSign,
  Bitcoin,
  CheckCircle2,
  Search,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight
} from "lucide-react";

export function OverviewView() {
  const [transferContact, setTransferContact] = useState("Sarah Chen");
  const [transferAmount, setTransferAmount] = useState("3000");
  const [transferStatus, setTransferStatus] = useState<string | null>(null);
  const [chartTimeframe, setChartTimeframe] = useState("1Y");

  const handleSendTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setTransferStatus(`Successfully transferred $${transferAmount} USD to ${transferContact}!`);
    setTimeout(() => setTransferStatus(null), 4000);
  };

  const contacts = [
    { name: "Sarah Chen", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { name: "Alex Rivers", avatar: "AR", color: "from-blue-500 to-cyan-500" },
    { name: "Elena Rostova", avatar: "ER", color: "from-emerald-500 to-teal-500" },
    { name: "Marcus Thorne", avatar: "MT", color: "from-amber-500 to-orange-500" },
  ];

  const transactions = [
    { name: "Spotify Subscription", category: "Entertainment", amount: "-$14.99", date: "Today, 2:45 PM", status: "Completed", icon: "🎵", isIncome: false },
    { name: "AWS Cloud Infrastructure", category: "Software & Hosting", amount: "-$420.50", date: "Yesterday", status: "Completed", icon: "☁️", isIncome: false },
    { name: "Stripe Merchant Payout", category: "Revenue", amount: "+$12,450.00", date: "Apr 14, 2026", status: "Completed", icon: "💳", isIncome: true },
    { name: "Figma Pro Enterprise", category: "Design Tools", amount: "-$15.00", date: "Apr 12, 2026", status: "Completed", icon: "🎨", isIncome: false },
    { name: "ChatGPT Plus & API Usage", category: "AI Services", amount: "-$128.40", date: "Apr 10, 2026", status: "Completed", icon: "🤖", isIncome: false },
    { name: "Google Workspace", category: "Productivity", amount: "-$18.00", date: "Apr 08, 2026", status: "Completed", icon: "💼", isIncome: false },
    { name: "Institutional FX Client Payment", category: "Trading Income", amount: "+$4,500.00", date: "Apr 05, 2026", status: "Completed", icon: "⚡", isIncome: true },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wallet Balance */}
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Wallet Balance</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Wallet className="size-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-3">
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">$84,765.00</h2>
              <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <ArrowUpRight className="size-3.5 mr-0.5" /> +12.4%
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Combined balance across 3 multi-currency accounts</p>
          </div>
        </div>

        {/* Money In */}
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Money In (Monthly)</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ArrowDownRight className="size-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-3">
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">$22,250.00</h2>
              <span className="text-xs text-slate-400">Apr 01 - Apr 30</span>
            </div>
            <p className="text-xs text-emerald-400 mt-1 font-medium">+$4,120 vs previous 30 days</p>
          </div>
        </div>

        {/* Money Out */}
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Money Out (Monthly)</span>
            <div className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-3">
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">$15,340.00</h2>
              <span className="text-xs text-slate-400">Net Flow: <strong className="text-emerald-400 font-mono">+$6,910</strong></span>
            </div>
            <p className="text-xs text-slate-400 mt-1">7 categories monitored under active budget</p>
          </div>
        </div>
      </div>

      {/* FINANCIAL OVERVIEW CHART & ACCOUNT CARDS STACK */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Growth Chart (2 columns) */}
        <div className="lg:col-span-2 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Financial Overview</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  +$321,873 Net Growth
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Asset trajectory and revenue performance curve</p>
            </div>

            <div className="flex items-center gap-1 bg-[#0d1322] p-1 rounded-xl border border-white/5 text-xs font-mono">
              {["1M", "6M", "1Y", "ALL"].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setChartTimeframe(tf)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    chartTimeframe === tf
                      ? "bg-blue-600 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Area Chart Graphic */}
          <div className="py-6 relative">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-xs text-slate-400">Current Year Total</span>
                <p className="text-2xl font-bold font-mono text-white">$1,170,273.00</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Previous Year</span>
                <p className="text-sm font-semibold font-mono text-slate-400">$848,400.00</p>
              </div>
            </div>

            {/* Custom SVG Line & Gradient */}
            <div className="h-56 w-full relative">
              <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1="110" x2="500" y2="110" stroke="#1e293b" strokeDasharray="4 4" />

                {/* Filled Area */}
                <path
                  d="M 0,130 Q 80,110 150,80 T 300,50 T 450,20 L 500,10 L 500,150 L 0,150 Z"
                  fill="url(#chartGradient)"
                />

                {/* Smooth Curve Line */}
                <path
                  d="M 0,130 Q 80,110 150,80 T 300,50 T 450,20 L 500,10"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Benchmark Previous Year Line */}
                <path
                  d="M 0,140 Q 100,135 200,110 T 350,90 T 500,60"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Active Data Node */}
                <circle cx="450" cy="20" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* ACCOUNTS CAROUSEL STACK (1 column) */}
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Linked Accounts</h3>
              <span className="text-xs text-blue-400 font-semibold cursor-pointer hover:underline">Manage All</span>
            </div>

            <div className="space-y-3">
              {/* Account 1: EUR */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-slate-900/60 border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      €
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Euro Prime Treasury</p>
                      <p className="text-[10px] text-slate-400 font-mono">DE89 •••• •••• 4892</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold font-mono text-white">€42,500.00</span>
                </div>
              </div>

              {/* Account 2: Bitcoin */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-900/30 to-slate-900/60 border border-amber-500/20 relative overflow-hidden group hover:border-amber-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                      <Bitcoin className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Institutional Cold Vault</p>
                      <p className="text-[10px] text-slate-400 font-mono">bc1q •••• 92fa</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-mono text-amber-400">1.24 BTC</p>
                    <p className="text-[10px] text-slate-400 font-mono">~$84,320 USD</p>
                  </div>
                </div>
              </div>

              {/* Account 3: Investment portfolio */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-900/30 to-slate-900/60 border border-emerald-500/20 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      <TrendingUp className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Quant Alpha Fund</p>
                      <p className="text-[10px] text-slate-400 font-mono">US-QUANT-992</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold font-mono text-emerald-400">$28,300.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>Primary Settlement: <strong className="text-white">USD / EUR / BTC</strong></span>
            <ShieldCheck className="size-4 text-blue-400" />
          </div>
        </div>
      </div>

      {/* QUICK TRANSFER & FINANCIAL HEALTH GAUGE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Transfer Widget */}
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">Instant Transfer</h3>
              <p className="text-xs text-slate-400">Send zero-fee payments to saved desk contacts</p>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
              0% Fee Instant
            </span>
          </div>

          {transferStatus && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>{transferStatus}</span>
            </div>
          )}

          <form onSubmit={handleSendTransfer} className="space-y-4">
            {/* Contact Avatar Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Select Recipient</label>
              <div className="grid grid-cols-4 gap-3">
                {contacts.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setTransferContact(c.name)}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                      transferContact === c.name
                        ? "bg-blue-600/20 border-blue-500 text-white"
                        : "bg-[#0d1322] border-white/5 text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className={`size-8 rounded-full bg-gradient-to-tr ${c.color} text-white font-bold text-xs flex items-center justify-center shadow`}>
                      {c.avatar}
                    </div>
                    <span className="text-[11px] font-medium truncate w-full text-center">{c.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input & Budget Status */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Transfer Amount ($ USD)</label>
              <div className="relative">
                <input
                  type="number"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1322] border border-white/10 text-white font-mono text-lg focus:outline-none focus:border-blue-500 pr-16"
                />
                <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400 font-mono">USD</span>
              </div>
            </div>

            {/* Budget status box */}
            <div className="p-3 rounded-xl bg-[#0d1322] border border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Category Budget Remaining</span>
              <span className="font-mono text-emerald-400 font-bold">$920.00 / $3,000.00</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Send className="size-4" />
              <span>Execute Transfer Now</span>
            </button>
          </form>
        </div>

        {/* Financial Health Semi-Circle Score Meter */}
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Financial Health Gauge</h3>
              <span className="text-xs text-emerald-400 font-mono font-bold">+3 pts this quarter</span>
            </div>

            {/* Gauge Display */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative size-40">
                <svg viewBox="0 0 100 50" className="size-full">
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="125.6"
                    strokeDashoffset="27.6"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                  <span className="text-3xl font-extrabold text-white font-mono">78</span>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Good Standing</span>
                </div>
              </div>
            </div>

            {/* Component Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-2.5 rounded-lg bg-[#0d1322] border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Savings Rate</span>
                <span className="font-mono text-emerald-400 font-bold">82%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0d1322] border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Debt Ratio</span>
                <span className="font-mono text-blue-400 font-bold">15%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0d1322] border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Budget Adherence</span>
                <span className="font-mono text-amber-400 font-bold">74%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0d1322] border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Liquidity Index</span>
                <span className="font-mono text-purple-400 font-bold">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS TABLE */}
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
            <p className="text-xs text-slate-400">Live ledger activity across connected gateways</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="size-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Filter transactions..."
                className="pl-9 pr-3 py-1.5 rounded-xl bg-[#0d1322] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5">
              <span>View All</span>
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Merchant / Description</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              {transactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors group">
                  <td className="py-3.5 px-4 flex items-center gap-3 text-white">
                    <span className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm">
                      {tx.icon}
                    </span>
                    <span className="font-semibold group-hover:text-blue-400 transition-colors">{tx.name}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono">
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 font-mono">{tx.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {tx.status}
                    </span>
                  </td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold text-sm ${tx.isIncome ? "text-emerald-400" : "text-slate-200"}`}>
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
