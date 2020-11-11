const mongoose = require('mongoose'); //incluindo o mongoose atribuindo para uma constante

// criando a constante schema e instanciando do mongoose schema e tem as posições que serão salvas no bd
// const schema = new mongoose.Schema({ name: 'string', size: 'string' });

const Schema = mongoose.Schema; //Outra opção é criar a constante que conterá o mongoose schema

//informações que se quer salvar no bd
const home = new Schema({
    topTitulo: {
        type: String
    },
    topSubtitulo: {
        type: String
    },
    topTextoBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    },

    serTitulo: {
        type: String
    },
    serSubtitulo: {
        type: String
    },

    serUmIcone: {
        type: String
    },
    serUmTitulo: {
        type: String
    },
    serUmDesc: {
        type: String
    },

    serDoisIcone: {
        type: String
    },
    serDoisTitulo: {
        type: String
    },
    serDoisDesc: {
        type: String
    },

    serTresIcone: {
        type: String
    },
    serTresTitulo: {
        type: String
    },
    serTresDesc: {
        type: String
    },
},{
    timestamps: true, //para enviar quando se está cadastrando e editando
});

mongoose.model('Home', home); //exportando a model com o nome Home