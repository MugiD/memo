import { Heading, Flex, useColorMode, Button, Text, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between" px={8} py={4}>
      <Heading fontSize="2xl">Memo</Heading>
      <Flex alignItems='center' gap={4}>
        <Text fontSize="xl">Links</Text>
          <IconButton aria-label="Change Theme" w={9} h={9} p={2} onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
