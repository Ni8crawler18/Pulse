import type React from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface TransactionHistoryProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TransactionHistory({ className, ...props }: TransactionHistoryProps) {
  // Mock data for demonstration
  const transactions = [
    {
      id: "1",
      type: "Project Registration",
      project: "Forest Restoration",
      status: "Confirmed",
      timestamp: "2023-05-15T10:30:00Z",
      messageId: "0x1a2b3c4d5e6f...",
    },
    {
      id: "2",
      type: "Activity Log",
      project: "Solar Farm Installation",
      status: "Confirmed",
      timestamp: "2023-05-18T14:45:00Z",
      messageId: "0x2b3c4d5e6f7g...",
    },
    {
      id: "3",
      type: "Token Mint",
      project: "Forest Restoration",
      status: "Pending",
      timestamp: "2023-05-22T09:15:00Z",
      messageId: "0x3c4d5e6f7g8h...",
    },
    {
      id: "4",
      type: "Activity Log",
      project: "Wind Turbine Farm",
      status: "Confirmed",
      timestamp: "2023-05-25T16:20:00Z",
      messageId: "0x4d5e6f7g8h9i...",
    },
  ]

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>IOTA Transactions</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/transactions">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex flex-col gap-2 border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="font-medium">{tx.type}</div>
                <Badge
                  variant={tx.status === "Confirmed" ? "default" : tx.status === "Pending" ? "outline" : "destructive"}
                >
                  {tx.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{tx.project}</span>
                <span className="text-muted-foreground">
                  {new Date(tx.timestamp).toLocaleString(undefined, {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="truncate">{tx.messageId}</span>
                <a
                  href={`https://explorer.iota.org/mainnet/message/${tx.messageId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="https://explorer.iota.org/" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Open IOTA Explorer
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
