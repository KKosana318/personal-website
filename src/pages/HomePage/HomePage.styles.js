import styled from 'styled-components'

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

