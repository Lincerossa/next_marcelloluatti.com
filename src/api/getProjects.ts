import { Project } from "@/types";
import matter from 'gray-matter'
import fs from 'fs'

type GetProjects = () => Project[]
type Tag = {
  name: string
}

export const getProjects: GetProjects = () => {
  const projects: string[] = fs.readdirSync(`./public/projects/`)
  const results = projects.map((fileName) => {
    const project = matter(fs.readFileSync(`./public/projects/${fileName}`, 'utf8')).data

    console.log('project', project)
    return {
      title: project.title,
      slug: project.slug,
      description: project.description,
      shortDescription: project.shortDescription,
      content: project.content,
      order: project.order,
      tags: project.tags?.map((tag: Tag) => tag.name) ?? [], 
      image: {
        src: project.image,
        description: 'description', // TODO
        alt: 'Alt', // TODO
      },
    }
  }).sort((a, b) => a.order > b.order ? -1 : 1)
  return results
};