import { useContext } from "react";

import {
  ITransactionsContext,
  TransactionsContext,
} from "contexts/TransactionsContext";

export const useTransactionsContext = (): ITransactionsContext =>
  useContext(TransactionsContext);
