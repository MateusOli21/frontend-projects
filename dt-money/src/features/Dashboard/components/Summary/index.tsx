import { useTransactionsContext } from "hooks";
import React from "react";

import incomeImg from "shared/assets/income.svg";
import outcomeImg from "shared/assets/outcome.svg";
import totalImg from "shared/assets/total.svg";

import { SummaryCard } from "../SummaryCard";

import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransactionsContext();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc[0].value += Number(transaction.value);
        acc[2].value += Number(transaction.value);
      } else {
        acc[1].value -= Number(transaction.value);
        acc[2].value -= Number(transaction.value);
      }

      return acc;
    },
    [
      { title: "Entradas", imageSrc: incomeImg, value: 0, isAltBg: false },
      { title: "Saídas", imageSrc: outcomeImg, value: 0, isAltBg: false },
      { title: "Total", imageSrc: totalImg, value: 0, isAltBg: true },
    ]
  );

  return (
    <Container>
      {summary?.map((item, index) => (
        <SummaryCard
          key={index}
          title={item.title}
          imageSrc={item.imageSrc}
          value={item.value}
          isAltBg={item.isAltBg}
        />
      ))}
    </Container>
  );
};
