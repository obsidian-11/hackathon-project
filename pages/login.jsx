import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import LoginForm from "components/organisms/login-form/LoginForm";
import NextLink from "next/link";
import Logo from "svg/Logo";

const LoginPage = () => {
  return (
    <Flex h="100vh" justifyContent="space-between" width="100%">
      <Center w={{ base: "100%", md: "60%" }}>
        <Flex w={{ base: "90%", md: "55%" }} flexDirection="column">
          <Logo />
          <Heading pt="24" size="xl">
            Welcome Back
          </Heading>
          <Text color="black.light" fontSize="md" mt="16" fontWeight="500">
            New here?{" "}
            <Link as={NextLink} color="brand.400" href="/register">
              Create an account
            </Link>
          </Text>
          <Box pt="24" flexDirection="column">
            <LoginForm />
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

export default LoginPage;
