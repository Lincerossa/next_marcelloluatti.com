import { NextPageWithLayout } from "../../types"
import Layout from "@/components/Layout/Nested"

 
const Posts: NextPageWithLayout = () => {
  return (
    <div>
      <h1>TODO: posts</h1>
    </div>
  )
}

Posts.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Posts