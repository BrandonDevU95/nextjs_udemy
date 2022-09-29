import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layout";

const HomePage: NextPage = (props) => {
   console.log(props);
   return (
      <Layout title="Listado de pokemos">
         <ul>
            <li>Pokemon</li>
         </ul>
      </Layout>
   );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   return {
      props: {},
   };
};

export default HomePage;
