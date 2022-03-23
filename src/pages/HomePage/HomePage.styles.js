import styled from 'styled-components'

export const HomePageContainer = styled.div`
    /* border: 1px solid red; */
`

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    text-align: center;
    background: url(${props => props.background});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    
    h1 {
        margin: 0;
        font-size: 80px;
        font-weight: 300;
    }

    h2 {
        font-weight: 300;
        margin-top: 10px;
        font-size: 30px;
        width: 90%;
    }

    image {
        opacity: 10%;
    }

    @media(max-width: 800px) {
        h1 {
            font-size: 50px;
        }

        h2 {
            font-size: 20px;
        }
    }
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 20px;
    /* margin-bottom: 50px; */
`

