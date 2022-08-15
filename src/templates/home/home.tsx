import { Main } from 'components';

export type HomeProps = {
  title: string;
};

const Home = ({ title }: HomeProps) => <Main title={title} />;

export default Home;
