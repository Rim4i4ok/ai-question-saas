"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { tools } from "@/constants";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore the power of AI
        </h2>
        <h2 className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </h2>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
