import { PropsWithChildren, FC } from "react"
import { Wrapper } from "./styled"
const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Wrapper>
      TODO: root layout (mouse magic)
      {children}
    </Wrapper>
  )
}

export default Layout