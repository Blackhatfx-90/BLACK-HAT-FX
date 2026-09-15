"use client";

import React from "react";
import { ChartArea, TrendingUp, DollarSign, Calendar, BarChart2 } from "lucide-react";

export function AnalyticsView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-white tracking-tight">Analytics & Intelligence</h1>
        <p className="text-sm text-slate-400 mt-1">Deep spending breakdowns, cashflow velocity, and yield projections</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-2">
          <span className="text-xs text-slate-400 font-medium">Average Monthly Run Rate</span>
          <p className="text-2xl font-bold text-white font-mono">$18,450.00</p>
          <span className="text-xs text-emerald-400 font-semibold block">+4.2% efficiency vs target</span>
        </div>
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-2">
          <span className="text-xs text-slate-400 font-medium">Annualized Revenue Potential</span>
          <p className="text-2xl font-bold text-blue-400 font-mono">$267,000.00</p>
          <span className="text-xs text-slate-400 block">Based on Q1 trailing numbers</span>
        </div>
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-2">
          <span className="text-xs text-slate-400 font-medium">Capital Efficiency Ratio</span>
          <p className="text-2xl font-bold text-purple-400 font-mono">92.4%</p>
          <span className="text-xs text-purple-400 font-semibold block">Top 5% peer benchmark</span>
        </div>
      </div>
    </div>
  );
}
