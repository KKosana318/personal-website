import React from 'react';

import {ReactComponent as LinkIcon} from '../../assets/open-in-new.svg'
import IntellegymImage from '../../assets/intellegym-website.png'
import CrwnImage from '../../assets/crwn-website.png'
import SuperiorImage from '../../assets/superior-website.png'
import PersonalImage from '../../assets/personal-website.png'

import { WebsiteCardContainer, HeaderContainer, BodyTextContainer } from './WebsiteCard.styles';

const WebsiteCard = ({title, url, description, technologies}) => {
    let image = IntellegymImage
    if(title === "CRWN Clothing") 
        image = CrwnImage
    else if(title === "Superior Energy Group") 
        image = SuperiorImage
    else if(title === "Personal Website")
        image = PersonalImage


    return (
        <WebsiteCardContainer>
            <HeaderContainer>
                <h1>{title}</h1>
                <a href={url} target="_blank" rel='noreferrer'>
                    <LinkIcon /> 
                </a>
            </HeaderContainer>
            <img src={image} alt='intellegym' />
            <BodyTextContainer>
                <p><b>Description: </b>{description} </p>
                <p><b>Technologies used: </b>{technologies}</p>
            </BodyTextContainer>
        </WebsiteCardContainer>
    )
}

export default WebsiteCard