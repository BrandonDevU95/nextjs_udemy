import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../components/layout";

const HomePage: NextPage = () => {
   return (
      <Layout title="Listado de pokemos">
         <h1>Hola Mundo</h1>
         <Button color={"gradient"}>Click me</Button>
      </Layout>
   );
};

export default HomePage;
