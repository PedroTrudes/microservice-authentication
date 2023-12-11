import express, {Request, Response, NextFunction} from 'express';
import userRoute from './routes/users.route'; //chamando as nossas rotas apartadas

const app = express() // chamando o gerenciador de rotas

app.use(userRoute);// agora nossa aplicação entendeu que temos rotas apartadas

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: "bar"})
});

app.listen(3000, () => {
    console.log("app executando na porta 3000");
})

console.log("excecutando node")