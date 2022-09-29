export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmalllPokemon[];
}

export interface SmalllPokemon {
    name: string;
    url:  string;
    id:  number;
    img: string;
}
