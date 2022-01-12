import React, { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";

import { useTransactionsContext } from "hooks";
import { ButtonWithIcon, Input, PrimaryButton } from "components/elements";
import { ITransaction } from "features/Dashboard/shared/types";

import outcomeIcon from "shared/assets/outcome.svg";
import incomeIcon from "shared/assets/income.svg";

import { Container } from "./styles";

type ITransactionData = Omit<ITransaction, "id" | "createdAt">;

interface NewTransactionModalProps extends ReactModal.Props {
  onCloseModal: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  onCloseModal,
  ...rest
}) => {
  const { createTransaction } = useTransactionsContext();

  const [transactionData, setTransactionData] = useState<ITransactionData>(
    {} as ITransactionData
  );
  const [transactionType, setTransactionType] = useState<
    "deposit" | "withdraw"
  >("deposit");

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransactionData({
      ...transactionData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectTransactionType = (selectedType: "deposit" | "withdraw") =>
    setTransactionType(selectedType);

  const handleCreateNewTransaction = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const newTransaction = {
      ...transactionData,
      type: transactionType,
    };

    await createTransaction(newTransaction);

    setTransactionData({} as ITransactionData);
    onCloseModal();
  };

  return (
    <Modal {...rest}>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <Input
          placeholder="Título"
          name="title"
          value={transactionData.title || ""}
          onChange={handleChangeInputValue}
        />
        <Input
          placeholder="Preço"
          name="value"
          // Type="number"
          value={transactionData.value || ""}
          onChange={handleChangeInputValue}
        />
        <Input
          placeholder="Categoria"
          name="category"
          value={transactionData.category || ""}
          onChange={handleChangeInputValue}
        />

        <div className="button-wrapper">
          <ButtonWithIcon
            selected={transactionType === "deposit"}
            onClick={() => handleSelectTransactionType("deposit")}
            type="button"
            activeColor="green"
            text="Depósito"
            icon={incomeIcon}
          />
          <ButtonWithIcon
            onClick={() => handleSelectTransactionType("withdraw")}
            selected={transactionType === "withdraw"}
            type="button"
            activeColor="red"
            text="Retirada"
            icon={outcomeIcon}
          />
        </div>
        <PrimaryButton type="submit" backgroundColor="green" fontWeight={600}>
          Cadastrar
        </PrimaryButton>
      </Container>
    </Modal>
  );
};
