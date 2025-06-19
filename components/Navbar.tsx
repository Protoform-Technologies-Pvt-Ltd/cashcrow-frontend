"use client"

import { Moon, User, Settings, LogOut, Sun, PanelLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { useSidebar } from "./ui/sidebar"

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const { toggleSidebar } = useSidebar();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-white dark:bg-card">
            {/* LEFT */}
            <div className="flex gap-4">
                <PanelLeft onClick={toggleSidebar} className="hover:bg-accent cursor-pointer" />
                <h1 className="font-bold text-sm md:text-lg">Dashboard Overview</h1>
            </div>
            {/* RIGHT */}
            <div className="flex items-center gap-4">

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-400/50 shadow-sm"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>

                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="/assets/avatar.jpeg" alt="User Avatar" className="cursor-pointer" />
                            <AvatarFallback>User Icon</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10} className="mr-8">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User className="w-[1.2rem] h-[1.2rem] mr-2" />Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings className="w-[1.2rem] h-[1.2rem] mr-2" />Settings</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive"><LogOut className="w-[1.2rem] h-[1.2rem] mr-2" />Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}

