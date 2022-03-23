import styled from 'styled-components'

export const ServicesPortfolioPageContainer = styled.div`
    
`

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: url(${props => props.background});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    
    align-items: center;
    justify-content: center;    
`

export const DownArrowContainer = styled.div`
    margin-top: auto;
    margin-bottom: 15px;
    &:hover {
        cursor: pointer;
    }
`

export const TopTextContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h1 {
        font-size: 80px;
        font-weight: 300;
        margin-top: 22%;
        margin-bottom: 10px;
    }

    p {
        font-size: 30px;
        font-weight: 300;
        margin: 0;
        text-align: center;
    }
`

export const PastWorkContainer = styled.div`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PastWorkH1 = styled.h1`
    font-size: 60px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 15px;
`

export const PastWorkP = styled.p`
    width: 70%;
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
`

export const WebsiteCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
    gap: 40px;
`