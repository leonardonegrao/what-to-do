import styled from 'styled-components'

export const Container = styled.div`
    height: 80px;
    width: 927px;

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

export const NewTaskButton = styled.button`
    height: 100%;
    width: 80px;
    background-color: #4948C0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
         background-color: #504FC6;
    }

    svg {
        color: #FAFAFA;
    }
`

export const CalendarContainer = styled.div`
    width: 400px;
    height: 250px;

    position: absolute;
    left: 50vw;
    top: 30vh;
    z-index: 1;

    padding: 20px;
    background-color: #FFFFFF;
`