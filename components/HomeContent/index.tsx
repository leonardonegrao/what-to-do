import { useState } from 'react'
import NewTask from './subcomponents/NewTask'
import Task from './subcomponents/Task'
import { Container } from './styles'

interface ITask {
    title: string
    group?: string
    date: Date
    isImportant: boolean,
    status: boolean
}

function HomeContent(): JSX.Element {
    const [tasks, setTasks] = useState<ITask[]>([])

    function addTask(task: ITask) {
        setTasks([...tasks, task])
    }

    function removeTask(taskTitle: string) {
        const filteredTasks = tasks.filter(task => task.title !== taskTitle)
        
        console.log(filteredTasks)

        setTasks([...filteredTasks])
    }

    return (
        <Container>
            <h1>Tasks</h1>

            <NewTask onSubmit={addTask} />
            {tasks.map((task, index) => <Task key={index} task={task} onRemove={removeTask} />)}
        </Container>
    )
}

export default HomeContent