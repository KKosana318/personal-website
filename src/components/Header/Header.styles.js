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
    /* box-shadow: 5px 0px 15px rgba(189, 189, 189, 0.6); */
    /* background-color: white; */
    /* border: 2px solid red; */

`

export const InitialsContainer = styled.h1`
    font-size: 24px;
    align-items: center;
    color: white;
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
    /* border: 1px solid red; */
`