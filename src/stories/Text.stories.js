// Text.stories.js
import React from 'react';
import Text from '../components/Text';
import { FontFamilies } from '../components/fontFamilies';
import { FontWeights } from '../components/fontWeights';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' }
  }
};

const Template = (args) => (
  <div>
    <Text fontFamily={FontFamilies.NAIKAI} weight={FontWeights.EXTRA_LIGHT}>{args.text || "這是瀨戶字體 EXTRA_LIGHT 的預設文本。"}</Text>
    <Text fontFamily={FontFamilies.NAIKAI} weight={FontWeights.LIGHT}>{args.text || "這是瀨戶字體 LIGHT 的預設文本。"}</Text>
    <Text fontFamily={FontFamilies.NAIKAI} weight={FontWeights.REGULAR}>{args.text || "這是瀨戶字體 Regular 的預設文本。"}</Text>
    <Text fontFamily={FontFamilies.NAIKAI} weight={FontWeights.SEMI_BOLD}>{args.text || "這是瀨戶字體 SEMI_BOLD 的預設文本。"}</Text>
    <Text fontFamily={FontFamilies.NAIKAI} weight={FontWeights.BOLD}>{args.text || "這是瀨戶字體 Bold 的預設文本。"}</Text>
    <Text fontFamily={FontFamilies.OPEN_HUNINN} weight={FontWeights.REGULAR}>{args.text || "這是粉圓體 Regular 的預設文本。"}</Text>
  </div>
);

export const AllWeights = Template.bind({});
AllWeights.args = {
  text: ""
};