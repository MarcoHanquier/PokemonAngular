import { Ipokemons } from '../services/pokemons/pokemon';

export class Attack {
  name: string;
  description: string;
  damage: number;
  precision: number;
  ppP1: number;
  ppP2: number;
  type: string;
  element: string;

  constructor(
    _name: string,
    _description: string,
    _damage: number,
    _precision: number,
    _ppP1: number,
    _ppP2: number,
    _type: string,
    _element: string,
  ) {
    this.name = _name;
    this.description = _description;
    this.damage = _damage;
    this.precision = _precision;
    this.ppP1 = _ppP1;
    this.ppP2 = _ppP2;
    this.type = _type;
    this.element = _element;
  }
}


const attaque_Flammeche = {
  name: 'Flammèche',
  description: '10% de chance de brûler la cible.',
  damage: 40,
  precision: 100,
  ppP1: 25,
  ppP2: 25,
  type: 'spéciale',
  element: 'Feu',
};