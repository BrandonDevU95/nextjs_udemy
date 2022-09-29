import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { pokeApi } from "../api";
import { Layout } from "../components/layout";
import { PokemonListResponse, SmalllPokemon } from "../interfaces";

interface Props {
   pokemons: SmalllPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
   return (
      <Layout title="Listado de pokemos">
         <ul>
            {pokemons.map((pokemon) => (
               <li key={pokemon.id}>
                  #{pokemon.id} - {pokemon.name}
               </li>
            ))}
         </ul>
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
