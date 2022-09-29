import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";

interface Props {
   //    pokemon: any;
   id: string;
   name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
   const { query } = useRouter();

   return (
      <Layout title="Pokemon">
         {id} - {name}
      </Layout>
   );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
   return {
      paths: [
         {
            params: {
               id: "1",
            },
         },
      ],
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   return {
      props: {
         id: 1,
         name: "Bulbasaur",
      },
   };
};

export default PokemonPage;
