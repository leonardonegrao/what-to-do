import { useState } from 'react'
import NewTask from './subcomponents/NewTask'
import Task from './subcomponents/Task'
import { Container } from './styles'

interface Task {
    title: string
    group?: string
    date: string
    isImportant: boolean
}

function HomeContent(): JSX.Element {
    const [tasks, setTasks] = useState<Task[]>([])

    function addTask(task: Task) {
        setTasks([...tasks, task])
    }

    function removeTask(taskTitle: string) {
        const filteredTasks = tasks.filter(task => task.title !== taskTitle)

        setTasks([...filteredTasks])
    }

    return (
        <Container>
            <h1>Tarefas / Hoje</h1>

            <NewTask onSubmit={addTask} />
            {tasks.map((task, index) => <Task key={index} task={task} onRemove={removeTask} />)}
        </Container>
    )
}

export default HomeContent