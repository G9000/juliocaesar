import React from "react";
import Prismic from "@prismicio/client";
import { Client } from "../utils/prismic-configuration";

// const Landing = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>World</h2>
//     </div>
//   );
// };

// export default Landing;

export async function getStaticProps() {
  const posts = await Client.query(
    Prismic.Predicates.at("document.type", "test")
  );
  return {
    props: {
      posts,
    },
  };
}
