import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import background from "../assets/backgrounds/shapes.svg";

const CallToAction = () => {
  return (
    <Box
      as="section"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundSize={["auto", "auto", "auto", "cover"]}
      backgroundRepeat="repeat"
      minHeight={"500px"}
    >
      <Flex
        justify={"center"}
        align={"center"}
        minH={"500px"}
        direction={"column"}
        maxW={"75%"}
        mx={"auto"}
        textAlign={"center"}
      >
        <Heading as={"h2"} fontSize={["2xl", "4xl", "6xl"]}>
          Looking to Imporve Your Home Organization?
        </Heading>
        <Heading as={"h3"} fontWeight={"light"} fontSize={["md", "xl"]} mt={4}>
          Checkout the Freezer App
        </Heading>
        <Link
          href="https://freezer-app.thebrandontucker.com/"
          fontSize={["sm", "sm", "md", "lg"]}
          border={["1px", "2px"]}
          color={"brand.darkGreen"}
          fontWeight={"bold"}
          px={[5, 8]}
          py={[3, 4]}
          _hover={{ bg: "brand.darkGreen", color: "white" }}
          borderRadius={"sm"}
          mt={8}
        >
          View App
        </Link>
      </Flex>
    </Box>
  );
};

export default CallToAction;
