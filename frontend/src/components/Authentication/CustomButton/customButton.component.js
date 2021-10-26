import React from 'react';

import './customButton.style.scss';
const CustomButton = ({children, ...otherProps}) => (
    <div className ='custom-button' {...otherProps}>
    {
        children
    }
    </div>
)

export default CustomButton;