'use client'
import * as Styles from './index.styles'

export const Header = ({title}) => {
  return (
    <Styles.Wrapper>
        <Styles.FormTitle>{title}</Styles.FormTitle>
    </Styles.Wrapper>
  )
}
