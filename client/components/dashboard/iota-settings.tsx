"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Wallet } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { WalletConnect } from "@/components/dashboard/wallet-connect"

const iotaSettingsSchema = z.object({
  nodeUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  network: z.string({
    required_error: "Please select a network.",
  }),
  autoConnect: z.boolean().default(false),
  indexPrefix: z.string().min(1, {
    message: "Index prefix is required.",
  }),
  evmRpcUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
})

type IOTASettingsValues = z.infer<typeof iotaSettingsSchema>

export function IOTASettings() {
  const form = useForm<IOTASettingsValues>({
    resolver: zodResolver(iotaSettingsSchema),
    defaultValues: {
      nodeUrl: "https://api.testnet.shimmer.network",
      network: "testnet",
      autoConnect: false,
      indexPrefix: "carbon_",
      evmRpcUrl: "https://json-rpc.evm.testnet.shimmer.network",
    },
  })

  function onSubmit(data: IOTASettingsValues) {
    // In a real application, you would save these settings
    console.log(data)
    // Show success message
    alert("IOTA settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>IOTA Network Configuration</CardTitle>
          <CardDescription>Configure your IOTA network settings for the carbon credit platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="nodeUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IOTA Node URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://api.testnet.shimmer.network" {...field} />
                      </FormControl>
                      <FormDescription>The URL of the IOTA node to connect to.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="network"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Network</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a network" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mainnet">IOTA Mainnet</SelectItem>
                          <SelectItem value="testnet">IOTA Testnet</SelectItem>
                          <SelectItem value="shimmer">Shimmer</SelectItem>
                          <SelectItem value="shimmer-testnet">Shimmer Testnet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>The IOTA network to use.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="indexPrefix"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Index Prefix</FormLabel>
                      <FormControl>
                        <Input placeholder="carbon_" {...field} />
                      </FormControl>
                      <FormDescription>
                        Prefix for IOTA message indexes (e.g., carbon_project_register, carbon_activity_log).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="evmRpcUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shimmer EVM RPC URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://json-rpc.evm.testnet.shimmer.network" {...field} />
                      </FormControl>
                      <FormDescription>The RPC URL for Shimmer EVM for token minting.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="autoConnect"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Auto-connect to IOTA</FormLabel>
                      <FormDescription>
                        Automatically connect to the IOTA network when the application starts.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit">Save IOTA Settings</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wallet Connection</CardTitle>
          <CardDescription>Connect your IOTA/Shimmer wallet to mint and manage carbon credit tokens.</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Wallet className="h-4 w-4" />
            <AlertTitle>Wallet Required</AlertTitle>
            <AlertDescription>
              You need to connect a wallet to mint carbon credit tokens on the IOTA/Shimmer network.
            </AlertDescription>
          </Alert>

          <WalletConnect />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className="text-sm text-muted-foreground">
            Don&apos;t have a wallet?{" "}
            <a
              href="https://firefly.iota.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Download Firefly Wallet
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Need test tokens?{" "}
            <a
              href="https://faucet.testnet.shimmer.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Get from Shimmer Faucet
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
