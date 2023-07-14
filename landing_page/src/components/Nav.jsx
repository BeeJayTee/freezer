import { Box, Flex, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logos/logo-new.png";

const Nav = () => {
  return (
    <Box
      as="section"
      py={[4, 4, 8]}
      px={[4, 16, 32]}
      mx={"auto"}
      bg={"brand.green"}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "row"]}
        maxW={"1400px"}
      >
        <Box w={"fit-content"} mb={[8, 8, 0]}>
          <Link href="/">
            <Image src={logo} maxW={["100px", "100px"]} />
          </Link>
        </Box>
        <Box>
          <Link
            href="#"
            fontSize={"lg"}
            border={"2px"}
            borderColor={"white"}
            color={"white"}
            fontWeight={"bold"}
            px={8}
            py={4}
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
