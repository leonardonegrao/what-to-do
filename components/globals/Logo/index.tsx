import Image from 'next/image'

interface LogoProps {
  logoColor?: 'white' | 'main' | 'black'
}

function Logo({ logoColor = 'main' }: LogoProps): JSX.Element {

  const setColor = () => {
    if (logoColor === 'white') {
      return 'logo_branco.svg'
    } else if (logoColor === 'black') {
      return 'logo_preto.svg'
    }

    return 'logo_roxo.svg'
  }

  const color = setColor()

  return (
    <Image
      src={`/assets/${color}`}
      alt="What To Do"
      width={170}
      height={60}
    />
  )
}

export default Logo