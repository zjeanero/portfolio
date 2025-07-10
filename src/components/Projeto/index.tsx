import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

interface Props {
  titulo: string
  descricao: string
  link: string
}

const Projeto: React.FC<Props> = ({ titulo, descricao, link }) => {
  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Paragrafo tipo="secundario">{descricao}</Paragrafo>
      <LinkBotao href={link} target="_blank">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto
