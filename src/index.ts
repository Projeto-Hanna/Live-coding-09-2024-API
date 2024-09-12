import 'dotenv/config';
import express, { Request, Response } from 'express';

import { Cowboy } from './types/Cowboy';
import { postgresqlCowboyRepository } from './repositories/implementations/postgresqlCowboyRepository';

const port = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());

app.get('/cowboy', async (req: Request, res: Response) => {
  const repository = postgresqlCowboyRepository;

  const cowboys = await repository.listarCowboys();

  return res.json(cowboys);
});

app.get('/cowboy/:id', async (req: Request, res: Response) => {
  const repository = postgresqlCowboyRepository;

  const id = Number(req.params.id);

  const cowboy = await repository.buscarCowboy(id);

  if (!cowboy) {
    return res.status(404).json({ message: 'Cowboy foragido!!' });
  }

  return res.json(cowboy);
});

app.post('/cowboy', async (req: Request, res: Response) => {
  const repository = postgresqlCowboyRepository;

  const cowboy = req.body as Cowboy;

  const newCowboy = await repository.inserirCowboy(cowboy);

  if (!newCowboy) {
    return res.status(403).json({ message: 'Este cowboy não entra aqui!!' });
  }

  return res.status(201).json(newCowboy);
});

app.listen(port, () => {
  console.log(`See you space cowboy on ${port}!!`);
});
