"use client";

import React from "react";
import { Bitcoin, ArrowUpRight, ArrowDownRight, RefreshCw, Zap } from "lucide-react";

export function CryptoView() {
  const pairs = [
    { pair: "BTC / USD", price: "$68,420.00", change: "+3.4%", high: "$69,100", low: "$66,200", volume: "$28.4B", positive: true },
    { pair: "ETH / USD", price: "$3,850.50", change: "+5.1%", high: "$3,920", low: "$3,640", volume: "$14.2B", positive: true },
    { pair: "SOL / USD", price: "$184.20", change: "-1.2%", high: "$192.00", low: "$180.10", volume: "$4.1B", positive: false },
    { pair: "EUR / USD", price: "1.0892", change: "+0.15%", high: "1.0910", low: "1.0870", volume: "$140B", positive: true },
    { pair: "GBP / USD", price: "1.2740", change: "-0.22%", high: "1.2780", low: "1.2710", volume: "$95B", positive: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Crypto Assets & FX Spreads</h1>
          <p className="text-sm text-slate-400 mt-1">Real-time institutional liquidity orderbook and spread pricing</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE FEED CONNECTED
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pairs.map((p, i) => (
          <div key={i} className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base font-mono">{p.pair}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${p.positive ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                {p.change}
              </span>
            </div>

            <p className="text-2xl font-extrabold text-white font-mono">{p.price}</p>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
              <div>
                <span>High</span>
                <span className="block text-slate-200">{p.high}</span>
              </div>
              <div>
                <span>Low</span>
                <span className="block text-slate-200">{p.low}</span>
              </div>
              <div className="text-right">
                <span>Vol 24h</span>
                <span className="block text-slate-200">{p.volume}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
