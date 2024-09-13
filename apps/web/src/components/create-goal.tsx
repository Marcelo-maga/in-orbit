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

export function CreateGoal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                      autoFocus
                      placeholder="Praticar exercícios, meditar, etc..."
                    />
                  </div>

                  <RadioGroup
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
                </form>
              </ModalBody>
              <ModalFooter>
                <Button className="flex-1" color="default" onPress={onClose}>
                  Fechar
                </Button>
                <Button className="flex-1" color="primary" onPress={onClose}>
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
