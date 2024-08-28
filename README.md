# PIXIE-UI

[中文文檔](./README.zh-CN.md)

**PIXIE-UI** is a React UI component library designed with a cute and playful style, aimed at providing simple, easy-to-use, and visually distinctive components for your applications. The components in this library are inspired by a cute design aesthetic, making them perfect for applications that need a soft, whimsical touch.


## Features


1. **Text**: The first component in PIXIE-UI, designed for web applications, features multiple font weights with a cute style. It also includes a simplified version of the fonts optimized for Traditional Chinese characters. The primary font sources are:
   - [NaikaiFont (瀨戶字體)](https://github.com/max32002/naikaifont)
   - [open-huninn font (粉圓體)](https://github.com/marsnow/open-huninn-web-font)

## Installation

PIXIE-UI is currently in development. You can clone the repository from GitHub and start testing and developing locally.

```bash
git clone https://github.com/your-username/pixie-ui.git
cd pixie-ui
npm install
git submodule update --init --recursive
npm run link-fonts
npm start
```

## How to Use

To use PIXIE-UI in your project, simply import the components you need. Here's an example of how to use the Text component with custom fonts:

```javascript
import { ThemeProvider, Text } from 'pixie-ui';
import { FontFamilies, FontWeights } from 'pixie-ui/constants';

function App() {
  return (
    <ThemeProvider fontFamily={FontFamilies.NAIKAI} fontWeight={FontWeights.BOLD}>
      <Text>可愛的字體效果！</Text>
    </ThemeProvider>
  );
}
```


## Roadmap

The first component in PIXIE-UI is a cute style font component. Future plans include adding more cute-themed UI components, such as:


1. Cute Text 
2. Cute Buttons
3. Cute Cards
4. Cute Typography
5. Cute Input Fields
