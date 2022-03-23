import styled from 'styled-components'

export const WebsiteCardContainer = styled.div` 
    width: 350px;
    max-width: 80%;
    height: 350px;
    box-shadow: 0px 1px 12px #cfcfcf;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;

    img {
        box-shadow: 0px 1px 12px #cfcfcf;
        max-height: 175px;
        width: auto;
        overflow: hidden;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    
    h1 {
        font-size: 30px;
        font-weight: 300;
        margin: 0;
        line-height: 40px;
    }

    @media(max-width: 650px) {
        h1 {
            font-size: 25px;
        }
    }
`

export const BodyTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    p {
        font-size: 16px;
        font-weight: 300;
        margin: 0;
    }

    @media(max-width: 650px) {
     {
        font-size: 12px;
    }
}
`