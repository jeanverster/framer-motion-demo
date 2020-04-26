import { Flex } from "@chakra-ui/core";
import * as React from "react";
import RevealBox from "../components/RevealBox";
import H1 from "../typography/H1";

type ScrollDemoProps = {};

const ScrollDemo: React.FC<ScrollDemoProps> = () => {
  return (
    <Flex flexDirection="column" justify="center" align="center" p={4}>
      <RevealBox
        pl="72px"
        mx={4}
        mb={4}
        bg="#90f1ef"
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="flex-start"
      >
        <H1 color="black" fontSize="72px">
          Hello!
        </H1>
        <H1 color="black" fontSize="48px">
          This is just a box.
        </H1>
        <H1 color="black" fontSize="48px">
          But with Framer Motion we can...
        </H1>
      </RevealBox>
      <RevealBox
        pl="72px"
        mx={4}
        mb={4}
        bg="#ff70a6"
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="flex-start"
      >
        <H1 color="white" fontSize="72px">
          Create
        </H1>
        <H1 color="white" fontSize="72px">
          Professional
        </H1>
        <H1 color="white" fontSize="72px">
          Looking
        </H1>
        <H1 color="white" fontSize="72px">
          Animations
        </H1>
      </RevealBox>
      <RevealBox
        pl="72px"
        mx={4}
        mb={4}
        bg="#ffe066"
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="flex-start"
      >
        <H1 color="black" fontSize="72px">
          With
        </H1>
        <H1 color="black" fontSize="72px">
          Minimal
        </H1>
        <H1 color="black" fontSize="72px">
          Effort!
        </H1>
      </RevealBox>
      <RevealBox
        pl="72px"
        mx={4}
        mb={4}
        bg="#35a7ff"
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="flex-start"
      >
        <H1 color="white" fontSize="72px">
          Pretty
        </H1>
        <H1 color="white" fontSize="72px">
          Cool
        </H1>
        <H1 color="white" fontSize="72px">
          Huh?
        </H1>
      </RevealBox>
    </Flex>
  );
};

export default ScrollDemo;
