import React, {useEffect} from 'react';

import WebsiteCard from '../../components/WebsiteCard/WebsiteCard.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';

import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'
import CodeBackground from '../../assets/code-background.jpg'

import {ServicesPortfolioPageContainer, LandingContainer, DownArrowContainer, TopTextContainer, PastWorkContainer, WebsiteCardsContainer} from './ServicesPortfolioPage.styles'

const ServicesPortfolioPage = () => {
    useEffect(() => {
        window.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant"
       });
   }, [])

    const scrollToAboutMe = () => {
        document.getElementById('homepage-aboutme-container').scrollIntoView();
    }

    return (
        <ServicesPortfolioPageContainer>
            <LandingContainer background={CodeBackground}> 
                <TopTextContainer>
                    <h1>What I do</h1>
                    <p>I develop websites for mainly <b>small businesses</b> and <b>individuals</b> at an incredibly <b>fast</b> pace and for an <b>affordable</b> cost.</p>
                </TopTextContainer>
                <DownArrowContainer>
                    <DownArrow onClick={scrollToAboutMe}/>
                </DownArrowContainer>
            </LandingContainer>
            <PastWorkContainer>
                <h1>Past work</h1>
                <p>I develop websites using a variety of technologies including Wix, SquareSpace, WordPress, Python, and React.js (a programming language used to build websites by companies such as Facebook).</p>
                <br />
                <WebsiteCardsContainer>
                    <WebsiteCard />
                    <WebsiteCard />
                    <WebsiteCard />
                    <WebsiteCard />
                </WebsiteCardsContainer>
            </PastWorkContainer>
        </ServicesPortfolioPageContainer>
    )
}

export default ServicesPortfolioPage