import { FiPlusCircle } from 'react-icons/fi'
import MenuGroups from './subcomponents/MenuGroups'
import PrimaryButton from '../PrimaryButton'
import { Container } from './styles'

function Sidemenu(): JSX.Element {
    return (
        <aside>
            <Container>
                <h1 className="title">What <b>To Do</b>?</h1>

                <h2 className="date">Sábado, 21 de Novembro</h2>

                <MenuGroups />

                <PrimaryButton Icon={FiPlusCircle} content="Novo grupo" />
            </Container>
        </aside>
    )
}

export default Sidemenu