import {
  Box,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { BiLogInCircle } from "react-icons/bi";

const Stats = () => {
  return (
    <Box as="section" mt={16} position={"relative"}>
      <Flex minH={"500px"} direction={["column", "column", "row"]}>
        <Flex
          flexBasis={"50%"}
          bg={"brand.darkGreen"}
          direction={"column"}
          align={"center"}
          pt={16}
          pb={16}
        >
          <Flex direction={"column"} rowGap={8} px={[4, 0]}>
            <Flex align={"center"} gap={[4, 8]}>
              <CircularProgress
                value={80}
                size={["75px", "100px"]}
                color="brand.green"
              >
                <CircularProgressLabel color={"white"}>
                  80%
                </CircularProgressLabel>
              </CircularProgress>
              <Text color={"white"} fontSize={"xl"}>
                More Organized
              </Text>
            </Flex>
            <Flex align={"center"} gap={[4, 8]}>
              <CircularProgress
                value={60}
                size={["75px", "100px"]}
                color="brand.green"
              >
                <CircularProgressLabel color={"white"}>
                  60%
                </CircularProgressLabel>
              </CircularProgress>
              <Text color={"white"} fontSize={"xl"}>
                Grocery Budget Saved
              </Text>
            </Flex>
            <Flex align={"center"} gap={[4, 8]}>
              <CircularProgress
                value={40}
                size={["75px", "100px"]}
                color="brand.green"
              >
                <CircularProgressLabel color={"white"}>
                  40%
                </CircularProgressLabel>
              </CircularProgress>
              <Text color={"white"} fontSize={"xl"}>
                More Free Time
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexBasis={"50%"}
          px={[8, 16, 16, 16, 16, 48]}
          justifyContent={"center"}
          align={["center", "center", "flex-start", "flex-start", "flex-start"]}
          direction={"column"}
          rowGap={4}
          pt={[8, 8, 0, 0, 0]}
        >
          <Heading
            as={"h2"}
            fontWeight={"semibold"}
            fontSize={["2xl", "4xl"]}
            color={"brand.darkGreen"}
          >
            Bring the Family Together... <span id="more-title">More</span>
          </Heading>
          <List fontSize={"lg"} color={"brand.dark"} spacing={3}>
            <ListItem>
              <ListIcon as={BiLogInCircle} color={"brand.green"} />
              Save time when meal planning.
            </ListItem>
            <ListItem>
              <ListIcon as={BiLogInCircle} color={"brand.green"} />
              Always have access to your freezer inventory
            </ListItem>
            <ListItem>
              <ListIcon as={BiLogInCircle} color={"brand.green"} />
              Quickly add and remove items with a click
            </ListItem>
            <ListItem>
              <ListIcon as={BiLogInCircle} color={"brand.green"} />
              Mobile friendly - Use on your phone, tablet, or computer
            </ListItem>
          </List>
        </Flex>
      </Flex>
      <Box
        h={["50px", "50px", "100px"]}
        w={["50px", "50px", "100px"]}
        bg={"brand.green"}
        position={"absolute"}
        top={0}
        right={0}
        borderBottomLeftRadius={"100px"}
      ></Box>
      <Box
        h={"100px"}
        w={"100px"}
        position={"absolute"}
        display={["none", "none", "initial", "initial", "initial"]}
        bottom={0}
        right={0}
        border={"2px"}
        borderColor={"brand.green"}
        borderTopLeftRadius={"100px"}
      ></Box>
      <Box
        h={"50px"}
        w={"50px"}
        position={"absolute"}
        display={["initial", "initial", "none", "none", "none"]}
        top={0}
        left={0}
        border={"2px"}
        borderColor={"brand.green"}
        borderBottomRightRadius={"100px"}
      ></Box>
    </Box>
  );
};

export default Stats;
