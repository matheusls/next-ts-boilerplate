import { render, screen } from '@testing-library/react';

import Home from './home';

const titleRegex = /next.js, typescript and styled-components boilerplate/i;
const title = titleRegex.source;

describe('<Home /> component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home title={title} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component correctly', () => {
    render(<Home title={title} />);

    expect(
      screen.getByRole('heading', {
        name: titleRegex,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /a simple project starter to work with typescript, react, next.js and styled-components./i,
      ),
    ).toBeInTheDocument();
  });
});
