# PIXIE-UI

**PIXIE-UI** 是一個專為可愛風設計的 React UI 元件庫，旨在為您的應用程序提供簡單、易於使用且風格鮮明的 UI 元件。
此庫中的元件設計靈感來自於可愛風格，適合於各種需要柔和、俏皮設計的應用。

## 支持的套件

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
```

## 如何使用


1. 在您的 React 項目中安裝並引入 PIXIE-UI：
```bash
npm install pixie-ui
```
2. 引入 Text 元件並指定字重或精簡版字體, weight參數說明：
   - "200": ExtraLight
   - "300": Light
   - "400": Regular
   - "600": SemiBold
   - "700": Bold
   - "lite": 精簡版

```javascript
import React from 'react';
import { NaikaiFont } from 'pixie-ui';

const App = () => (
  <div>
    <Text weight="400">Regular 文本</Text>
    <Text weight="600">Semi-Bold 文本</Text>
    <Text weight="lite">精簡版文本</Text>
  </div>
);
export default App;

```




## 元件計劃

PIXIE-UI 第一個元件可愛風字體，未來將會添加更多的可愛風格 UI 元件，包括但不限於：

1. 可愛字體文件 (Cute Text) 
2. 可愛按鈕組件 (Cute Buttons)
3. 卡片元件 (Cute Cards)
4. 可愛標題和文字樣式 (Cute Typography)
5. 自定義輸入框 (Cute Input Fields)
