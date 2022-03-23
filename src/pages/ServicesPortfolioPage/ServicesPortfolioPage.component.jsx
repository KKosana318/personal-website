import React, {useEffect, useState} from 'react';

import WebsiteCard from '../../components/WebsiteCard/WebsiteCard.component';

import ProjectData from './PROJECT_DATA'

import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'
import CodeBackground from '../../assets/code-background.jpg'

import {ServicesPortfolioPageContainer, LandingContainer, DownArrowContainer, TopTextContainer, PastWorkContainer, PastWorkH1, PastWorkP, WebsiteCardsContainer} from './ServicesPortfolioPage.styles'

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
                    <h1>What I Do</h1>
                    <p>I develop websites for mainly <b>small businesses</b> and <b>individuals</b> at an incredibly <b>fast</b> pace and for an <b>affordable</b> cost.</p>
                </TopTextContainer>
                <DownArrowContainer>
                    <DownArrow onClick={scrollToAboutMe}/>
                </DownArrowContainer>
            </LandingContainer>
            <PastWorkContainer id='services-portfolio-past-work-container'>
                <PastWorkH1>Past Work</PastWorkH1>
                <PastWorkP>I develop websites using a variety of technologies including Wix, SquareSpace, WordPress, Python, and React.js (a programming language used to build websites by companies such as Facebook).</PastWorkP>
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