import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import TopMenu from "components/molecules/top-menu/TopMenu";
import NextLink from "next/link";
import BloodIcon from "svg/BloodIcon";
import CalendarIcon from "svg/CalendarIcon";
import ChatIcon from "svg/ChatIcon";
import DashboardIcon from "svg/DashboardIcon";
import HeartIcon from "svg/HeartIcon";
import LogoIcon from "svg/LogoIconOnly";
import PulseIcon from "svg/PulseIcon";
import ReadIcon from "svg/ReadIcon";
import TicketIcon from "svg/TicketIcon";

const indicatorCardsData = [
  {
    heading: "80 bpm",
    sub: "Pulse Rate",
    icon: <PulseIcon />,
    bg: "red.100",
  },
  {
    heading: "60 - 70 mg/dl",
    sub: "Blood Glucose",
    icon: <BloodIcon />,
    bg: "green.100",
  },
  {
    heading: "120/80 mmHg",
    sub: "Blood Pressure",
    icon: <HeartIcon />,
    bg: "orange.100",
  },
];

const Dashboard = () => {
  return (
    <Flex bg="black.grayBg" w="100%" height="100vh">
      {/* menu sidebar */}
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
      {/* right portion */}
      <Box px="28" py="16" w="100%">
        <TopMenu />
        <Flex>
          {/* main 👇🏻 */}
          <Flex pt="24" w="68%" direction="column">
            {/* indicator section 👇🏻 */}
            <Flex direction="column">
              <Flex justify="space-between">
                <Heading size="lg">Indicators</Heading>
                <Button px="12" color="brand.400" variant="ghost">
                  + Add New
                </Button>
              </Flex>
              <Flex wrap="wrap" gap="16" justifyContent="space-between" pt="16">
                {indicatorCardsData.map((card, i) => (
                  <Card flexGrow="1">
                    <CardBody>
                      <Flex align="center">
                        <Center>
                          <Center p="8" borderRadius="8" bg={card.bg}>
                            {card.icon}
                          </Center>
                        </Center>
                        <Flex
                          justify="space-around"
                          pl="16"
                          flexGrow="1"
                          direction="column"
                        >
                          <Heading size="sm">{card.heading}</Heading>
                          <Text fontSize="sm">{card.sub}</Text>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                ))}
              </Flex>
            </Flex>
          </Flex>

          {/* sidebar 👇🏻 */}
          <Flex direction="column"></Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;
