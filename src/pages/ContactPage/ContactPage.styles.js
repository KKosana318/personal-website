import styled from 'styled-components'

export const ContactPageContainer = styled.div`
    height: ${window.innerHeight - 70}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;

    h1 {
        font-size: 60px;
        font-weight: 300;
        margin: 0;
        max-width: 80%;
    }

    h2 {
        font-size: 25px;
        color: darkgray;
        margin: 0;
        margin-bottom: 40px;
        font-weight: 300;
        max-width: 80%;
    }

    @media(max-width: 800px) {
        padding-top: 70px; 

        h1 {
            font-size: 40px;
        }

        h2 {
            font-size: 20px;
        }
    }
`

export const ContactMethodsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;

    @media(max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    } 
`

export const ContactMethodContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid red; */
    width: 250px;
    gap: 10px;


    p {
        font-size: 20px;
        margin: 0;
    }
`

export const SocialsOuterContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
        font-size: 30px;
        margin: 0;
    }
`

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    img {
        height: 40px;
        width: 40px;
    }
`