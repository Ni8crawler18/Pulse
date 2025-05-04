"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AlertCircle, Check, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const projectFormSchema = z.object({
  name: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  type: z.string({
    required_error: "Please select a project type.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  expectedReduction: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Expected reduction must be a positive number.",
  }),
})

type ProjectFormValues = z.infer<typeof projectFormSchema>

export function ProjectForm() {
  const router = useRouter()

  const [iotaIntegration, setIotaIntegration] = useState(true)
  const [transactionStatus, setTransactionStatus] = useState<"idle" | "pending" | "success" | "error">("idle")
  const [transactionId, setTransactionId] = useState<string>("")

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      location: "",
      type: "",
      description: "",
      expectedReduction: "",
    },
  })

  function onSubmit(data: ProjectFormValues) {
    // In a real application, you would submit this data to your backend
    console.log(data)

    // If IOTA integration is enabled, simulate a transaction
    if (iotaIntegration) {
      setTransactionStatus("pending")

      // Simulate IOTA transaction
      setTimeout(() => {
        // Mock successful transaction
        setTransactionStatus("success")
        setTransactionId("0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t")

        // In a real app, you would redirect after confirmation
        // router.push("/dashboard/projects")
      }, 2000)
    } else {
      // Redirect to the projects page immediately if not using IOTA
      router.push("/dashboard/projects")
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Forest Restoration" {...field} />
                    </FormControl>
                    <FormDescription>The name of your carbon offset project.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Amazon Rainforest, Brazil" {...field} />
                    </FormControl>
                    <FormDescription>Where the project is located.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="reforestation">Reforestation</SelectItem>
                        <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                        <SelectItem value="conservation">Conservation</SelectItem>
                        <SelectItem value="emissions-reduction">Emissions Reduction</SelectItem>
                        <SelectItem value="energy-efficiency">Energy Efficiency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>The type of carbon offset project.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedReduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Carbon Reduction (tCO₂e)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.1" placeholder="5000" {...field} />
                    </FormControl>
                    <FormDescription>Estimated total carbon reduction in tons of CO₂ equivalent.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a detailed description of your project..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Detailed information about the project, its goals, and implementation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="iota-integration" checked={iotaIntegration} onCheckedChange={setIotaIntegration} />
                <Label htmlFor="iota-integration" className="font-medium">
                  Register project on IOTA Tangle
                </Label>
              </div>

              {iotaIntegration && (
                <div className="rounded-md border p-4">
                  <div className="text-sm">
                    <p className="font-medium">IOTA Integration Details</p>
                    <p className="text-muted-foreground mt-1">
                      Project data will be stored on the IOTA Tangle with the following index:
                    </p>
                    <code className="mt-2 block bg-muted p-2 text-xs rounded-md">carbon_project_register</code>

                    {transactionStatus !== "idle" && (
                      <div
                        className={`mt-4 p-3 rounded-md ${
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
                              className={`text-xs font-medium ${
                                transactionStatus === "pending"
                                  ? "text-blue-700"
                                  : transactionStatus === "success"
                                    ? "text-emerald-700"
                                    : "text-red-700"
                              }`}
                            >
                              {transactionStatus === "pending"
                                ? "Registering on IOTA..."
                                : transactionStatus === "success"
                                  ? "Successfully registered on IOTA"
                                  : "Failed to register on IOTA"}
                            </span>
                          </div>
                          {transactionStatus === "success" && (
                            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 text-xs">
                              Confirmed
                            </Badge>
                          )}
                        </div>

                        {transactionId && (
                          <div className="mt-2">
                            <div className="text-xs text-muted-foreground">Transaction ID:</div>
                            <div className="flex items-center mt-1">
                              <code className="text-xs bg-muted p-1 rounded truncate max-w-[200px]">
                                {transactionId}
                              </code>
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
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={transactionStatus === "pending"}>
                {transactionStatus === "pending"
                  ? "Registering Project..."
                  : transactionStatus === "success"
                    ? "Project Registered"
                    : "Register Project"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
