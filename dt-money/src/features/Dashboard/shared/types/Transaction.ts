export interface ITransaction {
  id: string;
  title: string;
  value: string;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}
