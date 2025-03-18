import { DynamicParams } from "@/types"

export async function generateStaticParams() {
  // TODO: read from fs at build time
  return [
    { slug: 'first-project' },
    { slug: 'second-project' },
  ] 
}


export default async function Page({params}: DynamicParams) {
  const { slug } = await params
  return <h1>TODO: project {slug}</h1>
}