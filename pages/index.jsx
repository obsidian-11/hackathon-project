import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import RegistrationForm from "components/organisms/registration-form/RegisterForm";
import Head from "next/head";
import { fetchPageData } from "serverFunctions/fetchPageData";
import Logo from "svg/Logo";

const revalidateTime = 10;

export default function Home({}) {
  return (
    <>
      <Head>
        <title>HealthCare</title>
        <link rel="icon" href="/next.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Flex h="100vh" justifyContent="space-between" width="100%">
        <Center w="60%">
          <Flex w="55%" flexDirection="column">
            <Logo />
            <Heading pt="24" size="xl">
              Create your account
            </Heading>
            <Box pt="24" flexDirection="column">
              <RegistrationForm />
            </Box>
          </Flex>
        </Center>
        <Center
          bgImage="url('assets/onboarding.jpeg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          w="40%"
        ></Center>
      </Flex>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetchPageData();

  if (res?.error) {
    return {
      props: {
        commonsData: [],
      },
      revalidate: revalidateTime,
    };
  }

  const [commons] = res;

  return {
    props: {
      //   commonsData: commons.data.data.attributes.Header,
      commonsData: {},
    },
    revalidate: revalidateTime,
  };
};
