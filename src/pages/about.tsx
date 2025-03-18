import { NextPageWithLayout } from "../types"
import Layout from "@/components/Layout"

 
const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1>TODO: about</h1>
    </div>
  )
}

Page.getLayout = Layout


export default Page