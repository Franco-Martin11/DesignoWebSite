import { chakra, Stack, Button, Text, Box, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const FormReference = useRef();
  const handleSubmit = () => {
    ev.preventDefault();
    setFormData([...FormReference.current]);
  };
  return (
    <Stack
      maxW="full"
      direction="row"
      p={{ base: 4, md: 10 }}
      bg="#e7816b"
      borderRadius="xl"
      boxShadow="sm"
      wrap="wrap"
    >
      <Box flex="1" margin="auto 0">
        <Heading color="#340000" p={2}>
          Contact Us
        </Heading>
        <Text color="#000" fontSize="lg" px={2}>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </Text>
      </Box>
      <chakra.form
        ref={FormReference}
        onSubmit={(ev) => handleSubmit(ev)}
        flex="1"
        display="flex"
        flexDirection="column"
        gap={10}
        px={{ base: 5, md: 10 }}
        py="5"
      >
        <chakra.input
          py={3}
          color="#fff"
          bg="transparent"
          type="text"
          required
          placeholder="Name"
          _focusVisible={{ outline: 0 }}
          _placeholder={{ opacity: 0.5, color: "#fff" }}
          borderBottom="1px solid #fff"
        />
        <chakra.input
          py={3}
          color="#fff"
          bg="transparent"
          type="text"
          required
          placeholder="Email Addres"
          _focusVisible={{ outline: 0 }}
          _placeholder={{ opacity: 0.5, color: "#fff" }}
          borderBottom="1px solid #fff"
        />
        <chakra.input
          py={3}
          color="#fff"
          bg="transparent"
          type="text"
          required
          placeholder="Phone"
          _focusVisible={{ outline: 0 }}
          _placeholder={{ opacity: 0.5, color: "#fff" }}
          borderBottom="1px solid #fff"
        />
        <chakra.input
          py={3}
          color="#fff"
          bg="transparent"
          type="textarea"
          required
          placeholder="Your message"
          _focusVisible={{ outline: 0 }}
          _placeholder={{ opacity: 0.5, color: "#fff" }}
          borderBottom="1px solid #fff"
        />
        <Button
          fontWeight="light"
          size="md"
          w="fit-content"
          alignSelf={{ base: "center", md: "flex-end" }}
          variant="solid"
        >
          Send Message
        </Button>
      </chakra.form>
    </Stack>
  );
};

export default ContactForm;
