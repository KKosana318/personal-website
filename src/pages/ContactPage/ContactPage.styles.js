import styled from 'styled-components'

export const ContactPageContainer = styled.div`
    height: ${window.innerHeight - 70}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 80px;
        font-weight: 300;
        margin-bottom: 10px;
    }
`

export const ContactMethodsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
`