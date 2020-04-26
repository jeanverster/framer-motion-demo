import { useAnimation, Variants } from "framer-motion";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import MotionBox, { MotionBoxProps } from "./MotionBox";

const container: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const variants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.6 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const RevealBox: React.FC<MotionBoxProps> = ({ children, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const childrenWithProps = React.Children.map(children, (child: any) =>
    React.cloneElement(child, { variants })
  );

  return (
    <MotionBox
      initial="hidden"
      animate={controls}
      variants={container}
      ref={ref}
      {...rest}
    >
      {childrenWithProps}
    </MotionBox>
  );
};

export default RevealBox;
