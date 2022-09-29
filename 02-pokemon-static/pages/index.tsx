import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";
import { Layout } from "../components/layout";
import { PokemonListResponse, SmalllPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
   pokemons: SmalllPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
   return (
      <Layout title="Listado de pokemos">
         <Grid.Container gap={2} justify="flex-start">
            {pokemons.map((pokemon) => (
               <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
         </Grid.Container>
      </Layout>
   );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await pokeApi.get<PokemonListResponse>(
      "/pokemon?limit=151"
   );

   const pokemons: SmalllPokemon[] = data.results.map((pokemon, index) => {
      const id = index + 1;
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      return { ...pokemon, id, img };
   });

   return {
      props: {
         pokemons,
      },
   };
};

export default HomePage;
