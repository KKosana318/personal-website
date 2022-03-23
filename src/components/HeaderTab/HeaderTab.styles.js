import styled from 'styled-components'

export const HeaderTabContainer = styled.div`
    font-size: 16px;
    font-weight: ${({active}) => active ? `600` : `400`};
    color: ${({active, flip}) => active && flip ? `rgba(0,51,93)` : (active ? 'white' : `grey`)};
    border-bottom: ${({active, flip, small}) => small ? '' : active && flip ? `1px solid rgba(0,51,93)` : (active ? '1px solid white' : ``)};
    

    &:hover {
        cursor: pointer;
        color: ${({active, flip}) => !active && flip ? `rgba(0,51,93)` : (active ? '' : `white`)};
        border-bottom: ${({active, flip, small}) => small ? '' : !active && flip ? `` : (active ? '' : ``)};
        font-weight: 600;
    }
`