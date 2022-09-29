import { useRouter } from "next/router";
import { Layout } from "../../components/layout";

interface Props {
   pokemon: any;
}

const PokemonPage = () => {
   const { query } = useRouter();

   return <Layout title="Pokemon">PokemonPage</Layout>;
};

export default PokemonPage;
