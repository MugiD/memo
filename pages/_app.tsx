import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

const colors = {
  colors: {
    white: "#fff",
    black: "#000814",
    darkblue: "#14213d",
    blue: "#003566",
    darkyellow: "#ffc300",
    yellow: "#ffd60a",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#000814",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;