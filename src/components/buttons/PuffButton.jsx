// src/components/PuffButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PuffButton.module.css';
import { useTheme } from '../../theme/ThemeProvider';

const PuffButton = ({
    children,
    state = 'normal',
    onClick = () => { },
    disabled = false
}) => {
    const { fontFamily, fontWeight, colors } = useTheme();  // 獲取主題中的字體和字重
    const svgUrl = require('@assets/dot.svg');

    const buttonStyle = {
        fontFamily,
        fontWeight,
        '--primary-color': colors.brandColors.primary,
        '--secondary-color': colors.brandColors.secondary,
        '--accent1-color': colors.brandColors.accent1,
        '--disable-color': colors.uiColors.disable,
        '--text-color-dark': colors.grayscale.dark,
        '--text-color-grey-dark': colors.grayscale.greyDark,
        '--after-content': `url(${svgUrl})`,
    };
    console.log(buttonStyle)
    return (
        <button
            className={styles.button}
            style={buttonStyle}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button >

    );
};

PuffButton.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.oneOf(['normal', 'hover', 'active', 'disabled']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};


export default PuffButton;