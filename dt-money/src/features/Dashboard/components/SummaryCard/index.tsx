import React from "react";

import { formatCurrency } from "shared/utils";

import { Container } from "./styles";

interface ISummaryCardProps {
  title: string;
  imageSrc: string;
  value: number;
  isAltBg: boolean;
}

export const SummaryCard: React.FC<ISummaryCardProps> = ({
  title,
  imageSrc,
  value,
  isAltBg,
}) => {
  return (
    <Container altBgColor={isAltBg}>
      <header>
        <p>{title}</p>
        <img src={imageSrc} alt={title} />
      </header>
      <strong>{formatCurrency(value)}</strong>
    </Container>
  );
};
