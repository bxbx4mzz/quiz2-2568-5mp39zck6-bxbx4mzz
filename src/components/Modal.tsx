import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (name: string, amount: number | string, category: string) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  // const [amount, setAmount] = useState<string | number>(0);
  // const [category, setCategory] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  // const handleSubmit = () => {};

  // const totalCost = () => {
  //   let total = 0;
  //   return total;
  // };
  const inputnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  // const inputAmountOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAmount(event.target.value);
  // };
  // const inputCategoryOnChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setCategory(event.target.value);
  // };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <>
      <Stack
        h={300}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="md"
      >
        <Modal opened={opened} onClose={close} title="Add Expense">
          {/* Modal content */}

          <TextInput
            label="Expense Name"
            description="Expense Name"
            error="Expense Name is required"
            placeholder="Eg.,Coca-Cola"
            onChange={inputnameOnChange}
            value={name}
          />
          <NumberInput
            label="Amount"
            description="Amount"
            error="Amount is required"
            placeholder="0"
            //onChange={inputAmountOnChange}
            // value={amount}
          />
          <Select
            label="category"
            placeholder="select category"
            data={["Food", "Transpot", "Entertainment"]}
            error="category is required"
            //onChange={inputCategoryOnChange}
            // value={category}
          />
        </Modal>
        <Button onClick={open}>Add Expense Traacker</Button>
      </Stack>
    </>
  );
}
