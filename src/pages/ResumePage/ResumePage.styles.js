import styled from 'styled-components'

export const ResumePageContainer = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 60px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 40px;
        }
    }
`