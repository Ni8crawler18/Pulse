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
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AlertCircle, Check, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const activityFormSchema = z.object({
  project: z.string({
    required_error: "Please select a project.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  reduction: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Carbon reduction must be a positive number.",
  }),
  evidence: z.string().optional(),
})

type ActivityFormValues = z.infer<typeof activityFormSchema>

export function ActivityForm() {
  const router = useRouter()

  // Add this state inside the ActivityForm function, after the router declaration
  const [iotaIntegration, setIotaIntegration] = useState(true)
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

  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      project: "",
      date: new Date(),
      description: "",
      reduction: "",
      evidence: "",
    },
  })

  function onSubmit(data: ActivityFormValues) {
    // In a real application, you would submit this data to your backend
    console.log(data)

    // If IOTA integration is enabled, simulate a transaction
    if (iotaIntegration) {
      setTransactionStatus("pending")

      // Simulate IOTA transaction
      setTimeout(() => {
        // Mock successful transaction
        setTransactionStatus("success")
        setTransactionId("0x2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t")

        // In a real app, you would redirect after confirmation
        // router.push("/dashboard/activities")
      }, 2000)
    } else {
      // Redirect to the activities page immediately if not using IOTA
      router.push("/dashboard/activities")
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
                    <FormDescription>The project this activity belongs to.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>The date when the activity took place.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="reduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carbon Reduction (tCO₂e)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.1" placeholder="2.5" {...field} />
                    </FormControl>
                    <FormDescription>The amount of carbon reduced in tons of CO₂ equivalent.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="evidence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Evidence (Optional)</FormLabel>
                    <FormControl>
                      <Input type="file" className="cursor-pointer" />
                    </FormControl>
                    <FormDescription>Upload photos, documents, or other evidence of the activity.</FormDescription>
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
                      placeholder="Describe the carbon reduction activity..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Detailed description of the activity and how it contributes to carbon reduction.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="iota-integration" checked={iotaIntegration} onCheckedChange={setIotaIntegration} />
                <Label htmlFor="iota-integration" className="font-medium">
                  Log activity on IOTA Tangle
                </Label>
              </div>

              {iotaIntegration && (
                <div className="rounded-md border p-4">
                  <div className="text-sm">
                    <p className="font-medium">IOTA Integration Details</p>
                    <p className="text-muted-foreground mt-1">
                      Activity data will be stored on the IOTA Tangle with the following index:
                    </p>
                    <code className="mt-2 block bg-muted p-2 text-xs rounded-md">carbon_activity_log</code>

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
                                ? "Logging on IOTA..."
                                : transactionStatus === "success"
                                  ? "Successfully logged on IOTA"
                                  : "Failed to log on IOTA"}
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
                  ? "Logging Activity..."
                  : transactionStatus === "success"
                    ? "Activity Logged"
                    : "Log Activity"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
