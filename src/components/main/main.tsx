import { MainStyled } from './main.styled';

type Props = {
  title: string;
};

const Main = ({ title }: Props) => (
  <MainStyled>
    <h1>{title}</h1>

    <p>
      A simple project starter to work with TypeScript, React, Next.js and
      Styled-Components.
    </p>
  </MainStyled>
);

export default Main;
