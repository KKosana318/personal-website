import styled from 'styled-components'

export const CustomButtonContainer = styled.button`
    font-family: 'Nunito', sans-serif !important;
    width: 200px;
    min-height: 40px;
    background: rgba(0,51,93);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 15px;

    &:hover {
        background: none;
        border: 1px solid rgba(0,51,93);
        color: rgba(0,51,93);
        cursor: pointer;
    }
`