import { BrowserRouter as Router } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

interface AllAppProvidersProps {
  children?: React.ReactNode;
}

const AllAppProviders = ({ children }: AllAppProvidersProps) => {
  return <Router>{children}</Router>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllAppProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
