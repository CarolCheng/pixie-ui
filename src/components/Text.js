import React from 'react';
import { FontFamilies } from './fontFamilies';
import { FontWeights } from './fontWeights';

import '../fonts/NaikaiFont/200.css';
import '../fonts/NaikaiFont/400.css';
import '../fonts/NaikaiFont/400.css';
import '../fonts/NaikaiFont/600.css';
import '../fonts/NaikaiFont/700.css';

import '../fonts/open-huninn/400.css';

const Text = ({ children, className = '', style = {}, fontFamily = FontFamilies.NAIKAI, weight = FontWeights.REGULAR }) => {
    return (
        <p className={className} style={{ fontFamily, fontWeight: weight, ...style }}>
            {children}
        </p>
    );
};

export default Text;
