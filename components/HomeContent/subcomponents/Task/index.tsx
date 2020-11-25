import { useState, useEffect, FormEvent } from 'react'
import { FiX, FiCheck, FiStar, FiTrash, FiEdit } from 'react-icons/fi'
import { Container, EditingContainer, EditTaskButton } from './styles'

interface Task {
    title: string
    date: Date
    group?: string
    isImportant: boolean
}

interface TaskProps {
    task: Task
    onRemove: Function
}

function Task({ task, onRemove }: TaskProps): JSX.Element {
    const [taskState, setTaskState] = useState<Task>(task)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [editingTask, setEditingTask] = useState<Task>(taskState)

    function getDate(date: Date): string {
        return date.toLocaleString('pt-BR', {
            day: 'numeric',
            month: 'long',
        })
    }

    function handleEditing() {
        setIsEditing(!isEditing)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setTaskState({ ...editingTask })
        setIsEditing(false)
    }

    function handleCancel() {
        setIsEditing(false)

        setEditingTask({ ...taskState })
    }

    return (
        <>
            {!isEditing ? (
                <Container>
                    <div>
                        <div className="label" />

                        <p className="task-title">
                            {taskState.title}
                        </p>

                        <p className="description">
                            {taskState.group ? `${taskState.group} - ` : 'Não atribuída - '} {getDate(taskState.date)}
                        </p>
                    </div>

                    <div>
                        <FiEdit size={20} color={`#4948C0`} onClick={handleEditing} />
                        <FiStar
                            size={20}
                            color={'#4948C0'}
                            fill={'#4948C0'}
                            fillOpacity={taskState.isImportant ? 1 : 0}
                            onClick={() => setTaskState({ ...taskState, isImportant: !taskState.isImportant })}
                        />
                        <FiTrash size={20} color={'#AC4345'} onClick={() => onRemove(taskState.title)} />
                    </div>
                </Container>
            ) : (
                    <EditingContainer>
                        <form onSubmit={handleSubmit}>
                            <input
                                value={editingTask.title}
                                onChange={(event) => setEditingTask({ ...taskState, title: event.target.value })}
                                type="text"
                                name="title"
                            />
                        </form>
                        <EditTaskButton className="cancel" onClick={handleCancel}>
                            <FiX size={40} strokeWidth={1} onClick={() => { }} />
                        </EditTaskButton>
                        <EditTaskButton type="submit" onClick={handleSubmit}>
                            <FiCheck size={40} strokeWidth={1} />
                        </EditTaskButton>
                    </EditingContainer>
                )}
        </>
    )
}

export default Task