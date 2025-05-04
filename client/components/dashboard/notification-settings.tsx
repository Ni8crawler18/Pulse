"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    activityLogs: true,
    tokenMinting: true,
    iotaTransactions: true,
    marketplaceActivity: false,
    emailDigest: true,
  })

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSave = () => {
    // In a real application, you would save these settings
    console.log(notifications)
    // Show success message
    alert("Notification settings saved successfully!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how and when you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="project-updates" className="flex flex-col space-y-1">
              <span>Project Updates</span>
              <span className="text-xs text-muted-foreground">Receive notifications about project status changes.</span>
            </Label>
            <Switch
              id="project-updates"
              checked={notifications.projectUpdates}
              onCheckedChange={() => handleToggle("projectUpdates")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="activity-logs" className="flex flex-col space-y-1">
              <span>Activity Logs</span>
              <span className="text-xs text-muted-foreground">
                Receive notifications when new carbon reduction activities are logged.
              </span>
            </Label>
            <Switch
              id="activity-logs"
              checked={notifications.activityLogs}
              onCheckedChange={() => handleToggle("activityLogs")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="token-minting" className="flex flex-col space-y-1">
              <span>Token Minting</span>
              <span className="text-xs text-muted-foreground">
                Receive notifications when carbon credit tokens are minted.
              </span>
            </Label>
            <Switch
              id="token-minting"
              checked={notifications.tokenMinting}
              onCheckedChange={() => handleToggle("tokenMinting")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="iota-transactions" className="flex flex-col space-y-1">
              <span>IOTA Transactions</span>
              <span className="text-xs text-muted-foreground">
                Receive notifications about IOTA network transactions.
              </span>
            </Label>
            <Switch
              id="iota-transactions"
              checked={notifications.iotaTransactions}
              onCheckedChange={() => handleToggle("iotaTransactions")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="marketplace-activity" className="flex flex-col space-y-1">
              <span>Marketplace Activity</span>
              <span className="text-xs text-muted-foreground">
                Receive notifications about carbon credit marketplace activity.
              </span>
            </Label>
            <Switch
              id="marketplace-activity"
              checked={notifications.marketplaceActivity}
              onCheckedChange={() => handleToggle("marketplaceActivity")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-digest" className="flex flex-col space-y-1">
              <span>Email Digest</span>
              <span className="text-xs text-muted-foreground">Receive a weekly email digest of all activity.</span>
            </Label>
            <Switch
              id="email-digest"
              checked={notifications.emailDigest}
              onCheckedChange={() => handleToggle("emailDigest")}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Notification Settings</Button>
        </div>
      </CardContent>
    </Card>
  )
}
