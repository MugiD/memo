import { Heading, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify="space-between" px={8} py={4}>
      <Heading fontSize="2xl">Memo</Heading>
      <Flex gap={4}>
        <Heading fontSize="2xl">Links</Heading>
        <Heading fontSize="2xl">Theme</Heading>
      </Flex>
    </Flex>
  );
};

export default Footer;
