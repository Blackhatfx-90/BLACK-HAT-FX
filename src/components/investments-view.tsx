"use client";

import React from "react";
import { TrendingUp, ArrowUpRight, DollarSign, PieChart, BarChart3, Briefcase } from "lucide-react";

export function InvestmentsView() {
  const holdings = [
    { ticker: "AAPL", name: "Apple Inc.", shares: 140, avgCost: "$175.20", value: "$31,450.00", gain: "+18.4%", positive: true },
    { ticker: "NVDA", name: "NVIDIA Corp.", shares: 85, avgCost: "$420.00", value: "$76,200.00", gain: "+142.1%", positive: true },
    { ticker: "MSFT", name: "Microsoft Corp.", shares: 110, avgCost: "$330.10", value: "$46,200.00", gain: "+28.7%", positive: true },
    { ticker: "TSLA", name: "Tesla Inc.", shares: 90, avgCost: "$240.00", value: "$19,800.00", gain: "-8.3%", positive: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Investments & Portfolio</h1>
          <p className="text-sm text-slate-400 mt-1">Equity holdings, ETF allocations, and yield metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-slate-400">Total Portfolio Valuation</span>
            <p className="text-2xl font-bold text-emerald-400 font-mono">$173,650.00</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden">
        <h2 className="text-lg font-bold text-white mb-4">Core Equities & Treasury Holdings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Asset</th>
                <th className="py-3 px-4">Shares / Units</th>
                <th className="py-3 px-4">Avg Purchase Price</th>
                <th className="py-3 px-4">Market Value</th>
                <th className="py-3 px-4 text-right">Unrealized PnL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              {holdings.map((h, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-white block">{h.ticker}</span>
                    <span className="text-[11px] text-slate-400">{h.name}</span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-300">{h.shares}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{h.avgCost}</td>
                  <td className="py-3.5 px-4 font-mono text-white font-semibold">{h.value}</td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold ${h.positive ? "text-emerald-400" : "text-red-400"}`}>
                    {h.gain}
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
