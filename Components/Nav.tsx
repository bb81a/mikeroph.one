import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  chakra,
  useColorMode,
  useColorModeValue,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BiMoon, BiSun } from 'react-icons/bi';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const links = [
  {
    name: `About me`,
    link: `/about`,
  },
  {
    name: `Projects`,
    link: `/projects`,
  },
  {
    name: `Resume`,
    link: `/resume`,
  },
];

function Nav() {
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
  const text = useColorModeValue(`dark`, `light`);
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <chakra.header width="full" position="absolute" top={0} left={0}>
      <chakra.nav mx="auto" p={3}>
        <Flex
          margin="auto"
          justifyContent="space-between"
          alignContent="center"
          maxW="full"
          width={{ base: `7xl` }}
        >
          <Box display="flex" alignContent="center">
            <ChakraLink
              href="/"
              fontSize="lg"
              margin="auto"
              fontWeight="semibold"
              position="relative"
              textTransform="capitalize"
              _after={{
                transition: `all 0.25s ease-in-out`,
                content: `''`,
                /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                outline: `1px solid transparent`,
                width: `0%`,
                height: `30%`,
                position: `absolute`,
                bottom: 1,
                left: 0,
                bg: useColorModeValue(`brand.primary`, `gray.600`),
                zIndex: -1,
              }}
              _hover={{
                _after: {
                  width: `100%`,
                },
                color: useColorModeValue(`gray.900`, `brand.primary`),
              }}
            >
              Michael Hall
            </ChakraLink>
          </Box>

          <Box display={{ md: `none` }}>
            <IconButton
              aria-label="toggle menu"
              icon={<AiOutlineMenu size="1.5em" />}
              variant="ghost"
            />
          </Box>

          <HStack spacing={8} display={{ base: `none`, md: `flex` }}>
            {links.map(({ link, name }, i) => (
              <ChakraLink
                href={link}
                key={i.toString() + name}
                fontSize="lg"
                fontWeight="semibold"
                position="relative"
                textTransform="capitalize"
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `30%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: useColorModeValue(`brand.primary`, `gray.600`),
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                  color: useColorModeValue(`gray.900`, `brand.primary`),
                }}
              >
                {name}
              </ChakraLink>
            ))}
            <HStack spacing={2}>
              <Menu>
                <MenuButton
                  colorScheme="brand"
                  color={useColorModeValue(`gray.800`, `white`)}
                  fontSize="lg"
                  fontWeight="semibold"
                  position="relative"
                  textTransform="capitalize"
                  _after={{
                    transition: `all 0.25s ease-in-out`,
                    content: `''`,
                    /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                    outline: `1px solid transparent`,
                    width: `0%`,
                    height: `30%`,
                    position: `absolute`,
                    bottom: 1,
                    left: 0,
                    bg: useColorModeValue(`brand.primary`, `gray.600`),
                    zIndex: -1,
                  }}
                  _hover={{
                    _after: {
                      width: `100%`,
                    },
                    color: useColorModeValue(`gray.900`, `brand.primary`),
                  }}
                >
                  Other
                  <Icon as={ChevronDownIcon} />
                </MenuButton>
                <MenuList>
                  <MenuItem as="a" href="/bookmarks">
                    Bookmarks
                  </MenuItem>
                </MenuList>
              </Menu>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                title={`Switch to ${text} mode`}
                variant="ghost"
                onClick={toggleMode}
                colorScheme="brand"
                icon={<SwitchIcon size={25} />}
              />
            </HStack>
          </HStack>
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;
