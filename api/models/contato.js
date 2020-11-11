const mongoose = require('mongoose'); //incluindo o mongoose atribuindo para uma constante

// criando a constante schema e instanciando do mongoose schema e tem as posições que serão salvas no bd
// const schema = new mongoose.Schema({ name: 'string', size: 'string' });

const Schema = mongoose.Schema; //Outra opção é criar a constante que conterá o mongoose schema

//informações que se quer salvar no bd
const contato = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    content: {
        type: String
    },
},{
    timestamps: true, //para enviar quando se está cadastrando e editando
});

mongoose.model('Contato', contato); //exportando a model com o nome Contato