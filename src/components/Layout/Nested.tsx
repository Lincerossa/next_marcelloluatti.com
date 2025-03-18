"use client" 

import { PropsWithChildren, FC } from "react"
import { Wrapper } from "./styled"

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Wrapper>
      TODO: nested layout (menu and footer)
      {children}
    </Wrapper>
  )
}

export default Layout