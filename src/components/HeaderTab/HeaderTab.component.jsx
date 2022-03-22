import React from 'react';
import { useNavigate } from 'react-router-dom';

import {HeaderTabContainer} from './HeaderTab.styles';

const HeaderTab = ({children, active, flip}) => {
    let navigate = useNavigate()
    let navLocation = children.toLowerCase().replaceAll(' ', '-')
    navLocation = navLocation === 'home' ? '' : navLocation // Home button should route to index not /home

    return (
        <HeaderTabContainer active={active} flip={flip} onClick={() => navigate(`${navLocation}`)}>
            {children}
        </HeaderTabContainer>
    )
}

export default HeaderTab