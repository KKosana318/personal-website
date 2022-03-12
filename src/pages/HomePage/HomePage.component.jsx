import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

// background images (not being used)
// import KesavPic1 from '../../assets/kesav-pic-1.jpeg'
// import KesavPic2 from '../../assets/kesav-pic-2.jpeg'
// import KesavPic3 from '../../assets/kesav-pic-3.jpeg'
// import KesavPic4 from '../../assets/kesav-pic-4.jpeg'
import GitHubICon from '../../assets/github-icon.png'   
import LinkedInIcon from '../../assets/linkedin-icon.png'
import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'

import { HomePageContainer, LandingContainer, LinksContainer, DownArrowContainer, AboutMeContainer } from './HomePage.styles';

const HomePage = () => {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <HomePageContainer>
            <LandingContainer>
                <h1>I'm Kesav Kosana.</h1>
                <h2>I'm studying Computer Science at UCLA, and I also do freelance web development.</h2>
                <LinksContainer>
                    <a href='https://github.com/KKosana318/' target="_blank" rel="noopener noreferrer">
                        <img to='' height='30px' src={GitHubICon} alt='GitHub' />
                    </a>
                    <a href="https://linkedin.com/in/kesavkosana" target="_blank" rel="noopener noreferrer">
                        <img height='30px' src={LinkedInIcon} alt='LinkedIn' />
                    </a>
                </LinksContainer>
                <DownArrowContainer>
                    <DownArrow onClick={executeScroll}/>
                </DownArrowContainer>
            </LandingContainer>
            <AboutMeContainer ref={myRef}>
                About me section
            </AboutMeContainer>
        </HomePageContainer>
    )
}


export default HomePage