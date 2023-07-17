import { Box, Heading, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(1)}
  50% { transform: scale(1.05)}
  100% { transform: scale(1)}
`;

const animation = `${animationKeyframes} 4s ease-in-out infinite`;

const Header = () => {
  return (
    <Box as="section" position={"relative"} zIndex={-1}>
      <Box
        as={motion.div}
        animation={animation}
        h={"50vw"}
        w={"50vw"}
        bg={"brand.darkGreen"}
        opacity={"75%"}
        rounded={"full"}
        position={"absolute"}
        left={"60%"}
        top={[-50, -75, -200]}
        ml={"-30vw"}
      ></Box>
      <Box
        h={"30vw"}
        w={"30vw"}
        bg={"brand.green"}
        rounded={"full"}
        position={"absolute"}
        boxShadow={"md"}
        top={128}
        left={32}
      ></Box>
      <Box
        position={"absolute"}
        w={"full"}
        px={[4, 16, 32]}
        top={100}
        zIndex={"100"}
      >
        <Box display={"flex"} height={"100%"}>
          <Heading
            fontSize={["5xl", "6xl", "7xl", "8xl"]}
            color={"brand.dark"}
            mt={["-50px", "-50px", 0]}
            textAlign={["center", "center", "right"]}
            pl={[0, 0, 0, 0, 64]}
            pt={[0, 0, 0, 0, 16]}
          >
            This is a Freezer Inventory App
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
