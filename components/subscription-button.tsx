"use client";

import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

import { Button } from "./ui/button";

type SubScriptionButtonProps = {
  isPro: boolean;
};

function SubScriptionButton({ isPro = false }: SubScriptionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "premium"}
      onClick={onClickHandler}
      disabled={isLoading}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  );
}

export default SubScriptionButton;
