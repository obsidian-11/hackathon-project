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
  useMediaQuery,
} from "@chakra-ui/react";
import AngleArrowDown from "svg/AngleArrowDown";
import BellIcon from "svg/BellIcon";
import LogoSmall from "svg/LogoSmall";
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
  const [isLg] = useMediaQuery("(min-width: 992px)");
  return (
    <Flex align="center" borderRadius="8" bg="white" p="12">
      <Box display={{ base: "none", lg: "block" }} w="70%">
        <InputGroup>
          <Input px="12" placeholder="Search" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Flex
        direction={{ base: "row-reverse", lg: "row" }}
        align="center"
        flexGrow="1"
        justify={{ base: "space-between", lg: "space-evenly" }}
        pl={{ base: "0", lg: "16" }}
      >
        {isLg && (
          <IconButton colorScheme="white" icon={<SettingsIcon />}></IconButton>
        )}
        <IconButton colorScheme="white" icon={<BellIcon />}></IconButton>

        {!isLg && <LogoSmall />}

        <Menu>
          <MenuButton
            bg="white"
            px="8"
            as={Button}
            leftIcon={<Avatar />}
            iconSpacing={{ base: "0", lg: "8" }}
            rightIcon={isLg ? <AngleArrowDown /> : null}
          >
            {isLg ? "Mark Smith" : ""}
          </MenuButton>
          <MenuList>
            {[1, 2, 3, 4].map((_, i) => (
              <MenuItem>Option {i + 1}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default TopMenu;
