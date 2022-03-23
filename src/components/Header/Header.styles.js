import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    top: 0; 
    padding: 0 3% 0 1%;
    width: 96%;
    box-shadow: ${({flip}) => flip ? `5px 0px 15px rgba(189, 189, 189, 0.6)` : ''};
    background-color: ${({flip}) => flip ? `white` : ``}
`

export const InitialsContainer = styled.h1`
    font-size: 24px;
    align-items: center;
    color: ${({flip}) => flip ? `rgba(0,51,93)` : `white`};
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }

`

export const OptionsContainer = styled.div`
    display: flex;
    gap: 30px;
    height: 100%;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
        height: 150px;
        gap: 3px;
        position: absolute;
        top: 20px;
        right: 0;
        align-items: flex-end;
        padding-right: 10px;
        
    }
`

export const OptionsNoIconContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${({flip}) => flip ? `white` : ``};
    box-shadow: ${({flip}) => flip ? `0px 0px 15px rgba(189, 189, 189, 0.6)` : ''};
`