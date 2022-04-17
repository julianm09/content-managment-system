import "../styles/globals.css";
import React from "react";
import AppProvider from "../utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
