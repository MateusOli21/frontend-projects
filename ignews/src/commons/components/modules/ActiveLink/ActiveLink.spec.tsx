import { screen } from '@testing-library/react';
import { render } from 'tests/utils/customRender';

import { ActiveLink } from './index';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        pathname: '/',
      };
    },
  };
});

describe('ActiveLink component', () => {
  it('should renders correctly', () => {
    render(<ActiveLink name="Home" link="/" />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should receiving active class when link is same as pathname', () => {
    const { getByText } = render(<ActiveLink name="Home" link="/" />);

    expect(getByText('Home')).toHaveClass('active');
  });
});
