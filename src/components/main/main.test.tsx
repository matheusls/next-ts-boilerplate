import { render, screen } from '@testing-library/react';

import Main from './main';

describe('<Main /> component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Main title="Main Component Snapshot" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component correctly', () => {
    render(<Main title="Main Component" />);

    expect(
      screen.getByRole('heading', { name: /main component/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /a simple project starter to work with typescript, react, next.js and styled-components./i,
      ),
    ).toBeInTheDocument();
  });
});
