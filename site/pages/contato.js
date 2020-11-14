import React, { useState } from 'react';
import Head from 'next/head'; //importando o cabeçalho
import Menu from '../components/Menu'; //importando o Menu para usar como componente
import Rodape from '../components/Rodape'; //importando o componente Rodape
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap'; //importando o componente

function Home() {

    //'setando' valores
    const [contato, setContato] = useState({
        name:'',
        email: '',
        subject: '',
        content: ''
    });

    //quando o usuário clicar nos campos do usuário
    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    //submetendo o formulário
    const sendMsg = async e => {
        e.preventDefault(); //para não recarregar a página

        setResponse({formSave: true}); //quando começar a salvar

        try {
            const res = await fetch('http://localhost:8080/contato', {
                method: 'POST',
                body: JSON.stringify(contato),
                headers: { 'Content-Type': 'application/json'}
            });

            const responseEnv = await res.json(); //lendo o retorno do envio
            if(responseEnv.error){
                setResponse({ //'setando' os valores recebidos
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message //pegando a msg da api
                });
            }else{
                setResponse({ //'setando' os valores recebidos
                    formSave: false,
                    type: 'success',
                    message: responseEnv.message //pegando a msg da api
                });
            }
        } catch (err){
            setResponse({ //'setando' os valores recebidos
                    formSave: false,
                    type: 'error',
                    message: 'ERRO: Mensagem não enviada com sucesso, tente mais tarde!'
                });
        }
    }

    //sempre que o usuário realizar alguma alteração em um input, executará a função que 'seta' valores como objeto, pegando o que o contato já possui(por isso os ...), após pega o nome do campo e o valor dele
    const onChangeInput = e => setContato({ ...contato, [e.target.name]: e.target.value});

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
                {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div>: ""}
                {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div>: ""}
                    <Form onSubmit={sendMsg}>
                        <FormGroup>
                            <Label for="name">Nome:</Label>
                            <Input type="text" name="name" id="name" placeholder="Nome completo" onChange={onChangeInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">E-mail:</Label>
                            <Input type="email" name="email" id="email" placeholder="Melhor e-mail" onChange={onChangeInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="subject">Assunto:</Label>
                            <Input type="text" name="subject" id="subject" placeholder="Assunto da mensagem" onChange={onChangeInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="content">Conteúdo:</Label>
                            <Input type="textarea" name="content" id="content" placeholder="Conteúdo da mensagem" onChange={onChangeInput}/>
                        </FormGroup>

                        {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviando...</Button> : <Button type="submit" outline color="warning">Enviar</Button>}
                        
                    </Form>
                </Container>
            </Jumbotron>
            
            <Rodape></Rodape>
        </>
    );
  };
  
  export default Home;