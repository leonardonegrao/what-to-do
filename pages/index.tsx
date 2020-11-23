import Sidemenu from '../components/Sidemenu'
import HomeContent from '../components/HomeContent'

import { Container } from '../styles/home'

function Home(): JSX.Element {
    return (
        <Container>
            <Sidemenu />
            <HomeContent />
        </Container>
    )
}

export default Home