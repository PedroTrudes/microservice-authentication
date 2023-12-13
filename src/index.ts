import express, {Request, Response, NextFunction} from 'express';
import userRoute from './routes/users.route'; //chamando as nossas rotas apartadas
import statusRoute from './routes/status.route';

const app = express() // chamando o gerenciador de rotas

//como fazer ele entender JSON -- o basico da configuração do node com express
app.use(express.json());
app.use(express.urlencoded({extended: true}));//para a url entender o queryString ``

//configurando Rotas
app.use(userRoute);// agora nossa aplicação entendeu que temos rotas apartadas
app.use(statusRoute);// pegando a rota de status e todas as rodas que temos lá no arquivo

//iniciando o servidor
app.listen(3000, () => {
    console.log("app executando na porta 3000");
})