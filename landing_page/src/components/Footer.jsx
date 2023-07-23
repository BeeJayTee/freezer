import { Box, Icon, Link, Text } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

const Footer = () => {
  return (
    <Box
      as="section"
      textAlign={"center"}
      bg={"brand.green"}
      py={4}
      color={"white"}
    >
      <Text>
        © 2023 Freezer App. Site and app design and developed by{" "}
        <Link
          href="https://github.com/BeeJayTee"
          isExternal
          fontWeight={"bold"}
        >
          Brandon Tucker <Icon as={BiLinkExternal} />
        </Link>
        .
      </Text>
    </Box>
  );
};

export default Footer;
