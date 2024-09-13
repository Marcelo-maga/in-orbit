import { useQuery } from "@tanstack/react-query";
import { Summary } from "./components/summary";
import { EmptyGoals } from "./components/empty-goals";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["get-summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />;
}
