import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    height: ${window.innerHeight - 70}px;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-behavior: none;
    /* border: 1px solid red; */
    overflow-x: hidden;

    @media(max-width: 1400px) {
        height: 1000px;
    }
`

export const AboutMeImageAndInfoContainer = styled.div`
    max-height: 400px;
    display: flex;
    justify-content: center;
    gap: 5%;
    /* border: 1px solid red; */

    img {
        height: auto;
        width: auto;
        max-height: 400px;
        max-width: 400px;
    }

    @media(max-width: 1400px) {
        min-height: 100%;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    @media(max-width: 800px) {
        padding-top: 70px;

        img {
            max-width: 200px;
            max-height: 200px;
        }
    }
`

export const AboutMeInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 40%;
    /* border: 1px solid red; */
    
    
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

    @media(max-width: 1400px) {
        flex-direction: column;
        align-items: center;
        max-width: 70%;

        p {
            text-align: center;
        }
    }
`

export const AboutMeButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-top: auto;
    /* border: 1px solid red; */

    @media(max-width: 1400px) {
        margin-top: 20px;
    }

    @media(max-width: 500px) {
        flex-direction: column;
    }
`