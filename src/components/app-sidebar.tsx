"use client"

import * as React from "react"
import Link from "next/link"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  ShieldCheckIcon,
  TargetIcon,
  BrainCircuitIcon,
  BotIcon,
  UsersIcon,
  TrendingUpIcon,
  SettingsIcon,
  LifeBuoyIcon,
  LandmarkIcon,
  BellIcon,
  SparklesIcon,
  LogInIcon,
  UserPlusIcon,
} from "lucide-react"

const data = {
  user: {
    name: "Alex Trader",
    email: "alex@propguard.ai",
    avatar: "/avatars/user.jpg",
  },
  navPropGuard: [
    { title: "Dashboard", url: "/dashboard", icon: <LayoutDashboardIcon /> },
    { title: "Funded Accounts", url: "/accounts", icon: <ShieldCheckIcon /> },
    { title: "Rule Compliance", url: "/budgets", icon: <TargetIcon /> },
  ],
  navAI: [
    { title: "AI Trade Analyser", url: "/analytics", icon: <BrainCircuitIcon /> },
    { title: "AI Profile Coach", url: "/crypto", icon: <SparklesIcon /> },
  ],
  navMarketplace: [
    { title: "EA & Bot Marketplace", url: "/cards", icon: <BotIcon /> },
    { title: "Copy Trading", url: "/investments", icon: <UsersIcon /> },
    { title: "Capital Scaling", url: "/transfers", icon: <TrendingUpIcon /> },
  ],
  navAuth: [
    { title: "Sign In", url: "/sign-in", icon: <LogInIcon /> },
    { title: "Sign Up", url: "/sign-up", icon: <UserPlusIcon /> },
  ],
  navSecondary: [
    { title: "Notifications", url: "/notifications", icon: <BellIcon /> },
    { title: "Settings", url: "/settings", icon: <SettingsIcon /> },
    { title: "Help & Support", url: "/support", icon: <LifeBuoyIcon /> },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LandmarkIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold tracking-tight">BLACK-HAT.FX</span>
                <span className="truncate text-xs text-muted-foreground">
                  PropGuard AI • Rules Shield
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navPropGuard} label="Prop Firm Guard" />
        <NavMain items={data.navAI} label="AI Intelligence" />
        <NavMain items={data.navMarketplace} label="Marketplace & Copy" />
        <NavMain items={data.navAuth} label="Auth" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

