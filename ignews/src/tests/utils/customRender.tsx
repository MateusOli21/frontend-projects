import React from 'react';
import { styledTheme } from 'commons/styles';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const AllAppProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: AllAppProviders,
    ...options,
  });

export { customRender as render };
