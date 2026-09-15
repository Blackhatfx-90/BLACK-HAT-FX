"use client";

import React, { useState } from "react";
import { CreditCard, Plus, Shield, Eye, EyeOff, Lock, Unlock, Sparkles, Copy, Check } from "lucide-react";

export function CardsView() {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [frozen, setFrozen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Corporate & Virtual Cards</h1>
          <p className="text-sm text-slate-400 mt-1">Issue, manage limits, and control instant spending cards</p>
        </div>
        <button 
          onClick={() => alert("Issue virtual card modal")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all"
        >
          <Plus className="size-4" />
          <span>Issue New Card</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CARD DISPLAY PREVIEW */}
        <div className="lg:col-span-1 space-y-4">
          <div className="w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 p-6 shadow-2xl border border-white/20 relative overflow-hidden flex flex-col justify-between text-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-bold text-base tracking-wider uppercase">BLACK-HAT.FX</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/20 backdrop-blur">PLATINUM</span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-6 rounded bg-gradient-to-r from-amber-300 to-yellow-500 opacity-90 shadow-inner" />
                <Sparkles className="size-4 text-blue-300" />
              </div>
              <p className="font-mono text-lg tracking-widest font-semibold">
                {showCardDetails ? "4532 8910 2341 8812" : "•••• •••• •••• 8812"}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-300 block">Card Holder</span>
                <span className="font-semibold uppercase tracking-wider">ABDERRAHIM G.</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-300 block">Expires</span>
                <span className="font-mono font-semibold">09/29</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-300 block">CVV</span>
                <span className="font-mono font-semibold">{showCardDetails ? "892" : "•••"}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCardDetails(!showCardDetails)}
              className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
            >
              {showCardDetails ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              <span>{showCardDetails ? "Hide Details" : "Show Details"}</span>
            </button>
            <button
              onClick={() => setFrozen(!frozen)}
              className={`flex-1 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                frozen
                  ? "bg-red-500/20 border-red-500/30 text-red-400"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              {frozen ? <Unlock className="size-4" /> : <Lock className="size-4" />}
              <span>{frozen ? "Unfreeze Card" : "Freeze Card"}</span>
            </button>
          </div>
        </div>

        {/* CARD LIMITS & CONTROLS */}
        <div className="lg:col-span-2 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-lg font-bold text-white">Card Controls & Spending Limits</h2>
            <p className="text-xs text-slate-400 mt-0.5">Manage daily transaction allowances and security toggles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 space-y-2">
              <span className="text-xs text-slate-400">Monthly Spending Limit</span>
              <p className="text-xl font-bold font-mono text-white">$10,000.00 USD</p>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mt-2">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "34%" }} />
              </div>
              <span className="text-[11px] text-slate-400 font-mono block pt-1">$3,420 spent of $10,000 limit</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 space-y-2">
              <span className="text-xs text-slate-400">Single Transaction Cap</span>
              <p className="text-xl font-bold font-mono text-white">$2,500.00 USD</p>
              <span className="text-[11px] text-emerald-400 font-mono block pt-1">Contact admin to adjust cap</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { label: "Online E-Commerce Payments", desc: "Enable card use for web transactions", active: true },
              { label: "ATM Cash Withdrawals", desc: "Allow physical ATM cash access worldwide", active: false },
              { label: "International Currency Exchange", desc: "Auto convert foreign currency at interbank spot rates", active: true },
            ].map((toggle, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#0d1322] border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">{toggle.label}</p>
                  <p className="text-[11px] text-slate-400">{toggle.desc}</p>
                </div>
                <input type="checkbox" defaultChecked={toggle.active} className="toggle toggle-primary size-5 accent-blue-600 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
