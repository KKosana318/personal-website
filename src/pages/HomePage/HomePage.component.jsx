import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton.component'

// background images (not being used)
// import KesavPic1 from '../../assets/kesav-pic-1.jpeg'
// import KesavPic2 from '../../assets/kesav-pic-2.jpeg'
// import KesavPic3 from '../../assets/kesav-pic-3.jpeg'
// import KesavPic4 from '../../assets/kesav-pic-4.jpeg'

import BackgroundImage1 from '../../assets/background-image.jpg'
import BackgroundImage2 from '../../assets/background-image-2.jpeg'
import Headshot from '../../assets/headshot.png'
import GitHubICon from '../../assets/github-icon.png'   
import LinkedInIcon from '../../assets/linkedin-icon.png'
import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'

import { HomePageContainer, LandingContainer, LinksContainer, DownArrowContainer, AboutMeContainer, AboutMeImageAndInfoContainer, AboutMeInfoContainer, AboutMeButtonsContainer } from './HomePage.styles';

const HomePage = () => {
    let navigate = useNavigate()

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
        <HomePageContainer>
            <LandingContainer background={BackgroundImage1}>
                <h1>I'm Kesav Kosana.</h1>
                <h2>I'm studying Computer Science at UCLA and I do freelance web development.</h2>
                <LinksContainer>
                    <a href='https://github.com/KKosana318/' target="_blank" rel="noopener noreferrer">
                        <img to='' height='30px' src={GitHubICon} alt='GitHub' />
                    </a>
                    <a href="https://linkedin.com/in/kesavkosana" target="_blank" rel="noopener noreferrer">
                        <img height='30px' src={LinkedInIcon} alt='LinkedIn' />
                    </a>
                </LinksContainer>
                <DownArrowContainer>
                    <DownArrow onClick={scrollToAboutMe}/>
                </DownArrowContainer>
            </LandingContainer>
            <AboutMeContainer id="homepage-aboutme-container">
                <AboutMeImageAndInfoContainer>
                    <img src={Headshot}  alt='headshot' />
                    <AboutMeInfoContainer>
                        <h2>About me</h2>
                        <p>My name is Kesav Kosana and I'm currently a freshman at UCLA studying Computer Science.<br /><br />On the side, I am a freelance web developer and I also work on a lot of personal projects related to both web development and other areas of software engineering. I am hoping to eventually work as a software engineer at a technology startup. <br /><br />I have experience with Java, C++, Python, React.js, and SQL databases, along with a solid understanding of data structures and algorithms.<br /><br />In my free time, I enjoy playing basketball, going to the gym, hanging out with my friends, and listening to music.</p>
                        <AboutMeButtonsContainer>
                            <CustomButton onClick={() => navigate('web-development')}>Website services</CustomButton>
                            <CustomButton onClick={() => navigate('past-work')}>See past work</CustomButton>
                        </AboutMeButtonsContainer>
                    </AboutMeInfoContainer>
                </AboutMeImageAndInfoContainer> 
            </AboutMeContainer>
        </HomePageContainer>
    )
}


export default HomePage