import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";

export const systemProps = compose(
  space,
  layout,
  color,
  flexbox,
  background,
  border,
  position,
  shadow
);

export type MotionBoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps & {
    color?: string;
  };

const MotionBox = styled(motion.div)<MotionBoxProps>`
  ${systemProps};
  box-sizing: border-box;
`;

export default MotionBox;

MotionBox.defaultProps = {
  justifyContent: "center",
  position: "relative",
  display: "flex",
  flexDirection: "column",
};
