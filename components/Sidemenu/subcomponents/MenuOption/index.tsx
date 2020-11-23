import { IconType } from 'react-icons'
import { Container } from './styles'

interface MenuOptionProps {
    Icon?: IconType
    title: string
    status: boolean
}

function MenuOption({ title, status, Icon }: MenuOptionProps): JSX.Element {
    return (
        <Container className={status ? 'active' : 'inactive'}>
            <Icon size={24} />
            <p className="title">{title}</p>
        </Container>
    )
}

export default MenuOption