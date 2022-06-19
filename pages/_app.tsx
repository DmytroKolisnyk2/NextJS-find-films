import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import ScrollTopArrow from "../components/ScrollTopArrow/ScrollTopArrow";
import NextNProgress from "nextjs-progressbar";

import "material-design-icons/iconfont/material-icons.css";
import "modern-normalize/modern-normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Website for searching movies" />
        <link
          rel="icon shortcut"
          href="https://avatars.githubusercontent.com/u/69747115?v=4"
          type="image/x-icon"
        />
        {Component.title ? <title>{Component.title}</title> : <title>Movie search app</title>}
      </Head>
      <NextNProgress
        color="tomato"
        showOnShallow={true}
      />
      <NavBar />
      <Component {...pageProps} />
      <ScrollTopArrow bgColor="tomato" />
    </>
  );
}

export default MyApp;
