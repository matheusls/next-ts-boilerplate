import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeComponent from './home';

export default {
  title: 'Pages/Home',
  component: HomeComponent,
  argTypes: {
    title: { control: 'text' },
  },
} as ComponentMeta<typeof HomeComponent>;

const Template: ComponentStory<typeof HomeComponent> = ({ title }) => (
  <HomeComponent title={title} />
);

export const Home = Template.bind({});

Home.args = {
  title: 'This is the home page story',
};
