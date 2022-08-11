import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";

const colors = {
  colors: {
    blue: "#003566",
    darkyellow: "#ffc300",
    yellow: "#ffd60a",
  },
};

const theme = extendTheme({
  colors
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
