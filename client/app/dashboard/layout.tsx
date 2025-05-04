import type { ReactNode } from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar"
import { UserNav } from "@/components/dashboard/user-nav"
import { Leaf } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2 md:hidden">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold">Pulse</span>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <Sidebar>
            <SidebarHeader className="flex h-16 items-center px-4">
              <Link href="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold">Pulse</span>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <DashboardNav />
            </SidebarContent>
            <SidebarFooter className="p-4">
              <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pulse</div>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 p-6 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
