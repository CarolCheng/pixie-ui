// src/components/Text.jsx
import React from 'react';
import { useTheme } from '../utils/ThemeProvider';

const Text = ({ children, className = '', style = {} }) => {
    const { fontFamily, fontWeight } = useTheme();  // 獲取主題中的字體和字重

    return (
        <p className={className} style={{ fontFamily, fontWeight, ...style }}>
            {children}
        </p>
    );
};

export default Text;

import React from 'react';
import './fonts/naikai-font.css'; // 引入 CSS 文件

const Text = () => {
    return (
        <div>
            <h1 style={{ fontFamily: 'NaikaiFont', fontWeight: 'normal' }}>這是 NaikaiFont 字體</h1>
            <p style={{ fontFamily: 'NaikaiFont', fontWeight: 'bold' }}>這是 NaikaiFont 粗體字</p>
        </div>
    );
};

export default Text;