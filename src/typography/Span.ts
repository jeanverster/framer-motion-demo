import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { color, compose, space, typography } from "styled-system";
import { TextProps } from "./index";

const props = compose(space, color, typography);

const Span = styled(motion.span)<TextProps>(props);

export default Span;

Span.defaultProps = {
  color: "text",
  fontSize: "22px",
  fontWeight: "lighter",
};
