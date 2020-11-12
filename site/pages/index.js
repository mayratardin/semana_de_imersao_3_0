import Head from 'next/head'; //importando o cabeçalho
import Menu from '../components/Menu'; //importando o Menu para usar como componente
import { Container, Jumbotron } from 'reactstrap'; //importando o componente

function Home() {
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
                    <h1 className="display-4">Título</h1> {/* usando a classe para estilizar a fonte */}
                    <p className="lead">Subtítulo</p> {/* usando outra classe para estilizar a fonte */}
                    <p>
                        <a href="#" className="btn btn-outline-warning btn-lg"> {/* usando a classe para aplicar e estilizar o botão */}
                            Texto
                        </a>
                    </p>
                </Container>
            </Jumbotron>
        </>
    );
  };
  
  export default Home;