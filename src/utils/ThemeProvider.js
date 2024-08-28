import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontFamilies } from '../constants/fontFamilies';
import { FontWeights } from '../constants/fontWeights';
import { fontConfigs } from '../constants/fontConfigs';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, fontFamily = FontFamilies.NAIKAI, fontWeight = FontWeights.REGULAR }) => {
    useEffect(() => {
        const fontConfig = fontConfigs[fontFamily]?.[fontWeight];

        if (!fontConfig) {
            console.error(`Font configuration not found for ${fontFamily} with weight ${fontWeight}`);
            return;
        }
        const { woff2, woff } = fontConfig;

        const fontFace = `
          @font-face {
            font-family: '${fontFamily}';
            src: url('${woff2}') format('woff2'),
                 url('${woff}') format('woff');
            font-weight: ${fontWeight};
            font-style: normal;
          }
        `;

        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(fontFace));
        document.head.appendChild(style);

        // 清理舊的樣式
        return () => {
            document.head.removeChild(style);
        };
    }, [fontFamily, fontWeight]);

    const theme = {
        fontFamily,
        fontWeight,
    };

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};


ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
};

export const useTheme = () => useContext(ThemeContext);
