import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import RegistrationForm from "components/organisms/RegisterForm";
import Logo from "svg/Logo";

const RegisterPage = () => {
  return (
    <Flex h="100vh" justifyContent="space-between" width="100%">
      <Center w={{ base: "100%", md: "60%" }}>
        <Flex w={{ base: "90%", md: "55%" }} flexDirection="column">
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
        display={{ base: "none", md: "block" }}
      ></Center>
    </Flex>
  );
};

export default RegisterPage;
