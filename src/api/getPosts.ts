import { Project } from "@/types";
import matter from 'gray-matter'
import fs from 'fs'

type GetPostsProps = () => Project[]
type Tag = {
  name: string
}

export const getPosts: GetPostsProps = () => {
  const posts: string[] = fs.readdirSync(`./public/posts/`)
  const results = posts.map((fileName) => {
    const project = matter(fs.readFileSync(`./public/posts/${fileName}`, 'utf8')).data
    return {
      title: project.title,
      slug: project.slug,
      description: project.description,
      shortDescription: project.shortDescription,
      content: project.content,
      tags: project.tags?.map((tag: Tag) => tag.name) ?? [], 
      image: {
        src: project.image.split('public/')[1],
        description: 'description', // TODO
        alt: 'Alt', // TODO
      },
    }
  })
  return results
};