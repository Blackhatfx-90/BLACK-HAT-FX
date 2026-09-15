"use client";

import React from "react";
import { HelpCircle, MessageSquare, Mail, PhoneCall, ShieldCheck } from "lucide-react";

export function SupportView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl">
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-white tracking-tight">Help & Support Desk</h1>
        <p className="text-sm text-slate-400 mt-1">24/7 dedicated institutional support and compliance advisory</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 size-10 flex items-center justify-center">
            <MessageSquare className="size-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Live Priority Chat</h3>
            <p className="text-xs text-slate-400 mt-1">Connect with your dedicated account manager in under 60 seconds.</p>
          </div>
          <button 
            onClick={() => alert("Connecting to priority agent...")}
            className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all"
          >
            Start Priority Chat
          </button>
        </div>

        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 size-10 flex items-center justify-center">
            <PhoneCall className="size-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Direct Trading Desk Line</h3>
            <p className="text-xs text-slate-400 mt-1">Emergency order routing & wire resolution phone desk.</p>
          </div>
          <p className="text-sm font-mono font-bold text-emerald-400">+1 (800) 555-BLACK-HAT</p>
        </div>
      </div>
    </div>
  );
}
