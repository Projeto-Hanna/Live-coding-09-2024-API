export type Cowboy = {
  id: number;
  nome: string;
  sobrenome: string;
  honra: number;
  gangue?: 'O Driscoll' | 'Van Der Linde' | 'Lemoyne Raiders';
  idade: number;
  procurado: boolean;
};