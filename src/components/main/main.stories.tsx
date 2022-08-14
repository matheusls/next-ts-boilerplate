import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainComponent from './main';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Main',
  component: MainComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
  },
} as ComponentMeta<typeof MainComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainComponent> = (args) => (
  <MainComponent {...args} />
);

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  title: 'This the story of the Main component',
};
