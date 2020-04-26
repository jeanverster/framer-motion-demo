import { Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { AnimateSharedLayout, motion } from "framer-motion";
import * as React from "react";
import { color } from "styled-system";
import { H1 } from "../typography";

type BouncyMenuProps = {};

const items = [
  { title: "One", color: "#ffe066" },
  { title: "Twooo", color: "#35a7ff" },
  { title: "Threeeee", color: "#ff70a6" },
  { title: "Four", color: "#90f1ef" },
];

const Underline = styled(motion.div)<{ bg: string }>`
  ${color};
  bottom: 5px;
  width: 100%;
  height: 10px;
  position: absolute;
  border-radius: 8px;
`;

const BouncyMenu: React.FC<BouncyMenuProps> = () => {
  const [active, setActive] = React.useState<number | undefined>();
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <AnimateSharedLayout>
        {items.map(({ title, color }, i) => {
          const selected = active === i;
          return (
            <Flex pos="relative" justifyContent="center" alignItems="center">
              <H1
                animate
                mr={4}
                fontWeight="bold"
                onClick={() => setActive(i)}
                color={selected ? color : "black"}
                fontSize={selected ? "72px" : "32px"}
              >
                {title}
              </H1>
              {selected && <Underline layoutId="underline" bg={color} />}
            </Flex>
          );
        })}
      </AnimateSharedLayout>
    </Flex>
  );
};

export default BouncyMenu;
