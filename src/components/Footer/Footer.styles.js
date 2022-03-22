import styled from 'styled-components'

export const FooterContainer = styled.div`
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 2%;
    color: rgb(168, 168, 168);
    font-size: 16px;    
`

export const LeftContainer = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const RightContainer = styled.div` 
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    &:hover {
        cursor: pointer;
    }
`