import React, {useEffect} from 'react';


// background images (not being used)
// import KesavPic1 from '../../assets/kesav-pic-1.jpeg'
// import KesavPic2 from '../../assets/kesav-pic-2.jpeg'
// import KesavPic3 from '../../assets/kesav-pic-3.jpeg'
// import KesavPic4 from '../../assets/kesav-pic-4.jpeg'

import BackgroundImage1 from '../../assets/background-image.jpg'
import GitHubICon from '../../assets/github-icon.png'   
import LinkedInIcon from '../../assets/linkedin-icon.png'

import { HomePageContainer, LandingContainer, LinksContainer } from './HomePage.styles';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant"
       });
    }, [])

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
            </LandingContainer>
        </HomePageContainer>
    )
}


export default HomePage