import Head from 'next/head'; //importando o cabeçalho
import Menu from '../components/Menu'; //importando o Menu para usar como componente
import { Container, Jumbotron } from 'reactstrap'; //importando o componente

function Home() {
    return (
        //todo conteúdo deve estar dentro de uma tag
        <> 
            <Head>
                <title>Sobre Empresa - Mayra</title>
                <meta name="description" content="Sobre a empresa ..."/> {/* ajuda o site a ser localizado nos sites de buscas, por isso usa-se o next, quando se quer uma página otimizada para os buscadores */}
                <meta name="author" content="Mayra"/>
            </Head>

            <Menu></Menu>

            <Jumbotron fluid className="descr-top"> {/* usado para criar uma área para o conteúdo, e inserido um seletor para que possa estilizar */}
                <style>
                    {`.descr-top{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 100px;
                        padding-bottom: 50;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center"> {/* usado para alinhar o conteúdo independente do tamanho da tela, e essa classe para centralizar */}
                    <h1 className="display-4">Sobre Empresa</h1> {/* usando a classe para estilizar a fonte */}
                </Container>
            </Jumbotron>
        </>
    );
  };
  
  export default Home;