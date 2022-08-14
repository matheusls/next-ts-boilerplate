import { render, screen } from '@testing-library/react';

import Home from './home';

describe('<Home /> component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component correctly', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        name: /next.js, typescript and styled-components boilerplate/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /a simple project starter to work with typescript, react, next.js and styled-components./i,
      ),
    ).toBeInTheDocument();
  });
});
