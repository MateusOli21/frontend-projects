import { createContext, useState, useEffect } from "react";

import { ITransaction } from "features/Dashboard/shared/types";
import { mirageApi } from "services/apis/mirageApi";

export interface ITransactionsContext {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

type TransactionInputProps = Omit<ITransaction, "id" | "createdAt">;

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const handleGetTransactions = async () => {
    const response = await mirageApi.get("/transactions");

    setTransactions(response.data.transactions);
  };

  const createTransaction = async (transaction: TransactionInputProps) => {
    const newTransaction = await mirageApi.post("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });

    setTransactions([...transactions, newTransaction.data.transaction]);
  };

  useEffect(() => {
    handleGetTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
