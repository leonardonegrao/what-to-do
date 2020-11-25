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

export const EditingContainer = styled.div`
    height: 80px;
    width: 927px;

    margin: 20px 0;

    border: 1px solid rgba(51, 51, 51, 0.15);
    border-radius: 24px;

    display: flex;

    &:focus-within {
        border-color: #4948C0;
    }

    form {
        width: 100%;
    }

    input {
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 24px;

        padding-left: 24px;
        font-size: 24px;
        color: #333333;
        
        &::placeholder {
            color: #333333, 50%;
        }
    }

    overflow: hidden;
`

export const EditTaskButton = styled.button`
    height: 100%;
    width: 80px;
    background-color: #4948C0;
    display: flex;
    justify-content: center;
    align-items: center;

    &.cancel {
        background-color: #AC4345;

        &:hover {
            background-color: #AB3234;
        }
    }

    &:hover {
         background-color: #504FC6;
    }

    svg {
        color: #FAFAFA;
    }
`