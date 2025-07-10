import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const listaDeProjetos = [
  {
    titulo: 'Projeto CloneDisney+',
    descricao:
      'Clone da interface Disney+ feito com HTML, Scss, JS e Gulp. Prática de Projeto EBAC',
    link: 'https://github.com/zjeanero/clone_disneyplus'
  },
  {
    titulo: 'Teste GeminiCLI + VSCode',
    descricao:
      'Testando a interação da Interface do Gemini com o VSCode na criação de um To-do list com React',
    link: 'https://github.com/zjeanero/GeminiCLI-teste'
  },
  {
    titulo: 'To-do List com Vue',
    descricao: 'Uma lista de tarefas funcional feita com VueJS.',
    link: 'https://github.com/zjeanero/todo-vue'
  },
  {
    titulo: 'Buscador de Perfil',
    descricao: 'Buscador de perfil do Github criado com VueJs ',
    link: 'https://github.com/zjeanero/github_perfil'
  }
]

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      {listaDeProjetos.map((projeto) => (
        <Projeto
          key={projeto.titulo}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
          link={projeto.link}
        />
      ))}
    </Lista>
  </section>
)

export default Projetos
