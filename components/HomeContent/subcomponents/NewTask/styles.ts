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
    width: 927px;

    margin-top: 20px;
    padding: 20px;

    .react-calendar {
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid rgba(51, 51, 51, 0.15);
    }

    .react-calendar__navigation {
        background-color: #4948C0;
        margin-bottom: 0;
        
        button {
            display: flex;
            justify-content: center;

            color: #FAFAFA;
            font-size: 16px;
            font-family: 'Roboto';
        }

        button:hover {
            background-color: #504FC6;
        }
    }

    .react-calendar__month-view__weekdays {
        background-color: #4948C0;
        color: #FAFAFA;
        font-family: 'Roboto';
    }

    .react-calendar__month-view__days {
        
        button {
            display: flex;
            justify-content: center;
            border-radius: 24px;
        }

        button.react-calendar__month-view__days__day {
            abbr {
                color: #333333;
            }
        }

        button.react-calendar__month-view__days__day--weekend {
            abbr {
                color: #4948C0;
            }
        }

        button.react-calendar__month-view__days__day--neighboringMonth {
            abbr {
                color: rgba(51, 51, 51, 0.5);
            }
        }

        button.react-calendar__tile--now {
            background-color: rgba(51, 51, 51, 0.5);
        }

        button.react-calendar__tile--rangeBothEnds {
            background-color: rgba(73, 72, 192, 0.5);
        }
    }
`
