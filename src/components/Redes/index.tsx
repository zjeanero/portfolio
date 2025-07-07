import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

import * as S from './styles'

const Redes = () => (
  <S.Container>
    <S.IconLink href="https://github.com/zjeanero" target="_blank">
      <img src={github} alt="GitHub" />
    </S.IconLink>
    <S.IconLink href="https://linkedin.com/in/zjeanero" target="_blank">
      <img src={linkedin} alt="LinkedIn" />
    </S.IconLink>
  </S.Container>
)

export default Redes
