import { Project } from "@/types";
import matter from 'gray-matter'
import fs from 'fs'
import { or } from "three/tsl";

type GetProjects = () => Project[]
type Tag = {
  name: string
}

export const getProjects: GetProjects = () => {
  const projects: string[] = fs.readdirSync(`./public/projects/`)
  const results = projects.map((fileName) => {
    const project = matter(fs.readFileSync(`./public/projects/${fileName}`, 'utf8')).data
    return {
      title: project.title,
      slug: project.slug,
      order: project.order,
      description: project.description,
      shortDescription: project.shortDescription,
      content: project.content,
      tags: project.tags?.map((tag: Tag) => tag.name) ?? [], 
      image: {
        src: project.image,
        description: 'description', // TODO
        alt: 'Alt', // TODO
      },
    }
  })
  return results.sort((a, b) => a.order > b.order ? -1 : 1)
};