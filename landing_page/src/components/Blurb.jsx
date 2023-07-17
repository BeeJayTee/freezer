import { Box, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Blurb = () => {
  const [isVisible, setIsVisible] = useState(null);

  const handleChange = (e) => {
    if (!isVisible) {
      if (e) {
        setIsVisible(true);
      }
    }
  };

  return (
    <Box
      as="section"
      w={["full", "full", "75%", "50%"]}
      mx={"auto"}
      minH={"500px"}
      px={[4, 4, 0]}
    >
      <VisibilitySensor onChange={(e) => handleChange(e)}>
        <Text visibility={"hidden"}>Poop</Text>
      </VisibilitySensor>
      {isVisible && (
        <Text
          fontSize={["xl", "xl", "2xl"]}
          color={"brand.darkGreen"}
          fontWeight={"semibold"}
        >
          <TypeAnimation
            sequence={[
              "Discover the extraordinary convenience of the Freezer App, the ultimate solution for effortlessly managing your home freezer inventory. With this innovative tool at your fingertips, you can stay in complete control of what's stored in your freezer, no matter where you are or when you need to access it.",
            ]}
            wrapper="span"
            cursor={true}
            style={{ display: "inline-block" }}
            speed={75}
          />
        </Text>
      )}
    </Box>
  );
};

export default Blurb;
