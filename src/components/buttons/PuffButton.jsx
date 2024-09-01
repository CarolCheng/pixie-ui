// src/components/PuffButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PuffButton.module.css';
import { useTheme } from '@/utils/ThemeProvider';

const PuffButton = ({
    children,
    state = 'normal',
    onClick = () => { },
    disabled = false,
    ...props
}) => {
    const { fontFamily, fontWeight, colors } = useTheme();  // Get font and weight from the theme
    const svgUrl = require('@assets/buttons/dot.svg');

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
            {...props} // Pass additional properties to the button element
        >
            {children}
        </button >

    );
};

PuffButton.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['dot', 'circle', 'active', 'disabled']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};


export default PuffButton;