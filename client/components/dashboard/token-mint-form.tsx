"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Coins, Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExternalLink, AlertCircle } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const tokenMintFormSchema = z.object({
  project: z.string({
    required_error: "Please select a project.",
  }),
  activities: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one activity.",
  }),
  confirmMint: z.boolean().refine((value) => value === true, {
    message: "You must confirm the minting process.",
  }),
})

type TokenMintFormValues = z.infer<typeof tokenMintFormSchema>

export function TokenMintForm() {
  const router = useRouter()

  const [transactionStatus, setTransactionStatus] = useState<"idle" | "pending" | "success" | "error">("idle")
  const [transactionId, setTransactionId] = useState<string>("")

  // Mock projects data
  const projects = [
    { id: "1", name: "Forest Restoration" },
    { id: "2", name: "Solar Farm Installation" },
    { id: "3", name: "Mangrove Conservation" },
    { id: "4", name: "Wind Turbine Farm" },
    { id: "5", name: "Methane Capture" },
  ]

  // Mock activities data
  const activities = [
    { id: "1", projectId: "1", description: "Tree planting - 50 trees", date: "2023-05-01", reduction: 2.5 },
    { id: "2", projectId: "2", description: "Solar panel installation", date: "2023-05-05", reduction: 5.8 },
    { id: "3", projectId: "3", description: "Mangrove seedling planting", date: "2023-05-12", reduction: 1.2 },
    { id: "4", projectId: "4", description: "Wind turbine maintenance", date: "2023-05-18", reduction: 3.7 },
    { id: "5", projectId: "5", description: "Methane capture system upgrade", date: "2023-05-25", reduction: 4.2 },
    { id: "6", projectId: "1", description: "Tree planting - 75 trees", date: "2023-06-02", reduction: 3.8 },
    { id: "7", projectId: "2", description: "Solar panel expansion", date: "2023-06-10", reduction: 6.5 },
  ]

  const form = useForm<TokenMintFormValues>({
    resolver: zodResolver(tokenMintFormSchema),
    defaultValues: {
      project: "",
      activities: [],
      confirmMint: false,
    },
  })

  // Filter activities based on selected project
  const selectedProject = form.watch("project")
  const filteredActivities = activities.filter((activity) => activity.projectId === selectedProject)

  // Calculate total carbon reduction
  const selectedActivities = form.watch("activities")
  const totalReduction = filteredActivities
    .filter((activity) => selectedActivities.includes(activity.id))
    .reduce((sum, activity) => sum + activity.reduction, 0)

  // Calculate number of tokens to mint (1 token per ton of CO2)
  const tokensToMint = Math.floor(totalReduction)

  function onSubmit(data: TokenMintFormValues) {
    // In a real application, you would submit this data to your backend
    console.log(data)

    // Show transaction in progress
    setTransactionStatus("pending")

    // Simulate IOTA transaction
    setTimeout(() => {
      // Mock successful transaction
      setTransactionStatus("success")
      setTransactionId("0x7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z")

      // In a real app, you would redirect after confirmation
      // router.push("/dashboard/tokens")
    }, 3000)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a project" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {projects.map((project) => (
                        <SelectItem key={project.id} value={project.id}>
                          {project.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the project for which you want to mint carbon credit tokens.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedProject && filteredActivities.length > 0 ? (
              <FormField
                control={form.control}
                name="activities"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Carbon Reduction Activities</FormLabel>
                      <FormDescription>Select the activities to include in the token minting process.</FormDescription>
                    </div>
                    <div className="space-y-4 border rounded-md p-4">
                      {filteredActivities.map((activity) => (
                        <FormField
                          key={activity.id}
                          control={form.control}
                          name="activities"
                          render={({ field }) => {
                            return (
                              <FormItem key={activity.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(activity.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, activity.id])
                                        : field.onChange(field.value?.filter((value) => value !== activity.id))
                                    }}
                                  />
                                </FormControl>
                                <div className="flex-1 space-y-1 leading-none">
                                  <FormLabel className="text-sm font-medium">{activity.description}</FormLabel>
                                  <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>{new Date(activity.date).toLocaleDateString()}</span>
                                    <span>{activity.reduction.toFixed(2)} tCO₂e</span>
                                  </div>
                                </div>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : selectedProject ? (
              <Alert>
                <AlertTitle>No activities found</AlertTitle>
                <AlertDescription>
                  There are no carbon reduction activities recorded for this project yet.
                </AlertDescription>
              </Alert>
            ) : null}

            {selectedActivities.length > 0 && (
              <div className="bg-emerald-50 p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Token Minting Summary</h3>
                    <p className="text-sm text-muted-foreground">Based on your selected activities</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Coins className="h-5 w-5" />
                    <span className="text-2xl font-bold">{tokensToMint}</span>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between">
                    <span>Total Carbon Reduction:</span>
                    <span>{totalReduction.toFixed(2)} tCO₂e</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tokens to Mint (1 token per ton):</span>
                    <span>{tokensToMint}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remaining Carbon Reduction:</span>
                    <span>{(totalReduction - tokensToMint).toFixed(2)} tCO₂e</span>
                  </div>
                </div>
              </div>
            )}

            <FormField
              control={form.control}
              name="confirmMint"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I confirm that I want to mint carbon credit tokens for the selected activities
                    </FormLabel>
                    <FormDescription>
                      This action will create tokens on the IOTA network and cannot be undone.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            {transactionStatus !== "idle" && (
              <div
                className={`p-4 rounded-md ${
                  transactionStatus === "pending"
                    ? "bg-blue-50"
                    : transactionStatus === "success"
                      ? "bg-emerald-50"
                      : "bg-red-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {transactionStatus === "pending" ? (
                      <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full" />
                    ) : transactionStatus === "success" ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={`font-medium ${
                        transactionStatus === "pending"
                          ? "text-blue-700"
                          : transactionStatus === "success"
                            ? "text-emerald-700"
                            : "text-red-700"
                      }`}
                    >
                      {transactionStatus === "pending"
                        ? "Transaction in Progress"
                        : transactionStatus === "success"
                          ? "Transaction Successful"
                          : "Transaction Failed"}
                    </span>
                  </div>
                  {transactionStatus === "success" && (
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                      Confirmed
                    </Badge>
                  )}
                </div>

                {transactionId && (
                  <div className="mt-2">
                    <div className="text-xs text-muted-foreground">Transaction ID:</div>
                    <div className="flex items-center mt-1">
                      <code className="text-xs bg-muted p-1 rounded">{transactionId}</code>
                      <a
                        href={`https://explorer.iota.org/mainnet/message/${transactionId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end">
              <Button type="submit" disabled={tokensToMint === 0 || transactionStatus === "pending"}>
                <Coins className="mr-2 h-4 w-4" />
                {transactionStatus === "pending"
                  ? "Processing..."
                  : transactionStatus === "success"
                    ? "Mint More Tokens"
                    : `Mint ${tokensToMint} Tokens`}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
