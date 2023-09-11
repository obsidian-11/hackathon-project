import {
  Box,
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
    heading: "Nick Fury",
    sub: "Really humble and professional. Impressed by the results.",
    imageSrc: "assets/d1.png",
    category: "4.5 ★",
  },
  {
    heading: "Nick Fury",
    sub: "Really humble and professional. Impressed by the results.",
    imageSrc: "assets/d1.png",
    category: "4.5 ★",
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

const ConsultContent = () => (
  <Flex
    align={{ base: "stretch", lg: "flex-start" }}
    gap="18"
    direction={{ base: "column", lg: "row" }}
  >
    {/* main 👇🏻 */}
    <Flex gap="32" w={{ base: "100%", lg: "68%" }} direction="column">
      {/* indicator section 👇🏻 */}
      <Flex direction="column">
        <Heading size="lg">Info</Heading>

        <Flex wrap="wrap" gap="16" justifyContent="space-between" pt="16">
          <Card flexGrow="1">
            <CardBody>
              <Flex align="center">
                <Flex
                  justify="space-around"
                  pl="16"
                  flexGrow="1"
                  direction="column"
                  gap="4"
                >
                  <Heading size="sm">Apollo Hospital</Heading>
                  <Text maxW="60" fontSize="sm">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Text>
                </Flex>
                <Box>
                  <Image borderRadius="12" src="assets/map.jpg" />
                </Box>
              </Flex>
            </CardBody>
          </Card>
          <Card flexGrow="1">
            <CardBody>
              <Flex height="100%" align="center">
                <Flex
                  justify="center"
                  pl="16"
                  flexGrow="1"
                  direction="column-reverse"
                  gap="8"
                >
                  <Heading size="sm">$100 per session</Heading>
                  <Text fontSize="sm">Price</Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Card flexGrow="1">
            <CardBody>
              <Flex height="100%" align="center">
                <Flex
                  justify="center"
                  pl="16"
                  flexGrow="1"
                  direction="column-reverse"
                  gap="8"
                >
                  <Heading size="sm">5 Years</Heading>
                  <Text fontSize="sm">Experience</Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Flex>

      {/* activity section 👇🏻 */}
      <Flex direction="column">
        <Heading size="lg">Check Availability</Heading>
        <Card mt="18" p="28" flexGrow="1">
          <Flex justify="space-between">
            <Flex
              borderRight="2px solid #EDF2F7"
              direction="column"
              flexBasis="65%"
              pr="48"
            >
              <Flex justify="space-between">
                <Text fontWeight="bold">July 2023</Text>
                <Flex gap="24" justifyContent="space-between">
                  <Text fontSize="lg" fontWeight="bold">{`←`}</Text>
                  <Text fontSize="lg" fontWeight="bold">{`→`}</Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex gap="24" flexBasis="35%" align="center" direction="column">
              <Text fontWeight="bold">Available Slots</Text>
              <Flex gap="24" direction="column">
                <Box>
                  <Text fontWeight="500" color="gray.600">
                    12:00
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" color="gray.600">
                    16:00
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" color="gray.600">
                    18:00
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" color="gray.600">
                    22:00
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      {/* articles section 👇🏻 */}
      <Flex direction="column">
        <Flex justify="space-between">
          <Heading size="lg">Reviews</Heading>
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
                      <Center>
                        <Image
                          borderRadius="8"
                          width="16"
                          src={article.imageSrc}
                        />
                      </Center>
                    </Center>
                    <Flex
                      justify="space-between"
                      gap="2"
                      px="12"
                      flexGrow="1"
                      direction="column"
                      maxW="64"
                    >
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
    <Card
      p="24"
      flexGrow="1"
      mt={{ base: 0, md: "48" }}
      bg="white"
      direction="column"
      align="center"
      w={{ base: "100%", lg: "32%" }}
    >
      <Flex width="100%" justify="space-between">
        <Flex gap="4">
          <Text color="gray.600" fontWeight="bold">
            4.6
          </Text>
          <Text fontWeight="bold" color="brand.400">
            ★
          </Text>
        </Flex>
        <Flex gap="4">
          <Text color="gray.600" fontWeight="bold">
            1.2 Km
          </Text>
          <Text fontWeight="bolder" color="brand.400">
            𖡡
          </Text>
        </Flex>
      </Flex>
      <Flex w="100%" gap="12" align="center" mt="12" direction="column">
        <Box position="relative">
          <Image borderRadius="100%" width="20" src="assets/d1.png" />
          <div id="online-dot"></div>
        </Box>
        <Flex align="center" direction="column">
          <Heading fontWeight="bold" size="md">
            Dr Mike Ross
          </Heading>
          <Text fontWeight="600" color="gray.500" fontSize="sm">
            Dietition
          </Text>
        </Flex>
        <Flex gap="28">
          <Center borderRadius="8" p="12" background="green.100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g id="IoChatbubbleEllipsesSharp">
                <path
                  id="Vector"
                  d="M29.7012 12.9075C29.0549 9.86688 27.3412 7.09938 24.8749 5.115C22.3529 3.09707 19.2187 1.99841 15.9887 2C12.1812 2 8.62494 3.46688 5.96619 6.13063C3.39682 8.70813 1.98869 12.1113 1.99994 15.7106C2.00003 18.3496 2.77477 20.9304 4.22807 23.1331L4.49994 23.5113L2.99994 30L10.1749 28.215C10.1749 28.215 10.3187 28.2631 10.4249 28.3038C10.5312 28.3444 11.4456 28.695 12.4156 28.9663C13.2218 29.1913 14.8993 29.5288 16.2137 29.5288C19.9418 29.5288 23.4231 28.085 26.0156 25.4625C28.5849 22.8606 29.9999 19.4013 29.9999 15.7181C30.0001 14.7733 29.9 13.8312 29.7012 12.9075ZM9.99994 18C9.60438 18 9.2177 17.8827 8.8888 17.6629C8.55991 17.4432 8.30356 17.1308 8.15219 16.7654C8.00081 16.3999 7.9612 15.9978 8.03837 15.6098C8.11554 15.2219 8.30603 14.8655 8.58573 14.5858C8.86544 14.3061 9.2218 14.1156 9.60976 14.0384C9.99773 13.9613 10.3999 14.0009 10.7653 14.1522C11.1308 14.3036 11.4431 14.56 11.6629 14.8889C11.8826 15.2178 11.9999 15.6044 11.9999 16C11.9999 16.5304 11.7892 17.0391 11.4142 17.4142C11.0391 17.7893 10.5304 18 9.99994 18ZM15.9999 18C15.6044 18 15.2177 17.8827 14.8888 17.6629C14.5599 17.4432 14.3036 17.1308 14.1522 16.7654C14.0008 16.3999 13.9612 15.9978 14.0384 15.6098C14.1155 15.2219 14.306 14.8655 14.5857 14.5858C14.8654 14.3061 15.2218 14.1156 15.6098 14.0384C15.9977 13.9613 16.3999 14.0009 16.7653 14.1522C17.1308 14.3036 17.4431 14.56 17.6629 14.8889C17.8826 15.2178 17.9999 15.6044 17.9999 16C17.9999 16.5304 17.7892 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 15.9999 18ZM21.9999 18C21.6044 18 21.2177 17.8827 20.8888 17.6629C20.5599 17.4432 20.3036 17.1308 20.1522 16.7654C20.0008 16.3999 19.9612 15.9978 20.0384 15.6098C20.1155 15.2219 20.306 14.8655 20.5857 14.5858C20.8654 14.3061 21.2218 14.1156 21.6098 14.0384C21.9977 13.9613 22.3999 14.0009 22.7653 14.1522C23.1308 14.3036 23.4431 14.56 23.6629 14.8889C23.8826 15.2178 23.9999 15.6044 23.9999 16C23.9999 16.5304 23.7892 17.0391 23.4142 17.4142C23.0391 17.7893 22.5304 18 21.9999 18Z"
                  fill="#38A169"
                />
              </g>
            </svg>
          </Center>
          <Center borderRadius="8" p="12" background="green.100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <g id="IoCall">
                <path
                  id="Vector"
                  d="M24.9375 29.9999C23.7175 29.9999 22.0037 29.5587 19.4375 28.1249C16.3168 26.3749 13.9031 24.7593 10.7993 21.6637C7.80684 18.673 6.35059 16.7368 4.31247 13.028C2.00997 8.84053 2.40247 6.64553 2.84122 5.70741C3.36372 4.58616 4.13497 3.91553 5.13184 3.24991C5.69806 2.87893 6.29726 2.56092 6.92184 2.29991C6.98434 2.27303 7.04247 2.24741 7.09434 2.22428C7.40372 2.08491 7.87247 1.87428 8.46622 2.09928C8.86247 2.24803 9.21622 2.55241 9.76997 3.09928C10.9056 4.21928 12.4575 6.71366 13.03 7.93866C13.4143 8.76428 13.6687 9.30928 13.6693 9.92053C13.6693 10.6362 13.3093 11.188 12.8725 11.7837C12.7906 11.8955 12.7093 12.0024 12.6306 12.1062C12.155 12.7312 12.0506 12.9118 12.1193 13.2343C12.2587 13.8824 13.2981 15.8118 15.0062 17.5162C16.7143 19.2205 18.5881 20.1943 19.2387 20.333C19.575 20.4049 19.7593 20.2962 20.4043 19.8037C20.4968 19.733 20.5918 19.6599 20.6912 19.5868C21.3575 19.0912 21.8837 18.7405 22.5825 18.7405H22.5862C23.1943 18.7405 23.715 19.0043 24.5775 19.4393C25.7025 20.0068 28.2718 21.5387 29.3987 22.6755C29.9468 23.228 30.2525 23.5805 30.4018 23.9762C30.6268 24.5718 30.415 25.0387 30.2768 25.3512C30.2537 25.403 30.2281 25.4599 30.2012 25.523C29.9381 26.1465 29.6182 26.7444 29.2456 27.3093C28.5812 28.303 27.9081 29.0724 26.7843 29.5955C26.2073 29.8685 25.5758 30.0067 24.9375 29.9999Z"
                  fill="#38A169"
                />
              </g>
            </svg>
          </Center>
          <Center borderRadius="8" p="12" background="green.100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g id="IoVideocam">
                <path
                  id="Vector"
                  d="M29 24.0244C28.72 24.0242 28.4432 23.9652 28.1875 23.8512C28.128 23.8248 28.0713 23.7926 28.0181 23.755L22.8487 20.1162C22.5866 19.9317 22.3726 19.6868 22.2249 19.4023C22.0772 19.1177 22.0001 18.8019 22 18.4813V13.5188C22.0001 13.1981 22.0772 12.8823 22.2249 12.5977C22.3726 12.3132 22.5866 12.0683 22.8487 11.8837L28.0181 8.245C28.0713 8.2074 28.128 8.17516 28.1875 8.14875C28.492 8.01337 28.8255 7.95622 29.1577 7.9825C29.4899 8.00878 29.8103 8.11765 30.0897 8.29922C30.3691 8.48078 30.5988 8.7293 30.7578 9.02217C30.9167 9.31505 31 9.64301 31 9.97625V22.0238C31 22.5542 30.7893 23.0629 30.4142 23.438C30.0391 23.813 29.5304 24.0238 29 24.0238V24.0244ZM16.75 25H5.25C4.12319 24.9988 3.04285 24.5507 2.24608 23.7539C1.4493 22.9571 1.00116 21.8768 1 20.75V11.25C1.00116 10.1232 1.4493 9.04285 2.24608 8.24608C3.04285 7.4493 4.12319 7.00116 5.25 7H16.78C17.8988 7.00132 18.9714 7.44635 19.7625 8.23747C20.5536 9.02859 20.9987 10.1012 21 11.22V20.75C20.9988 21.8768 20.5507 22.9571 19.7539 23.7539C18.9571 24.5507 17.8768 24.9988 16.75 25Z"
                  fill="#38A169"
                />
              </g>
            </svg>
          </Center>
        </Flex>
        <Flex gap="12" w="100%" mt="8" direction="column">
          <Button px="12" colorScheme="brand">
            Book appointment
          </Button>
          <Button px="12" colorScheme="brand" variant="outline">
            Appointment history
          </Button>
        </Flex>
        <Flex w="100%" align="flex-start" direction="column">
          <Flex gap="8" mt="12" direction="column">
            <Heading size="md">About</Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quo nemo deleniti, dolorum earum voluptate inventore autem
              deserunt. Assumenda, ut. Minus ab doloremque adipisci cumque quod
              officia voluptatum cupiditate suscipit!
            </Text>
          </Flex>
          <Flex w="100%" gap="8" mt="12" direction="column">
            <Heading size="md">Similar Doctors</Heading>

            <Flex w="100%" justify="space-between" mt="12" gap="12">
              <Flex gap="4" align="center" direction="column">
                <Image borderRadius="8" width="16" src="assets/d1.png" />
                <Text fontSize="sm" color="gray.500" fontWeight="bold">
                  Dr Harvey
                </Text>
              </Flex>
              <Flex gap="4" align="center" direction="column">
                <Image borderRadius="8" width="16" src="assets/d1.png" />
                <Text fontSize="sm" color="gray.500" fontWeight="bold">
                  Dr Harvey
                </Text>
              </Flex>
              <Flex gap="4" align="center" direction="column">
                <Image borderRadius="8" width="16" src="assets/d1.png" />
                <Text fontSize="sm" color="gray.500" fontWeight="bold">
                  Dr Harvey
                </Text>
              </Flex>
              <Flex gap="4" align="center" direction="column">
                <Image borderRadius="8" width="16" src="assets/d1.png" />
                <Text fontSize="sm" color="gray.500" fontWeight="bold">
                  Dr Harvey
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  </Flex>
);

export default ConsultContent;
