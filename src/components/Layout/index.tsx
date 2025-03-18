import { ReactElement } from "react"

const Layout = (page: ReactElement) => {
    return (
      <div>
        wrapper
        {page}
      </div>
    )
  }

export default Layout