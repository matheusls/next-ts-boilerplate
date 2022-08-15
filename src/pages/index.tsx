import { Home } from 'templates';
import { HomeProps } from 'templates/props';

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Next.js, TypeScript and Styled-Components Boilerplate',
    },
  };
};

const Index = ({ title }: HomeProps) => <Home title={title} />;

export default Index;
