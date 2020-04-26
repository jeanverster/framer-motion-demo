import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, compose, space, typography } from 'styled-system'
import { TextProps } from './index'

const props = compose(space, color, typography)

const H4 = styled(motion.h4)<TextProps>(props)

export default H4

H4.defaultProps = {
  fontSize: 3,
  color: 'text',
  fontWeight: 'lighter'
}
