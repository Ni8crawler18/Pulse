import type React from "react"
import Link from "next/link"
import { ArrowRight, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TokensOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TokensOverview({ className, ...props }: TokensOverviewProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Carbon Credits</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/tokens">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <div className="rounded-full bg-emerald-100 p-4 mb-4">
          <Coins className="h-8 w-8 text-emerald-600" />
        </div>
        <div className="text-4xl font-bold">128</div>
        <div className="text-sm text-muted-foreground mt-1">Total Carbon Credits</div>
        <div className="w-full mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm">Available</div>
            <div className="font-medium">85</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">Traded</div>
            <div className="font-medium">43</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">Pending Verification</div>
            <div className="font-medium">12</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/dashboard/tokens/mint">
            <Coins className="mr-2 h-4 w-4" /> Mint New Tokens
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
