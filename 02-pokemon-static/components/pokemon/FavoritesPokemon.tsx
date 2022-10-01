import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
   pokemons: number[];
}

export const FavoritesPokemon: FC<Props> = ({ pokemons }) => {
   return (
      <Grid.Container gap={2} direction="row" justify="flex-start">
         {pokemons.map((pokemonId) => (
            <FavoriteCardPokemon key={pokemonId} pokemonId={pokemonId} />
         ))}
      </Grid.Container>
   );
};
