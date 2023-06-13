import { Ipokemons } from '../services/pokemons/pokemon';

export class Player {
  private name: string;
  private damage: number;
  private type: string;
  private description: string;

  constructor(
    _name: string,
    _damage: number,
    _type: string,
    _description: string
  ) {
    this.name = _name;
    this.damage = _damage;
    this.type = _type;
    this.description = _description;
  }
}
