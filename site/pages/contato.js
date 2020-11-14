import Head from 'next/head'; //importando o cabeçalho
import Menu from '../components/Menu'; //importando o Menu para usar como componente
import Rodape from '../components/Rodape'; //importando o componente Rodape
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap'; //importando o componente

function Home() {
    return (
        //todo conteúdo deve estar dentro de uma tag
        <> 
            <Head>
                <title>Contato - Mayra</title>
                <meta name="description" content="Contato com a empresa ..."/> {/* ajuda o site a ser localizado nos sites de buscas, por isso usa-se o next, quando se quer uma página otimizada para os buscadores */}
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
                    <h1 className="display-4">Contato</h1> {/* usando a classe para estilizar a fonte */}
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="form-contato">
                <style>
                    {`.form-contato{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="name">Nome:</Label>
                            <Input type="text" name="name" id="name" placeholder="Nome completo" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">E-mail:</Label>
                            <Input type="email" name="email" id="email" placeholder="Melhor e-mail" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="subject">Assunto:</Label>
                            <Input type="text" name="subject" id="subject" placeholder="Assunto da mensagem" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="content">Conteúdo:</Label>
                            <Input type="textarea" name="content" id="content" placeholder="Conteúdo da mensagem" />
                        </FormGroup>

                        <Button type="submit" outline color="warning">Enviar</Button>
                    </Form>
                </Container>
            </Jumbotron>
            
            <Rodape></Rodape>
        </>
    );
  };
  
  export default Home;