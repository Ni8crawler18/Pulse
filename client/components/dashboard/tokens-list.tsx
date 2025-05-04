"use client"

import { useState } from "react"
import { ExternalLink, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function TokensList() {
  // Mock data for demonstration
  const [tokens, setTokens] = useState([
    {
      id: "1",
      tokenId: "CCT-001-2023",
      project: "Forest Restoration",
      amount: 1.0,
      status: "Available",
      mintedAt: "2023-05-15",
      txHash: "0x1a2b3c4d5e6f...",
    },
    {
      id: "2",
      tokenId: "CCT-002-2023",
      project: "Solar Farm Installation",
      amount: 1.0,
      status: "Traded",
      mintedAt: "2023-05-18",
      txHash: "0x2b3c4d5e6f7g...",
    },
    {
      id: "3",
      tokenId: "CCT-003-2023",
      project: "Forest Restoration",
      amount: 1.0,
      status: "Available",
      mintedAt: "2023-05-22",
      txHash: "0x3c4d5e6f7g8h...",
    },
    {
      id: "4",
      tokenId: "CCT-004-2023",
      project: "Wind Turbine Farm",
      amount: 1.0,
      status: "Available",
      mintedAt: "2023-05-25",
      txHash: "0x4d5e6f7g8h9i...",
    },
    {
      id: "5",
      tokenId: "CCT-005-2023",
      project: "Mangrove Conservation",
      amount: 1.0,
      status: "Pending",
      mintedAt: "2023-05-28",
      txHash: "0x5e6f7g8h9i0j...",
    },
    {
      id: "6",
      tokenId: "CCT-006-2023",
      project: "Solar Farm Installation",
      amount: 1.0,
      status: "Traded",
      mintedAt: "2023-06-01",
      txHash: "0x6f7g8h9i0j1k...",
    },
    {
      id: "7",
      tokenId: "CCT-007-2023",
      project: "Methane Capture",
      amount: 1.0,
      status: "Pending",
      mintedAt: "2023-06-05",
      txHash: "0x7g8h9i0j1k2l...",
    },
  ])

  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="text-right">Amount (tCO₂e)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Minted Date</TableHead>
              <TableHead>Transaction</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map((token) => (
              <TableRow key={token.id}>
                <TableCell className="font-medium">{token.tokenId}</TableCell>
                <TableCell>{token.project}</TableCell>
                <TableCell className="text-right">{token.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      token.status === "Available" ? "default" : token.status === "Traded" ? "secondary" : "outline"
                    }
                  >
                    {token.status}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(token.mintedAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 truncate" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {token.txHash.substring(0, 10)}...
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Certificate</DropdownMenuItem>
                      <DropdownMenuItem>Transfer Token</DropdownMenuItem>
                      <DropdownMenuItem>Verify on Explorer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
