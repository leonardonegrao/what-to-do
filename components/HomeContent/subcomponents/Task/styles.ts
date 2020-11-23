import styled from 'styled-components'

export const Container = styled.div`
    height: 80px;
    width: 927px;

    border: 1px solid rgba(51, 51, 51, 0.15);
    border-radius: 24px;

    padding: 19px 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    margin: 20px 0;

    .task-title {
        margin-bottom: 8px;
    }

    .description {
        color: #333333;
        opacity: .5;

        font-size: 12px;
    }

    svg:hover {
        cursor: pointer;
    }

    svg + svg {
        margin-left: 20px;
    }
`