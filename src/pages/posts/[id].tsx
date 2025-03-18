import { NextPageWithLayout } from "../../types"
import Layout from "@/components/Layout/Nested"

 
const Post: NextPageWithLayout = () => {
  return (
    <div>
      <h1>TODO: post</h1>
    </div>
  )
}

Post.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Post