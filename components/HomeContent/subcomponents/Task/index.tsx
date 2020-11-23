import { useState, useEffect } from 'react'
import { FiStar, FiTrash } from 'react-icons/fi'
import { Container } from './styles'

interface Task {
    title: string
    date: string
    group?: string
    isImportant: boolean
}

interface TaskProps {
    task: Task
    onRemove: Function
}

function Task({ task, onRemove }: TaskProps): JSX.Element {
    const [taskState, setTaskState] = useState<Task>({ title: '', date: '', isImportant: false })

    useEffect(() => {
        setTaskState(task)
    }, [])

    return (
        <Container>
            <div>
                <div className="label" />

                <p className="task-title">
                    {taskState.title}
                </p>

                <p className="description">
                    {taskState.group ? `${taskState.group} - ` : 'Não atribuída - '} {taskState.date}
                </p>
            </div>

            <div>
                <FiStar
                    size={20}
                    color={'#4948C0'}
                    fill={'#4948C0'}
                    fillOpacity={taskState.isImportant ? 1 : 0}
                    onClick={() => setTaskState({ ...taskState, isImportant: !taskState.isImportant })}
                />
                <FiTrash size={20} color={'#AC4345'} onClick={() => onRemove(task.title)} />
            </div>

        </Container>
    )
}

export default Task