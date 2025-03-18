import { NextPageWithLayout } from "../types"
import Layout from "@/components/Layout/Nested"

 
const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1>TODO: about</h1>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Page