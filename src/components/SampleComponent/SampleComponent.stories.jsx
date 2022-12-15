import SampleComponent from "./SampleComponent";

export default {
  title: "SampleComponent Stories",
  component: SampleComponent,
};

const Template = (args) => <SampleComponent {...args} />;

export const SampleComponentWithNoName = Template.bind({});
export const SampleComponentWithName = Template.bind({});
SampleComponentWithName.args = {
  name: "Marty",
};
