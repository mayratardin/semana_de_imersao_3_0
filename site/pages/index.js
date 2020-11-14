import Head from 'next/head'; //importando o cabeçalho
import Menu from '../components/Menu'; //importando o Menu para usar como componente
import Rodape from '../components/Rodape'; //importando o componente rodape
import { Container, Jumbotron } from 'reactstrap'; //importando o componente
import { library } from '@fortawesome/fontawesome-svg-core'; //importando a biblioteca de ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //importando o componente
import { fas } from '@fortawesome/free-solid-svg-icons'; //importando todos os ícones sólidos

library.add(fas);

//recebe os dados da constante(data) como objeto
function Home({ data }) {
    return (
        //todo conteúdo deve estar dentro de uma tag
        <> 
            <Head>
                <title>Home - Mayra</title>
                <meta name="description" content="Site de ... sobre ..."/> {/* ajuda o site a ser localizado nos sites de buscas, por isso usa-se o next, quando se quer uma página otimizada para os buscadores */}
                <meta name="author" content="Mayra"/>
            </Head>

            <Menu></Menu>

            <Jumbotron fluid className="descr-top"> {/* usado para criar uma área para o conteúdo, e inserido um seletor para que possa estilizar */}
                <style>
                    {`.descr-top{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 150px;
                        padding-bottom: 150;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center"> {/* usado para alinhar o conteúdo independente do tamanho da tela, e essa classe para centralizar */}
                    <h1 className="display-4">{ data.home.topTitulo }</h1> {/* usando a classe para estilizar a fonte */}
                    <p className="lead">{ data.home.topSubtitulo }</p> {/* usando outra classe para estilizar a fonte */}
                    <p>
                        <a href={ data.home.topLinkBtn } className="btn btn-outline-warning btn-lg"> {/* usando a classe para aplicar e estilizar o botão */}
                            { data.home.topTextoBtn }
                        </a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        padding-top: 80px;
                        padding-bottom: 80px;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #fed136;
                        font-size: 52px;
                        padding-top: 24px;
                        color: #fff;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">{ data.home.serTitulo }</h2>
                        <p className="lead pb-4">{ data.home.serSubtitulo }</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4"> {/* para que a partir de dispositivos com telas média divida em 4 grids */}
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={ data.home.serUmIcone } />
                            </div>
                            <h2 className="mt-4 mb-4">{ data.home.serUmTitulo }</h2>
                            <p>{ data.home.serUmDesc }</p>
                        </div>

                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={ data.home.serDoisIcone } />
                            </div>
                            <h2 className="mt-4 mb-4">{ data.home.serDoisTitulo }</h2>
                            <p>{ data.home.serDoisDesc }</p>
                        </div>

                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={ data.home.serTresIcone } />
                            </div>
                            <h2 className="mt-4 mb-4">{ data.home.serTresTitulo }</h2>
                            <p>{ data.home.serTresDesc }</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape></Rodape>
        </>
    );
  };
  
  export async function getServerSideProps(){
      const response = await fetch(`http://localhost:8080/home`); //fazendo a requisição na api, aguarda o processamento, depois pega os dados e atribui a constante
      const data = await response.json(); //utiliza o json para ler os dados, aguarda o processamento, atribui para a constante
      return {props: { data }} //retorna os dados para utilizar no site
  }
  export default Home;