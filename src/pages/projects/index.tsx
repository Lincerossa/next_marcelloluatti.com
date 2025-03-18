import { NextPageWithLayout } from "../../types"
import Layout from "@/components/Layout/Nested"

 
const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <h1>TODO: projects</h1>
    </div>
  )
}

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Projects