import React, { useState } from "react";
import Modal from "react-modal";

import { GlobalStyle } from "shared/styles/globals";
import { makeMirageServer } from "services/mocks/mirageServer";
import { Header, NewTransactionModal } from "components/modules";
import { DashboardPage } from "features/Dashboard/pages";
import { TransactionsProvider } from "contexts/TransactionsContext";

makeMirageServer();

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  const handleToggleNewTransactionModal = () =>
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onToggleNewTransactionModal={handleToggleNewTransactionModal} />
      <DashboardPage />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onCloseModal={handleToggleNewTransactionModal}
        onRequestClose={handleToggleNewTransactionModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      />
    </TransactionsProvider>
  );
}
