import React from 'react';

import {ReactComponent as EmailIcon} from '../../assets/email-icon.svg'
import {ReactComponent as PhoneIcon} from '../../assets/phone-icon.svg'

import InstagramIcon from '../../assets/instagram-icon-colored.jpg'
import LinkedInIcon from '../../assets/linkedin-icon-colored.png'
import GitHubIcon from '../../assets/github-icon-colored.png'
// import UpworkIcon from '../../assets/upwork-icon.png'
// import FreelancerIcon from '../../assets/freelancer-icon.svg'

import { ContactPageContainer, ContactMethodsContainer, ContactMethodContainer, SocialsOuterContainer, SocialsContainer} from './ContactPage.styles';

const ContactPage = () => {

    return (
        <ContactPageContainer>
            <h1>Contact Me</h1>
            <h2>For business or personal inquiries. Text me for fast response times!</h2>
            <ContactMethodsContainer>
                <ContactMethodContainer>
                    <PhoneIcon />
                    <p>216-848-6743</p>
                </ContactMethodContainer>
                <ContactMethodContainer>
                    <EmailIcon />
                    <p>kkosana33@gmail.com</p>
                </ContactMethodContainer>
            </ContactMethodsContainer>
            <SocialsOuterContainer>
                <p>Follow me online:</p>
                <SocialsContainer>
                    <a href='https://www.instagram.com/kesav_kosana/' target='_blank' rel='noreferrer'>
                        <img src={InstagramIcon} alt='Instagram' />
                    </a>
                    <a href='https://github.com/kkosana318' target='_blank' rel='noreferrer'>
                        <img src={GitHubIcon} alt='GitHub' />
                    </a>
                    <a href='https://linkedin.com/in/kesavkosana' target='_blank' rel='noreferrer'>
                        <img src={LinkedInIcon} alt='LinkedIn' />
                    </a>
                    {/* <a href='' target='_blank' rel='noreferrer'>
                        <img src={UpworkIcon} alt='Upwork' />
                    </a>
                    <a href='' target='_blank' rel='noreferrer'>
                        <img src={FreelancerIcon} alt='Freelancer' />
                    </a> */}
                </SocialsContainer>
            </SocialsOuterContainer>
        </ContactPageContainer>
    )
}

export default ContactPage