import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    height: ${window.innerHeight - 190}px;
    padding-top: 120px;
    display: flex;
    align-items: top;
    justify-content: center;
    scroll-behavior: none;
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