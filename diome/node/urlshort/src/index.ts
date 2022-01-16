//@ts-ignore
import express, { Request, Response } from 'express';

const api = express();

api.get('/test', (req: Request, res: Response) => {
  res.json({ 
    name: 'Julya',
    age: 21,
    born: 'CWB'
  })
})

api.listen(5000, () => console.log('Express Listening'));

