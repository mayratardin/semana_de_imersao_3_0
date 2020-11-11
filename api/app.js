const express = require('express'); //incluindo o express atribuindo para uma constante
const mongoose = require('mongoose'); //incluindo o mongoose atribuindo para uma constante
const cors = require('cors'); //incluindo o cors atribuindo para uma constante

require('./models/home'); //importando a model home
const Home = mongoose.model('Home'); //executando, indicando que é uma model lida pelo mongoose e chamada Home(mesmo nome colocado para exportar) | sempre que quiser utilizar a model home para buscar informações no bd, salvar, apagar ou editar, se utilizará essa constante criada (Home)

require('./models/contato'); //importando a model contato
const Contato = mongoose.model('Contato');

const app = express(); //executa a função express e atrinuindo a constante app

app.use(express.json()); //para evitar erros, informa-se que caso tenha requisições elas serão em formato json

//usa-se o app porque o express está dentro dele
app.use((req, res, next) => { //usa o next para ele não pausar a execução
    //configurações opções
    res.header("Access-Control-Allow-Origin", "*");//configurando quem pode fazer requisições, pode-se colocar sites específicos, ips ou aplicações, com o * qualquer um pode fazer
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');//configurando quais métodos podem ser executados
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});//chama-se middleware e é executado antes de qualquer coisa, depois devido ao next ele continua o processamento, desde que não tenha tido erro

//realizando a conexão com o bd mongodb que está localizado localmente(por isso não precisa colocar a porta, mas em produção é necessário) com a base de dados imersao, utilizando o mongoose
mongoose.connect('mongodb://localhost/imersao', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => { //quando conseguir a conexão com o DB ele acessa a função que no caso contém o console.log
    console.log("Conexão com o BD MongoDB realizada com sucesso!");
}).catch((err) => { //quando ocorrer um erro, ele pega o erro e acessa a função que contém o console.log concatenado com o erro
    console.log("Erro: Conexão com o BD MongoDB não realizada com sucesso: " + err);
});

//criando a rota do servidor
app.get('/', (req, res) => {
    res.json({ name: "Mayra" });
}); //criando uma função de requisição e resposta(esse é um exemplo)

//para mostrar os dados
app.get('/home', async (req, res) => {
    await Home.findOne({}).then((home) => { //busca no bd, não precisa de condição porque vai trazer o primeiro registro. Usa-se o then para verificar, caso tenha executado com sucesso, pega os dados e atribui a home, cria-se a função para retornar os dados
        return res.json({ //não precisa de status porque ele só vai retornar se tiver sucesso
            error: false,
            home //retorna a posição home com o valor que está em home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        });
    });
});

//salvando os dados informados
//async para que ele aguarde o processamento antes de continuar
app.post('/home', async (req, res) => {

    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information!",
        "topTextoBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",

        "serTitulo": "Serviços",
        "serSubtitulo": "Featured content or information",
        "serUmIcone": "code",
        "serUmTitulo": "Serviço 1",
        "serUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        "serDoisIcone": "laptop-code",
        "serDoisTitulo": "Serviço 2",
        "serDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "serTresIcone": "mobile-alt",
        "serTresTitulo": "Serviço 3",
        "serTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    }

    //criando uma constante para verificar se já há registro cadastrado na home, pois será permitido apenas um registro nela, usa-se o await para não continuar o processamento enquanto não retornar as informações
    const homeExist = await Home.findOne({}); //não precisa colocar condição, pois se ele encontrar um registro no bd não pode cadastrar um novo registro
    if(homeExist){
        return res.status(400).json({ //se houve erro ele, coloca o status 400 na resposta(res), retorna o json com as duas posições abaixo
            error: true,
            message: "Erro: A página home já possui um registro!"
        });
    }

    await Home.create(dados, (err) => { //os dados que a requisição está enviando(req) será criado(salvo) na model(db)
        //caso ocorra um erro, ele recebe, entra na função e verifica se foi cadastrado com sucesso
        if (err) return res.status(400).json({ //se houve erro ele, coloca o status 400 na resposta(res), retorna o json com as duas posições abaixo
            error: true,
            message: "Erro: Conteúdo da página home não cadastrado com sucesso!"
        });
    });
    //caso não houve erro
    return res.json({
        error: false,
        message: "Conteúdo da página home cadastrado com sucesso!"
    });
});

app.post('/contato', async (req, res) => {
    await Contato.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Mensagem de contato não cadastrada com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Mensagem de contato cadastrada com sucesso!"
    });
});

// app.listen(3000); roda o servidor
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
}); //criando uma função apenas para ver um resultado intuitivo do servidor rodando