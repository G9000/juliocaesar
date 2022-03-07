import "../styles/resets.css";
import "../styles/globals.css";
import NextApp from "next/app";
import { Client } from "../prismic-configuration";
import { useEffect } from "react";
import * as Fathom from "fathom-client";
import { useRouter } from "next/router";

const MyApp = (props) => {
  const router = useRouter();
  useEffect(() => {
    Fathom.load("ZTYTBKZZ", {
      includedDomains: ["juliocaesar.co"],
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
  const Component = props.Component;
  const pageProps = props.pageProps;
  const menu = props.props;
  return <Component {...pageProps} menu={menu.menu} />;
};

MyApp.getInitialProps = async (appCtx) => {
  const client = Client();
  const menu = (await client.getSingle("menu")) || {};
  return {
    props: {
      menu: menu,
    },
  };
};

export default MyApp;
