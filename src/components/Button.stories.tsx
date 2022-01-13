import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button />;

export const Primary = Template.bind({});
