import { Heading, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justify="space-between" px={8} py={4}>
      <Heading>Memo</Heading>
      <Flex gap={4}>
        <Heading>Links</Heading>
        <Heading>Theme</Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
