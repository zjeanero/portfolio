import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Redes from '../../components/Redes'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jean Secco</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        zjeanero
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front-End Developer
      </Descricao>
      <Redes />
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
