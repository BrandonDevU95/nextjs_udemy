import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layout";
import { Pokemon } from "../../interfaces";

interface Props {
   pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
   const { query } = useRouter();

   return <Layout title="Pokemon">{pokemon.name}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
   const pokemon151 = [...Array(151)].map((_, index) => `${index + 1}`);

   return {
      paths: pokemon151.map((id) => ({ params: { id } })),
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { id } = params as { id: string };
   const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

   return {
      props: {
         pokemon: data,
      },
   };
};

export default PokemonPage;
