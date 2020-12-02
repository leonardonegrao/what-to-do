import { FiSun, FiStar, FiList, FiHelpCircle } from 'react-icons/fi'
import MenuOption from '../MenuOption'
import { Container } from './styles'

function MenuGroups(): JSX.Element {
    return (
        <Container>
            <MenuOption
                title="Hoje"
                status={true}
                Icon={FiSun}
            />
            <MenuOption
                title="Importante"
                status={false}
                Icon={FiStar}
            />
            <MenuOption
                title="Não atribuídas"
                status={false}
                Icon={FiHelpCircle}
            />
            <MenuOption
                title="Udemy"
                status={false}
                Icon={FiList}
            />
        </Container>
    )
}

export default MenuGroups