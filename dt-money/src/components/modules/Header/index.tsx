import React from "react";

import { PrimaryButton } from "components/elements";
import logoImg from "shared/assets/logo.svg";

import { Container } from "./styles";

// Modal.setAppElement("dashboard-page");

interface HeaderProps {
  onToggleNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleNewTransactionModal,
}) => {
  return (
    <Container id="dashboard-page">
      <div className="content">
        <img src={logoImg} alt="logo dt money" />

        <PrimaryButton type="button" onClick={onToggleNewTransactionModal}>
          Nova transação
        </PrimaryButton>
      </div>
    </Container>
  );
};
