import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton.component';

import Headshot from '../../assets/headshot.png'

import {AboutMeContainer, AboutMeImageAndInfoContainer, AboutMeInfoContainer, AboutMeButtonsContainer} from './AboutPage.styles'

const AboutPage = () => {
    let navigate = useNavigate()

    return (
        <AboutMeContainer id="homepage-aboutme-container">
            <AboutMeImageAndInfoContainer>
                <img src={Headshot}  alt='headshot' />
                <AboutMeInfoContainer>
                    <h2>About me</h2>
                    <p>My name is Kesav Kosana and I'm currently a freshman at UCLA studying Computer Science.<br /><br />On the side, I am a freelance web developer and I also work on a lot of personal projects related to both web development and other areas of software engineering. I am hoping to eventually work as a software engineer at a technology startup. <br /><br />I have experience with Java, C++, Python, React.js, and SQL databases, along with a solid understanding of data structures and algorithms.<br /><br />In my free time, I enjoy playing basketball, going to the gym, hanging out with my friends, and listening to music.</p>
                    <AboutMeButtonsContainer>
                        <CustomButton onClick={() => navigate('services-+-portfolio')}>Services & portfolio</CustomButton>
                        <a href={'https://drive.google.com/file/d/1zeaSNcsCjvFl0jKzFaRXWbrzDm5BQtK6/view?usp=sharing'} target='_blank' rel='noreferrer'>
                            <CustomButton >Download Resume</CustomButton>
                        </a>
                    </AboutMeButtonsContainer>
                </AboutMeInfoContainer>
            </AboutMeImageAndInfoContainer> 
        </AboutMeContainer>
    )
}

export default AboutPage