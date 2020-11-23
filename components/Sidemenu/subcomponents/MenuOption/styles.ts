import styled from 'styled-components'

export const Container = styled.button`
    padding: 12px 0;
    width: 100%;

    &.active {
        background-color: #5656CC;
    }

    &.inactive {
        background-color: #4948C0;
    }

    * {
        color: #FAFAFA;
    }

    .title {
        font-size: 20px;
        margin: 0;
    }

    svg {
        margin: 0 20px;
    }

    &:hover {
        background-color: #5656CC;
    }
`