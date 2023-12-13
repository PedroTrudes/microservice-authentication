import { Router, Request, Response, NextFunction, response } from "express";
import statusCodes from 'http-status-codes';

const userRoute = Router();
/*
Rotas do projeto
get /user
get /user/:uuid
post /user
put /user/:uuid
delete /user/:uuid
*/

userRoute.get('/users', (req: Request, res: Response, next: NextFunction)=>{
    const users = [{userName: 'Pedro'}];
    res.status(statusCodes.OK).send(users);
});

//com Ts conseguimos tipar oq vamos receber na Request
userRoute.get('/users/:uuid', (req: Request<{ uuid : string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;

    res.status(statusCodes.OK).send({uuid});
})

userRoute.post('/users', (req : Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(statusCodes.CREATED).send(newUser);
})

userRoute.put('/users/:uuid', (req: Request<{uuid : string}>, res : Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiendUser = req.body;
    modifiendUser.uuid = uuid;
    res.status(statusCodes.OK).send(modifiendUser)
})

userRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;

    res.status(statusCodes.OK).send({message: "usuario removido"})
})

export default userRoute;