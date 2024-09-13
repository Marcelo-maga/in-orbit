import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import { CustomRadio } from "./radio-custom";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createGoal } from "../http/create-goal";
import { useQueryClient } from "@tanstack/react-query";

const createGoalForm = z.object({
  title: z.string().min(1, "Informe a atividade"),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
});

type CreateGoalFormType = z.infer<typeof createGoalForm>;

export function CreateGoal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, control, formState } =
    useForm<CreateGoalFormType>({
      resolver: zodResolver(createGoalForm),
    });

  async function onSubmit(data: CreateGoalFormType) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    });

    queryClient.invalidateQueries({
      queryKey: ["get-pending-goals"],
    });

    queryClient.invalidateQueries({
      queryKey: ["get-summary"],
    });
  }

  return (
    <>
      <Button onClick={onOpen} color="primary" startContent={<Plus />}>
        Cadastrar meta
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        classNames={{
          base: "lg:w-1/5",
          wrapper: "flex justify-end items-end",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cadastrar meta
              </ModalHeader>
              <ModalBody>
                <form className="flex flex-1 flex-col gap-4">
                  <div className="space-y-2">
                    <label className="text-foreground-500">
                      Qual atividade?
                    </label>
                    <Input
                      {...register("title")}
                      autoFocus
                      placeholder="Praticar exercícios, meditar, etc..."
                      isInvalid={!!formState.errors.title}
                      errorMessage={formState.errors.title?.message}
                    />
                  </div>

                  <Controller
                    control={control}
                    name="desiredWeeklyFrequency"
                    defaultValue={1}
                    render={({ field }) => {
                      return (
                        <RadioGroup
                          value={String(field.value)}
                          onValueChange={field.onChange}
                          className="w-full"
                          label="Quantas vezes na semana?"
                        >
                          <CustomRadio
                            description="Comece devagar... mas com estilo!"
                            value="1"
                          >
                            1x na semana
                          </CustomRadio>

                          <CustomRadio
                            description="Duas vezes é só o começo!"
                            value="2"
                          >
                            2x na semana
                          </CustomRadio>

                          <CustomRadio
                            description="Três momentos para fazer acontecer!"
                            value="3"
                          >
                            3x na semana
                          </CustomRadio>

                          <CustomRadio
                            description="Quatro chances para arrasar!"
                            value="4"
                          >
                            4x na semana
                          </CustomRadio>

                          <CustomRadio
                            description="Cinco chances para conquistar!"
                            value="5"
                          >
                            5x na semana
                          </CustomRadio>

                          <CustomRadio
                            description="Seis dias de ação, um de descanso!"
                            value="6"
                          >
                            6x na semana
                          </CustomRadio>

                          <CustomRadio
                            description="Todo dia é dia de brilhar!"
                            value="7"
                          >
                            Todos os dias da semana
                          </CustomRadio>
                        </RadioGroup>
                      );
                    }}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button className="flex-1" color="default" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  className="flex-1"
                  color="primary"
                  onClick={handleSubmit(async (data) => {
                    await onSubmit(data);
                    onClose();
                    reset();
                  })}
                >
                  Salvar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
