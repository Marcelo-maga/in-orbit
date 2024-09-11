import illustration from "../assets/illustration.svg";
import logo from "../assets/logo-in-orbit.svg";
import { CreateGoal } from "./create-goal";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={illustration} alt="illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <CreateGoal />
    </div>
  );
}
