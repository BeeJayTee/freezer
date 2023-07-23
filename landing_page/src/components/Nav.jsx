import { Box, Flex, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logos/logo-new.png";

const Nav = () => {
  return (
    <Box
      as="section"
      py={[2, 4]}
      px={[4, 16, 32]}
      mx={"auto"}
      bg={"brand.green"}
      boxShadow={"md"}
    >
      <Flex align={"center"} justify={"space-between"} maxW={"1400px"}>
        <Box w={"fit-content"}>
          <Link href="/">
            <Image src={logo} maxW={["75px", "100px"]} />
          </Link>
        </Box>
        <Box>
          <Link
            href="https://freezer-app.thebrandontucker.com/"
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
