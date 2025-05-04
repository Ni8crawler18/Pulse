import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IOTASettings } from "@/components/dashboard/iota-settings"
import { ProfileSettings } from "@/components/dashboard/profile-settings"
import { NotificationSettings } from "@/components/dashboard/notification-settings"

export const metadata: Metadata = {
  title: "Settings | Pulse",
  description: "Configure your account and IOTA integration settings",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your account and IOTA integration settings." />
      <Tabs defaultValue="iota" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="iota">IOTA Integration</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="iota">
          <IOTASettings />
        </TabsContent>
        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
