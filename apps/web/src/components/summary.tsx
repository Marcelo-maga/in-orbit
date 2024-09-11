import { Button } from "@nextui-org/react";
import { CreateGoal } from "./create-goal";
import { LogoInOrbit } from "./logo";
import { Progress } from "@nextui-org/progress";
import { CheckCircle2, Plus } from "lucide-react";

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoInOrbit />
          <span className="text-lg font-semibold">5 a 10 de agosto</span>
        </div>
        <CreateGoal />
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} maxValue={15} />
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{" "}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>

      <div className="h-px bg-zinc-900" />

      <div className="flex flex-wrap gap-3">
        <Button
          className="border-dashed"
          variant="bordered"
          color="default"
          startContent={<Plus className="size-4 text-zinc-400" />}
        >
          teste
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{" "}
            <span className="text-zinc-400 text-xs">(10 de agosto)</span>{" "}
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary-500" />
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Acordar cedo</span>" às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
