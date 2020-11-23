import styled from 'styled-components'
import { Container as PrimaryButton } from '../PrimaryButton/styles'

export const Container = styled.div`
    height: 100vh;
    width: 453px;

    background-color: #4948C0;
    color: #FAFAFA;

    > .title {
        padding-top: 24px;
        padding-left: 20px;
    }

    .date {
        margin-top: 16px;
        margin-bottom: 64px;
        padding-left: 20px;
    }

    ${PrimaryButton} {
        margin-left: 20px;
    }
`