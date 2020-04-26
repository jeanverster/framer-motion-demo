import styled from "@emotion/styled";
import * as React from "react";
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
  space,
  SpaceProps,
} from "styled-system";

type Props = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps & {
    color?: string;
  };

export const systemProps = compose(
  space,
  layout,
  color,
  flexbox,
  background,
  border
);

const StyledPageWrap = styled.div`
  display: flex;
  ${systemProps};
  box-sizing: border-box;
`;

const PageWrap: React.FC<Props> = ({ children, ...rest }) => {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return <StyledPageWrap {...rest}>{children}</StyledPageWrap>;
};

PageWrap.defaultProps = {
  pb: 4,
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default PageWrap;
