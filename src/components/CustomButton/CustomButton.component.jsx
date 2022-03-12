import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({children}) => {
    return (
        <CustomButtonContainer>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;