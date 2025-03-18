import { NextPageWithLayout } from "../../types"
import Layout from  "@/components/Layout/Nested"

 
const Project: NextPageWithLayout = () => {
  return (
    <div>
      <h1>TODO: project</h1>
    </div>
  )
}

Project.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Project