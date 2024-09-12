import { Cowboy } from "../types/Cowboy";

export interface cowboyRepository {
  inserirCowboy(cowboy: Cowboy): Promise<Cowboy | undefined>;
  buscarCowboy(id: number): Promise<Cowboy | undefined>;
  listarCowboys(): Promise<Cowboy[]>;
}