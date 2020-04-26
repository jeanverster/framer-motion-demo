import styled from '@emotion/styled'
import { color, compose, space, typography } from 'styled-system'
import { TextProps } from './index'

const props = compose(space, color, typography)

const P = styled.p<TextProps>(props)

export default P

P.defaultProps = {
  fontSize: 2,
  color: 'text',
  fontWeight: 'normal'
}
