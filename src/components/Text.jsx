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