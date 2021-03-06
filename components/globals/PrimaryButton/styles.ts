import styled from 'styled-components'

export const Container = styled.button`
    margin-left: 20px;
    
    height: 40px;
    padding: 0 36px;

    background-color: #FAFAFA;
    color: #4948C0;
    border-radius: 16px;

    display: flex;
    align-items: center;

    p {
        font-weight: 600;
    }

    svg {
        margin-right: 16px;
    }

    transition: box-shadow .7s;

    &:hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
`