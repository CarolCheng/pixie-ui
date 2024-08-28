# PIXIE-UI

[English Documentation](./README.md)

**PIXIE-UI** 是一個專為可愛風設計的 React UI 元件庫，旨在為您的應用程序提供簡單、易於使用且風格鮮明的 UI 元件。
此庫中的元件設計靈感來自於可愛風格，適合於各種需要柔和、俏皮設計的應用。

## 功能

1. **Text**: PIXIE-UI 中的第一個元件，專為網頁應用設計的多字重、可愛風格字體，並包含精簡版字體，適合繁體中文常用字的優化顯示。
   字體來源主要有以下:
   - [瀨戶字體 (NaikaiFont)](https://github.com/max32002/naikaifont)
   - [粉圓體（open-huninn font）](https://github.com/marsnow/open-huninn-web-font)

## 安裝

PIXIE-UI 目前正在開發中，您可以通過 GitHub 克隆庫，並在本地進行測試和開發。

```bash
git clone https://github.com/your-username/pixie-ui.git
cd pixie-ui
npm install
git submodule update --init --recursive
npm run link-fonts
npm start
```

## 如何使用

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


## 元件計劃

PIXIE-UI 第一個元件可愛風字體，未來將會添加更多的可愛風格 UI 元件，包括但不限於：

1. 可愛字體文件 (Cute Text) 
2. 可愛按鈕組件 (Cute Buttons)
3. 卡片元件 (Cute Cards)
4. 可愛標題和文字樣式 (Cute Typography)
5. 自定義輸入框 (Cute Input Fields)
