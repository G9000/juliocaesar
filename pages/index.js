import { Client } from "../prismic-configuration";
import { useEffect } from "react";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import * as Fathom from "fathom-client";
import { useRouter } from "next/router";

import resolver from "../sm-resolver.js";
import Layout from "../components/layout";

const Page = (props) => {
  const router = useRouter();
  useEffect(() => {
    Fathom.load("MRSFPMID", {
      includedDomains: ["www.juliocaesar.co"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
  return (
    <Layout menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};
// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "home",
});

export default Page;
