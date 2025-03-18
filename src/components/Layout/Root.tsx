"use client" 

import { PropsWithChildren, FC } from "react"
import { Wrapper } from "./styled"
import { ThemeProvider } from "styled-components"
import theme from "@/styles/theme"

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        TODO: root layout (mouse magic)
        {children}
      </Wrapper>
      </ThemeProvider>
  )
}

export default Layout