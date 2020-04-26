import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, compose, space, typography } from 'styled-system'
import { TextProps } from './index'

const props = compose(space, color, typography)

const H3 = styled(motion.h3)<TextProps>(props)

export default H3

H3.defaultProps = {
  fontSize: 4,
  color: 'text',
  fontWeight: 'normal'
}
