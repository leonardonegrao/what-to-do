import { FiPlusCircle } from 'react-icons/fi'
import MenuGroups from './subcomponents/MenuGroups'
import PrimaryButton from '../globals/PrimaryButton'
import { Container } from './styles'
import Logo from '../globals/Logo'

function Sidemenu(): JSX.Element {

    function getDate(): string {
        const date = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        });

        return date;
    }

    return (
        <aside>
            <Container>
                <h1 className="title">
                    <Logo logoColor="white" />
                </h1>

                <h2 className="date">{getDate()}</h2>

                {/* <MenuGroups /> */}

                {/* <PrimaryButton Icon={FiPlusCircle} content="New Group" /> */}
            </Container>
        </aside>
    )
}

export default Sidemenu