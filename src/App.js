import React, { useState } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { FontFamilies } from './constants/fontFamilies';  // 字體巨集
import { FontWeights } from './constants/fontWeights';  // 字重巨集
import { colorThemes } from './theme/colortheme';

import PuffButton from "./components/buttons/PuffButton";
import Text from "./components/Text";


function App() {
  const [fontFamily, setFontFamily] = useState(FontFamilies.NAIKAI);
  const [fontWeight, setFontWeight] = useState(FontWeights.REGULAR);

  // 根據所選字體家族動態設定字重選項
  const isLimitedWeight = fontFamily === FontFamilies.OPEN_HUNINN || fontFamily === FontFamilies.NAIKAI_LITE;

  const handleFontFamilyChange = (e) => {
    const selectedFontFamily = e.target.value;
    setFontFamily(selectedFontFamily);

    // 如果選擇的字體家族是有限制的，將字重設置為 Regular
    if (selectedFontFamily === FontFamilies.OPEN_HUNINN || selectedFontFamily === FontFamilies.NAIKAI_LITE) {
      setFontWeight(FontWeights.REGULAR);
    }
  };

  return (
    <div>
      {/* 字體選擇器 */}
      <div>
        <label htmlFor="fontFamily">選擇字體:</label>
        <select
          id="fontFamily"
          value={fontFamily}
          onChange={handleFontFamilyChange}
        >
          <option value={FontFamilies.NAIKAI}>NaikaiFont</option>
          <option value={FontFamilies.OPEN_HUNINN}>Open Huninn</option>
          <option value={FontFamilies.NAIKAI_LITE}>Naikai Lite</option>
        </select>
      </div>

      {/* 字重選擇器 */}
      <div>
        <label htmlFor="fontWeight">選擇字重:</label>
        <select
          id="fontWeight"
          value={fontWeight}
          onChange={(e) => setFontWeight(Number(e.target.value))} // 確保字重是數字
          disabled={isLimitedWeight} // 當字體家族有限制時禁用選擇
        >
          <option value={FontWeights.EXTRA_LIGHT}>ExtraLight (200)</option>
          <option value={FontWeights.LIGHT}>Light (300)</option>
          <option value={FontWeights.REGULAR}>Regular (400)</option>
          <option value={FontWeights.SEMI_BOLD}>SEMI_BOLD (600)</option>
          <option value={FontWeights.BOLD}>Bold (700)</option>
        </select>
      </div>

      {/* ThemeProvider 包裹文本組件，動態應用字體樣式 */}
      <ThemeProvider fontFamily={fontFamily} fontWeight={fontWeight} colorThemes={colorThemes} >
        <Text>這是 {fontFamily} 字體</Text>
        <PuffButton>Click Here</PuffButton>
      </ThemeProvider>
    </div >
  );
}

export default App;
