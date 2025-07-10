import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Me chamo Jean Secco Castro, tenho 23 anos e sou um entusiasta da
      tecnologia e estudante de programação, focado em desenvolvimento web.
      Atualmente, faço o curso de Desenvolvedor Full Stack Java pela EBAC e sigo
      aprimorando minhas habilidades em HTML, CSS e JavaScript.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=zjeanero&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zjeanero&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
