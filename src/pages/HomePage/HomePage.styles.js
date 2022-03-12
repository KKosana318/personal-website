import styled from 'styled-components'

export const HomePageContainer = styled.div`
    /* border: 1px solid red; */
`

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    /* background: url(${props => props.background}); */
    /* background-size: cover; */
    background-image: linear-gradient(rgba(0, 40, 60), rgba(0,51,93), rgba(0, 40, 70));
    color: white;
    text-align: center;

    
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
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 15%;
`

export const DownArrowContainer = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const AboutMeContainer = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`