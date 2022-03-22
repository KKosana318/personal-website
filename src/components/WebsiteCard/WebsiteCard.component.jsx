import React from 'react';

import {ReactComponent as LinkIcon} from '../../assets/open-in-new.svg'

import { WebsiteCardContainer, HeaderContainer } from './WebsiteCard.styles';

const WebsiteCard = () => {

    return (
        <WebsiteCardContainer>
            <HeaderContainer>
                <h1>Intellegym</h1>
                <LinkIcon />
            </HeaderContainer>
        </WebsiteCardContainer>
    )
}

export default WebsiteCard