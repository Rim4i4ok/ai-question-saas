import { Settings } from "lucide-react";

import Heading from "@/components/heading";
import SubScriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

async function SettingsPage() {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="space-y-4 px-4 lg:px-8">
        <div className="text-sm text-muted-foreground">
          {isPro
            ? "You are currently on a pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubScriptionButton isPro={isPro} />
      </div>
    </div>
  );
}

export default SettingsPage;
