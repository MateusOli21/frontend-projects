import React from "react";

import { formatCurrency } from "shared/utils";
import { useTransactionsContext } from "hooks";
import { ITransaction } from "features/Dashboard/shared/types";

import { Container } from "./styles";

interface TransactionsTableProps {
  transactions?: ITransaction[];
}

export const TransactionsTable: React.FC<TransactionsTableProps> = () => {
  const { transactions } = useTransactionsContext();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td
                className={
                  transaction.type === "deposit" ? "is-income" : "is-outcome"
                }
              >
                {formatCurrency(Number(transaction.value))}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Date(transaction.createdAt).toLocaleDateString("pt-BR", {
                  timeZone: "UTC",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
