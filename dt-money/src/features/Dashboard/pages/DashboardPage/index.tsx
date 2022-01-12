import React from "react";

import { Summary, TransactionsTable } from "features/Dashboard/components";

import { Container } from "./styles";

export const DashboardPage: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
