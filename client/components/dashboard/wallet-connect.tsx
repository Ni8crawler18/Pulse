"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Check, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function WalletConnect() {
  const [walletStatus, setWalletStatus] = useState<"disconnected" | "connecting" | "connected" | "error">(
    "disconnected",
  )
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [walletBalance, setWalletBalance] = useState<string>("")

  const connectWallet = async () => {
    try {
      setWalletStatus("connecting")

      // Simulate wallet connection
      // In a real app, you would use the IOTA SDK or Web3 to connect to a wallet
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful connection
      setWalletStatus("connected")
      setWalletAddress("0xbaf982831161779563e4f665a5c7b031101a8d087ba8ff23aea0a30832b177e6")
      setWalletBalance("5 IOTA")
    } catch (error) {
      console.error("Error connecting wallet:", error)
      setWalletStatus("error")
    }
  }

  const disconnectWallet = () => {
    setWalletStatus("disconnected")
    setWalletAddress("")
    setWalletBalance("")
  }

  return (
    <div className="space-y-4">
      {walletStatus === "connected" ? (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-emerald-500" />
                <span className="font-medium">Wallet Connected</span>
              </div>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                <Check className="mr-1 h-3 w-3" /> Connected
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Wallet Address</span>
                <code className="mt-1 block truncate rounded bg-muted px-2 py-1 text-xs">{walletAddress}</code>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Balance</span>
                <span className="font-medium">{walletBalance}</span>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full" onClick={disconnectWallet}>
                Disconnect Wallet
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          <Button className="w-full" onClick={connectWallet} disabled={walletStatus === "connecting"}>
            {walletStatus === "connecting" ? (
              <>Connecting Wallet...</>
            ) : (
              <>
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
              </>
            )}
          </Button>

          {walletStatus === "error" && (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span>Failed to connect wallet. Please try again.</span>
            </div>
          )}
        </div>
      )}

      <div className="text-sm text-muted-foreground">
        <p>Connecting your wallet allows you to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Mint carbon credit tokens on the IOTA/Shimmer network</li>
          <li>Sign transactions for project registration</li>
          <li>Record carbon reduction activities on the Tangle</li>
          <li>Transfer and trade carbon credit tokens</li>
        </ul>
      </div>
    </div>
  )
}
