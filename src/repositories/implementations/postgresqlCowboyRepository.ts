import { Pool, PoolClient } from 'pg';

import { Cowboy } from "../../types/Cowboy";
import { cowboyRepository } from "../cowboyRepository";

const connectionString = process.env.DATABASE_CONNECTION_STRING;

const database = new Pool({
  connectionString,
});

let connection: PoolClient;

(async () => {
  connection = await database.connect();
})();

export const postgresqlCowboyRepository: cowboyRepository = {
  async inserirCowboy(cowboy: Cowboy): Promise<Cowboy | undefined> {
    try {
      await connection.query(
        'INSERT INTO cowboy VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [
          cowboy.id,
          cowboy.nome,
          cowboy.sobrenome,
          cowboy.honra,
          cowboy.gangue,
          cowboy.idade,
          cowboy.procurado
        ]
      );
      return cowboy as Cowboy | undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },

  async buscarCowboy(id: number): Promise<Cowboy | undefined> {
    try {
      const response = await connection.query('SELECT * FROM cowboy WHERE id = $1', [id]);
      return response.rows[0] as Cowboy | undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },

  async listarCowboys(): Promise<Cowboy[]> {
    try {
      const response = await connection.query('SELECT * FROM cowboy');
      return response.rows as Cowboy[];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};