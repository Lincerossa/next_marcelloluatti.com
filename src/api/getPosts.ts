import { Post } from "@/types";
import matter from 'gray-matter'
import fs from 'fs'

type GetPosts = () => Post[]
type Tag = {
  name: string
}

export const getPosts: GetPosts = () => {
  const posts: string[] = fs.readdirSync(`./public/posts/`)
  const results = posts.map((fileName) => {
    const post = matter(fs.readFileSync(`./public/posts/${fileName}`, 'utf8')).data
    return {
      title: post.title,
      slug: post.slug,
      description: post.description,
      shortDescription: post.shortDescription,
      content: post.content,
      tags: post.tags?.map((tag: Tag) => tag.name) ?? [], 
      image: {
        src: post.image,
        description: 'description', // TODO
        alt: 'Alt', // TODO
      },
    }
  })
  return results
};