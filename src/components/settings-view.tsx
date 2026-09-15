"use client";

import React, { useState } from "react";
import { Settings, User, Key, Bell, Shield, Check } from "lucide-react";

export function SettingsView() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl">
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-white tracking-tight">Account Settings</h1>
        <p className="text-sm text-slate-400 mt-1">Configure profile, API keys, security 2FA, and notification preferences</p>
      </div>

      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
        {saved && (
          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="size-4 shrink-0" />
            <span>Settings saved successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-base font-bold text-white border-b border-white/10 pb-2">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  defaultValue="Abderrahim G."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1322] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  defaultValue="abderrahim@fintech.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1322] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h2 className="text-base font-bold text-white border-b border-white/10 pb-2">API Credentials</h2>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Institutional API Secret Key</label>
              <div className="flex gap-2">
                <input
                  type="password"
                  defaultValue="bhfx_live_9901847192847192841"
                  readOnly
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1322] border border-white/10 text-slate-400 font-mono text-xs"
                />
                <button 
                  type="button"
                  onClick={() => alert("API Secret Regenerated")}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white whitespace-nowrap"
                >
                  Regenerate
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
