import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import AngleArrowDown from "svg/AngleArrowDown";
import BellIcon from "svg/BellIcon";
import SearchIcon from "svg/SearchIcon";
import SettingsIcon from "svg/SettingsIcon";

const Avatar = () => (
  <Center bg="cyan.600" w="8" h="8" borderRadius="100%">
    <Text fontSize="xs" color="white">
      MS
    </Text>
  </Center>
);

const TopMenu = () => {
  return (
    <Flex align="center" borderRadius="8" bg="white" p="12">
      <Box w="70%">
        <InputGroup>
          <Input px="12" placeholder="Search" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Flex align="center" flexGrow="1" justify="space-evenly" pl="16">
        <IconButton colorScheme="white" icon={<SettingsIcon />}></IconButton>
        <IconButton colorScheme="white" icon={<BellIcon />}></IconButton>
        <Flex>
          <Menu>
            <MenuButton
              bg="white"
              px="8"
              as={Button}
              leftIcon={<Avatar />}
              rightIcon={<AngleArrowDown />}
            >
              Mark Smith
            </MenuButton>
            <MenuList>
              {[1, 2, 3, 4].map((_, i) => (
                <MenuItem>Option {i + 1}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopMenu;
