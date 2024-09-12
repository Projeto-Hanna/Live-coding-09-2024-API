import { cowboys } from "../../data/cowboyLocalData";
import { Cowboy } from "../../types/Cowboy";

import { cowboyRepository } from "../cowboyRepository";

const cowboyData = structuredClone(cowboys);

export const arrayCowboyRepository: cowboyRepository = {
  async inserirCowboy(cowboy: Cowboy): Promise<Cowboy | undefined> {
    cowboyData.push(cowboy);
    return cowboy;
  },

  async buscarCowboy(id: number): Promise<Cowboy | undefined> {
    return cowboyData.find(cowboy => cowboy.id === id);
  },

  async listarCowboys(): Promise<Cowboy[]> {
    return cowboyData;
  },
};