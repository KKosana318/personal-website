import React, {useEffect} from 'react';

import WebsiteCard from '../../components/WebsiteCard/WebsiteCard.component';

import ProjectData from './PROJECT_DATA'

import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'
import CodeBackground from '../../assets/code-background.jpg'

import {ServicesPortfolioPageContainer, LandingContainer, DownArrowContainer, TopTextContainer, PastWorkContainer, PastWorkH1, WebsiteCardsContainer} from './ServicesPortfolioPage.styles'

const ServicesPortfolioPage = () => {

    useEffect(() => {
        window.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant"
       });
   }, [])

    const scrollToAboutMe = () => {
        document.getElementById('services-portfolio-past-work-container').scrollIntoView();
    }

    return (
        <ServicesPortfolioPageContainer>
            <LandingContainer background={CodeBackground}> 
                <TopTextContainer>
                    <h1>Past Work</h1>
                </TopTextContainer>
                <DownArrowContainer>
                    <DownArrow onClick={scrollToAboutMe}/>
                </DownArrowContainer>
            </LandingContainer>
            <PastWorkContainer id='services-portfolio-past-work-container'>
                <PastWorkH1>Past Work</PastWorkH1>
                <br />
                <WebsiteCardsContainer>
                    {ProjectData.map(({id, ...otherProps}) => 
                        <WebsiteCard key='id' {...otherProps} />
                    )}
                </WebsiteCardsContainer>
            </PastWorkContainer>
        </ServicesPortfolioPageContainer>
    )
}

export default ServicesPortfolioPage
