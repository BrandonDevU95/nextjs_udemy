import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritePage = () => {
   const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

   useEffect(() => {
      setFavoritePokemos(localFavorites.pokemons());
   }, []);

   return (
      <Layout title="Pokemon">
         <NoFavorites />
      </Layout>
   );
};

export default FavoritePage;
