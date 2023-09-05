import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const LoginForm = () => {
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

        <Checkbox defaultChecked colorScheme="brand" mt="4">
          <Text fontSize="sm">Keep me signed in</Text>
        </Checkbox>

        <Button w="100%" mt="24" size="lg" colorScheme="brand" type="submit">
          Sign in
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
