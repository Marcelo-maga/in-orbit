type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
};

export async function getPendingGoals(): Promise<PendingGoalsResponse[]> {
  const resultRequest = await fetch("http://localhost:3333/pending-goals");
  const result = await resultRequest.json();
  return result.pendingGoals;
}
