import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
   title?: string;
   children?: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
   return (
      <>
         <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name="author" content="Brandon Vargas" />
            <meta
               name="description"
               content={`Info sobre el pokemon ${title}`}
            />
            <meta name="keywords" content={`pokemon pokedex ${title}`} />
         </Head>

         <main>{children}</main>
      </>
   );
};
