import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import ActivityChart from "components/molecules/activity/Chart";
import NextLink from "next/link";
import BloodIcon from "svg/BloodIcon";
import HeartIcon from "svg/HeartIcon";
import PulseIcon from "svg/PulseIcon";

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

const articlesData = [
  {
    heading: "Understanding Human Behaviour",
    sub: "By Alison Burgers · 24.07.2023",
    imageSrc: "assets/p1.jpg",
    category: "• Mental Health",
  },
  {
    heading: "7 Food Items to Include in Your Diet",
    sub: "By Ladees · 24.07.2023",
    imageSrc: "assets/p2.jpg",
    category: "• Weight Loss",
  },
];

const recDoctors = [
  {
    name: "Dr James Huberman",
    profession: "Therapist",
    availability: "Mon - Fri",
    photo: "assets/d1.png",
    link: "#",
  },
  {
    name: "Dr James Huberman",
    profession: "Therapist",
    availability: "Mon - Fri",
    photo: "assets/d1.png",
    link: "#",
  },
  {
    name: "Dr James Huberman",
    profession: "Therapist",
    availability: "Mon - Fri",
    photo: "assets/d1.png",
    link: "#",
  },
];

const upcAppointments = [
  {
    name: "Dr James Huberman",
    profession: "Therapist",
    appTime: "Today 14:00",
    photo: "assets/d1.png",
    link: "#",
  },
  {
    name: "Dr James Huberman",
    profession: "Therapist",
    appTime: "Today 14:00",
    photo: "assets/d1.png",
    link: "#",
  },
  {
    name: "Dr James Huberman",
    profession: "Therapist",
    appTime: "Today 14:00",
    photo: "assets/d1.png",
    link: "#",
  },
];

const DashboardContent = () => (
  <Flex
    align={{ base: "stretch", lg: "flex-start" }}
    gap="18"
    direction={{ base: "column", lg: "row" }}
  >
    {/* main 👇🏻 */}
    <Flex gap="32" w={{ base: "100%", lg: "68%" }} direction="column">
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

      {/* activity section 👇🏻 */}
      <Flex direction="column">
        <Heading size="lg">Activity</Heading>
        <Card mt="18" p="28" flexGrow="1">
          <Flex direction="column" gap="28">
            <Flex justify="space-between" align="center">
              <Button px="12" color="gray.500" variant="ghost">
                {`← Previous week`}
              </Button>
              <Text fontWeight="bold">29 Aug - 5 Sep</Text>
              <Button px="12" color="gray.500" variant="ghost">
                {`Next week →`}
              </Button>
            </Flex>

            <Flex>
              <Text fontWeight="bold">Total Steps:&nbsp;</Text>
              <Text>45,870</Text>
            </Flex>

            <ActivityChart />
          </Flex>
        </Card>
      </Flex>

      {/* articles section 👇🏻 */}
      <Flex direction="column">
        <Flex justify="space-between">
          <Heading size="lg">Recommended Articles</Heading>
          <Button px="12" color="brand.400" variant="ghost">
            See All
          </Button>
        </Flex>
        <Flex wrap="wrap" gap="16" justifyContent="space-between" pt="16">
          {articlesData.map((article, i) => (
            <Card flexGrow="1">
              <Link _hover={{ textDecoration: "none" }} as={NextLink} href="#">
                <CardBody>
                  <Flex align="center">
                    <Center>
                      <Center borderRadius="8">
                        <Image src={article.imageSrc} />
                      </Center>
                    </Center>
                    <Flex
                      justify="space-between"
                      gap="8"
                      px="12"
                      flexGrow="1"
                      direction="column"
                      maxW="64"
                    >
                      <Text fontWeight="700" color="black.gray" fontSize="sm">
                        {article.category}
                      </Text>
                      <Heading size="sm">{article.heading}</Heading>
                      <Text color="black.gray" fontSize="sm">
                        {article.sub}
                      </Text>
                    </Flex>
                  </Flex>
                </CardBody>
              </Link>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Flex>

    {/* sidebar 👇🏻 */}
    <Card flexGrow="1" mt={{ base: 0, md: "48" }} bg="white" direction="column">
      {/* upcoming appointments section 👇🏻*/}
      <Flex p="18" direction="column">
        <Flex align="center" justify="space-between">
          <Heading size="md">Upcoming Appointments</Heading>
          <Button px="12" color="brand.400" variant="ghost">
            See All
          </Button>
        </Flex>
        <Flex gap="12" pt="12" direction="column">
          {upcAppointments.map((doc, i) => (
            <Flex borderRadius="8" bg="gray.100" flexGrow="1">
              <Link _hover={{ textDecoration: "none" }} as={NextLink} href="#">
                <Flex align="center">
                  <Center p="12">
                    <Image borderRadius="8" width="14" src={doc.photo} />
                  </Center>
                  <Flex
                    justify="space-around"
                    gap="2"
                    flexGrow="1"
                    direction="column"
                    maxW="64"
                  >
                    <Heading size="xs">{doc.name}</Heading>
                    <Text color="black.gray" fontSize="xs">
                      {doc.profession} | {doc.appTime}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* recommended section 👇🏻*/}
      <Flex p="18" pt="2" direction="column">
        <Flex align="center" justify="space-between">
          <Heading size="md">Recommended Doctors</Heading>
          <Button px="12" color="brand.400" variant="ghost">
            See All
          </Button>
        </Flex>
        <Flex gap="12" pt="12" direction="column">
          {recDoctors.map((doc, i) => (
            <Flex borderRadius="8" bg="gray.100" flexGrow="1">
              <Link _hover={{ textDecoration: "none" }} as={NextLink} href="#">
                <Flex align="center">
                  <Center p="12">
                    <Image borderRadius="8" width="14" src={doc.photo} />
                  </Center>
                  <Flex
                    justify="space-around"
                    gap="2"
                    flexGrow="1"
                    direction="column"
                    maxW="64"
                  >
                    <Heading size="xs">{doc.name}</Heading>
                    <Text color="black.gray" fontSize="xs">
                      {doc.profession} | {doc.availability}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  </Flex>
);

export default DashboardContent;
