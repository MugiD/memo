import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bek Slambek" />
        <title>Memo - Todo app with cool UI</title>
        <meta
          property="description"
          content="Memo. Todo app that will blow your mind"
        />
      </Head>
      <Container >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;