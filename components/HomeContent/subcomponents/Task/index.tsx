import { FiStar, FiTrash } from 'react-icons/fi'
import { Container } from './styles'

interface TaskProps {
    task: {
        title: string
        date: string
        group?: string
        isImportant: boolean
    }
    onRemove: Function
}

function Task({ task, onRemove }: TaskProps): JSX.Element {
    return (
        <Container>
            <div>
                <div className="label" />

                <p className="task-title">
                    {task.title}
                </p>

                <p className="description">{task.group ? task.group : ''} - {task.date}</p>
            </div>

            <div>
                <FiStar size={20} color={'#4948C0'} fill={'#4948C0'} fillOpacity={task.isImportant ? 1 : 0} />
                <FiTrash size={20} color={'#AC4345'} onClick={() => onRemove(task.title)} />
            </div>

        </Container>
    )
}

export default Task