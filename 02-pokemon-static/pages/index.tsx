import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layout";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {
   return (
      <Layout title="Listado de pokemos">
         <ul>
            <li>Pokemon</li>
         </ul>
      </Layout>
   );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await pokeApi.get<PokemonListResponse>(
      "/pokemon?limit=151"
   );

   return {
      props: {
         pokemons: data.results,
      },
   };
};

export default HomePage;
