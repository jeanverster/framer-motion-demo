import { Flex } from "@chakra-ui/core";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as React from "react";
import { H4 } from "../typography";

const Container = styled(motion.div)<{ isOn: boolean }>`
  width: 170px;
  height: 100px;
  padding: 10px;
  display: flex;
  cursor: pointer;
  border-radius: 100px;
  ${({ isOn }) =>
    isOn
      ? css`
          background-color: #22cc88;
          justify-content: flex-end;
        `
      : css`
          background-color: #dddddd;
          justify-content: flex-start;
        `}
`;

const Handle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  background-color: white;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
`;

const Toggle: React.FC = () => {
  const [isOn, setOn] = React.useState(false);

  return (
    <Flex
      p={4}
      width="100%"
      height="100vh"
      align="center"
      justify="center"
      flexDirection="column"
    >
      <Container animate onClick={() => setOn(!isOn)} isOn={isOn}>
        <Handle animate />
      </Container>
      <H4 animate mt={4} fontSize="32px" opacity={isOn ? 1 : 0.5}>
        {isOn ? "On" : "Off"}
      </H4>
    </Flex>
  );
};

export default Toggle;
