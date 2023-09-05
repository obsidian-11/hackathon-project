import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Box mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="18">
          <FormLabel fontWeight="700" fontSize="xs">
            Name
          </FormLabel>
          <Input
            px="8"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired mb="18">
          <FormLabel fontWeight="700" fontSize="xs">
            Email
          </FormLabel>
          <Input
            px="8"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired mb="18">
          <FormLabel fontWeight="700" fontSize="xs">
            Password
          </FormLabel>
          <Input
            px="8"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired mb="4">
          <FormLabel fontWeight="700" fontSize="xs">
            Confirm Password
          </FormLabel>
          <Input
            px="8"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </FormControl>

        <Checkbox colorScheme="brand" mt="24">
          <Text fontSize="sm">
            I agree to all the{" "}
            <Link color="brand.400" href="#terms">
              Terms
            </Link>{" "}
            and{" "}
            <Link color="brand.400" href="#policy">
              Privacy Policy
            </Link>
          </Text>
        </Checkbox>

        <Button w="100%" mt="24" size="lg" colorScheme="brand" type="submit">
          Register
        </Button>

        <Text fontSize="md" mt="16" fontWeight="500">
          Already have an account?{" "}
          <Link as={NextLink} color="brand.400" href="/login">
            Sign in
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default RegistrationForm;
