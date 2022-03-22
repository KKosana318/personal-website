import styled, {keyframes} from 'styled-components'

export const HomePageContainer = styled.div`
    /* border: 1px solid red; */
`

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    color: white;
    text-align: center;
    background: url(${props => props.background});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: linear-gradient(rgba(0, 40, 60), rgba(0,51,93), rgba(0, 40, 70)); */

  
    
    h1 {
        margin: 0;
        margin-top: 18%;
        font-size: 80px;
        font-weight: 300;
    }

    h2 {
        font-weight: 300;
        margin-top: 10px;
        font-size: 30px;
    }

    image {
        opacity: 10%;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 20px;
    /* margin-bottom: 50px; */
`

export const DownArrowContainer = styled.div`
    margin-top: auto;
    margin-bottom: 15px;
    &:hover {
        cursor: pointer;
    }
`

export const AboutMeContainer = styled.div`
    padding: 8% 0;
    display: flex;
    align-items: top;
    justify-content: center;

    
`

export const AboutMeImageAndInfoContainer = styled.div`
    max-height: 400px;
    display: flex;
    justify-content: center;
    gap: 5%;

    img {
        height: auto;
        width: auto;
        max-height: 400px;
    }
`

export const AboutMeInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 40%;
    
    h2 {
        margin: 0;
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 15px;
        font-weight: 300;

    }

    p {
        font-size: 16px;
        /* border: 1px solid red; */
        font-weight: 300;
        margin: 0;
    }
`

export const AboutMeButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-top: auto;
`