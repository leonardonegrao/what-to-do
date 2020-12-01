import { FiPlusCircle } from 'react-icons/fi'
import MenuGroups from './subcomponents/MenuGroups'
import PrimaryButton from '../PrimaryButton'
import { Container } from './styles'
import Logo from '../globals/Logo'

function Sidemenu(): JSX.Element {
    return (
        <aside>
            <Container>
                <h1 className="title">
                    <Logo logoColor="white" />
                </h1>

                <h2 className="date">Saturday, November 21st</h2>

                <MenuGroups />

                <PrimaryButton Icon={FiPlusCircle} content="New Group" />
            </Container>
        </aside>
    )
}

export default Sidemenu