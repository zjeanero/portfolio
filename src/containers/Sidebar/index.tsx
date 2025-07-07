import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
