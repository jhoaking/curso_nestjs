import axios from "axios";
import { Move, PokeapiResponse } from "../interface/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
  }

  speak() {
    console.log(`${this.name} , ${this.name} !!!`);
  }

  async getmoves(): Promise<Move[]> {
    // const moves = 10;

    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/7"
    );

    console.log(data.moves);

    return data.moves;
  }
}

export const squirtle = new Pokemon(1, "squirtle");

console.log(squirtle.name);

squirtle.scream();
squirtle.speak();
