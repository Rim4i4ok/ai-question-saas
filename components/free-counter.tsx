"use client";

import { Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

import { MAX_FREE_COUNTS } from "@/constants";
import { useProModal } from "@/hooks/use-pro-modal";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

type FreeCountProps = {
  apiLimitCount: number;
  isPro: boolean;
};

function FreeCount({ apiLimitCount = 0, isPro = false }: FreeCountProps) {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (isPro) return null;

  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            className="w-full"
            variant="premium"
            onClick={proModal.onOpen}
          >
            Upgrade <Zap className="2-4 ml-2 h-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default FreeCount;
