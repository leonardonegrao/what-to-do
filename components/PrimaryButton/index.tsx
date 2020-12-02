import { IconType } from 'react-icons';
import { Container } from './styles'

interface PrimaryButtonProps {
    Icon?: IconType
    content: string
}

function PrimaryButton({ Icon, content }: PrimaryButtonProps): JSX.Element {
    return (<Container>
        {Icon ? <Icon size={24} /> : ''}
        <p>{content}</p>
    </Container>)
}

export default PrimaryButton