import { Box, Flex, Link, Text } from "@chakra-ui/react";
import TopMenu from "components/molecules/top-menu/TopMenu";
import PageToRender from "components/organisms/PageToRender";
import NextLink from "next/link";
import { useRouter } from "next/router";
import CalendarIcon from "svg/CalendarIcon";
import ChatIcon from "svg/ChatIcon";
import DashboardIcon from "svg/DashboardIcon";
import LogoIcon from "svg/LogoIconOnly";
import ReadIcon from "svg/ReadIcon";
import TicketIcon from "svg/TicketIcon";

const Page = () => {
  const router = useRouter();
  const route = router.query.page;

  const links = [
    { route: "dashboard", label: "Dashboard", icon: "DashboardIcon" },
    { route: "consult", label: "Consult", icon: "DashboardIcon" },
    { route: "blog", label: "Blog", icon: "DashboardIcon" },
    { route: "challenges", label: "Challenges", icon: "DashboardIcon" },
    { route: "forum", label: "Forum", icon: "DashboardIcon" },
  ];

  const iconComponents = {
    dashboard: DashboardIcon,
    consult: CalendarIcon,
    blog: ReadIcon,
    challenges: TicketIcon,
    forum: ChatIcon,
  };

  return (
    <Flex bg="black.grayBg" w="100%" minH="100vh">
      {/* menu sidebar */}
      <Flex
        display={{ base: "none", lg: "flex" }}
        bg="white"
        align="center"
        w="24"
        flexDir="column"
      >
        <Box py="36">
          <LogoIcon />
        </Box>
        <Flex pt="24" gap="36" flexDir="column">
          {links.map((link, id) => {
            const currentTab = link.route === route;
            const IconComponent = iconComponents[link.route];
            return (
              <Link
                key="id"
                _hover={{ textDecoration: "none" }}
                as={NextLink}
                href={`/${link.route}`}
              >
                <Flex align="center" justify="center" flexDir="column">
                  {IconComponent && (
                    <IconComponent color={currentTab ? "#48BB78" : "#A0AEC0"} />
                  )}
                  <Text
                    pt="4"
                    fontSize="xs"
                    fontWeight="600"
                    color={currentTab ? "brand.400" : "black.light"}
                  >
                    {link.label}
                  </Text>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>
      {/* right portion */}
      <Box h="100vh" overflowY="auto" px="28" py="16" w="100%">
        <TopMenu />
        <PageToRender route={route} />
      </Box>
    </Flex>
  );
};

export default Page;
