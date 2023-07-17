import { Box, Flex, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logos/logo-new.png";

const Nav = () => {
  return (
    <Box
      as="section"
      py={[8]}
      px={[4, 16, 32]}
      mx={"auto"}
      bg={"brand.green"}
      boxShadow={"md"}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        // direction={["column", "column", "row"]}
        maxW={"1400px"}
      >
        <Box w={"fit-content"}>
          <Link href="/">
            <Image src={logo} maxW={["75px", "100px"]} />
          </Link>
        </Box>
        <Box>
          <Link
            href="#"
            fontSize={["sm", "sm", "md", "lg"]}
            border={["1px", "2px"]}
            borderColor={"white"}
            color={"white"}
            fontWeight={"bold"}
            px={[5, 8]}
            py={[3, 4]}
            _hover={{ bg: "brand.darkGreen" }}
            borderRadius={"sm"}
          >
            View App
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
