import { Button } from "@nextui-org/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { getPendingGoals } from "../http/get-pending-goals";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["get-pending-goals"],
    queryFn: getPendingGoals,
  });

  if (!data) return null;

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({
      queryKey: ["get-pending-goals"],
    });

    queryClient.invalidateQueries({
      queryKey: ["get-summary"],
    });
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((goal) => {
        return (
          <Button
            onClick={() => handleCompleteGoal(goal.id)}
            key={goal.id}
            className="border-dashed text-zinc-200 disabled:border-zinc-600 disabled:text-zinc-600"
            variant="bordered"
            color="default"
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            startContent={<Plus className="size-4" />}
          >
            {goal.title}
          </Button>
        );
      })}
    </div>
  );
}
