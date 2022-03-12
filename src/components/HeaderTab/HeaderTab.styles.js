import styled from 'styled-components'

export const HeaderTabContainer = styled.div`
    font-size: 16px;
    font-weight: ${({active}) => active ? `600` : `400`};
    color: ${({active}) => active ? `white` : `lightgrey`};
    border-bottom: ${({active}) => active ? `1px solid white` : ``};
    

    &:hover {
        cursor: pointer;
        color: white;
        /* font-weight: 600; */
    }
`