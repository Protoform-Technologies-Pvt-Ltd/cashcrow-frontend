"use client"
import { ChartLine, Settings, CircleGauge, Trash2, FileText, Crown } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { usePathname } from 'next/navigation'

const items = [
  { title: "Dashboard", url: "/", icon: CircleGauge, },
  { title: "Bins", url: "/bins", icon: Trash2, },
  { title: "ESG Dashboard", url: "/esgdashboard", icon: ChartLine, },
  { title: "Rewards", url: "/rewards", icon: Crown, },
  { title: "Reports", url: "/reports", icon: FileText, },
  { title: "Settings", url: "/settings", icon: Settings, },
]

export default function AppSidebar() {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="bg-transparent hover:bg-transparent active:bg-transparent">
              <Link href="/">
                <Image src="/assets/Logo.png" alt="Cashcrow" width={35} height={35} />
                <h1 className="text-xl">Cashcrow</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="m-0" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="collapsed:bg-green-300">
            {items.map(item => {
              const isActive = pathname === item.url
              return (
                <SidebarMenuItem key={item.title} className="list-none group">
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center justify-between py-6 ${isActive ? 'bg-cashcrow-bg text-green-600' : 'hover:bg-cashcrow-bg/50'}`}>
                      <div className="flex items-center gap-2">
                        <item.icon
                          className={`w-[1.2rem] h-[1.2rem] ${isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-950/80 dark:text-white'}`}
                        />
                        <span className={`${isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-950/80 dark:text-white'}`}>
                          {item.title}
                        </span>
                      </div>

                      {item.title === "Rewards" && (
                        <span
                          className={`bg-cashcrow-bg ${isActive ? 'text-green-700' : 'text-green-600 hover:text-green-700'} dark:text-green-400 text-[10px] px-2 py-1 tracking-[.1em] rounded-full`}>New</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}

          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
