import { Box, Flex, Link, Text } from "@chakra-ui/react";
import DashboardIcon from "svg/DashboardIcon";
import LogoIcon from "svg/LogoIcon";
import NextLink from "next/link";
import CalendarIcon from "svg/CalendarIcon";
import ReadIcon from "svg/ReadIcon";
import TicketIcon from "svg/TicketIcon";
import ChatIcon from "svg/ChatIcon";

const Dashboard = () => {
  return (
    <Flex bg="black.grayBg" height="100vh">
      <Flex bg="white" align="center" w="24" flexDir="column">
        <Box py="36">
          <LogoIcon />
        </Box>
        <Flex pt="24" gap="36" flexDir="column">
          <Link
            _hover={{ textDecoration: "none" }}
            as={NextLink}
            href="/dashboard"
          >
            <Flex align="center" justify="center" flexDir="column">
              <DashboardIcon />
              <Text pt="4" fontSize="xs" fontWeight="600" color="brand.400">
                Dashboard
              </Text>
            </Flex>
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            as={NextLink}
            href="#consult"
          >
            <Flex align="center" justify="center" flexDir="column">
              <CalendarIcon />
              <Text pt="4" fontSize="xs" fontWeight="600" color="black.light">
                Consult
              </Text>
            </Flex>
          </Link>
          <Link _hover={{ textDecoration: "none" }} as={NextLink} href="#blogs">
            <Flex align="center" justify="center" flexDir="column">
              <ReadIcon />
              <Text pt="4" fontSize="xs" fontWeight="600" color="black.light">
                Blogs
              </Text>
            </Flex>
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            as={NextLink}
            href="#challenges"
          >
            <Flex align="center" justify="center" flexDir="column">
              <TicketIcon />
              <Text pt="4" fontSize="xs" fontWeight="600" color="black.light">
                Challenges
              </Text>
            </Flex>
          </Link>
          <Link _hover={{ textDecoration: "none" }} as={NextLink} href="#forum">
            <Flex align="center" justify="center" flexDir="column">
              <ChatIcon />
              <Text pt="4" fontSize="xs" fontWeight="600" color="black.light">
                Forum
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
