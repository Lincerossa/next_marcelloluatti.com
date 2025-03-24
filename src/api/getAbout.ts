import matter from 'gray-matter'
import fs from 'fs'

import { StoryLineProps } from "@/components/StoryLine/types";

type GetAbout = () => {
  content: string;
  items: StoryLineProps['items']
}

type StoryFromFs = {
  role: string;
  company: string;
  date: string;
  description: string;
  image: string;
  tags: {name: string}[]
}

export const getAbout: GetAbout = () => {

  const aboutFolder: string[] = fs.readdirSync(`./public/about/`)
  const results = aboutFolder.map((fileName) => {
    const about = matter(fs.readFileSync(`./public/about/${fileName}`, 'utf8')).data

    return {
      content: about.content,
      items: about.storyline.map((story: StoryFromFs) => ({
        role: story.role,
        company: story.company,
        date: story.date,
        description: story.description,
        image: {
          src: story.image,
          description: 'description', // TODO
          alt: 'Alt', // TODO
        },
        tags: story.tags?.map((tag) => tag.name)
      }))
    }
  })

  return results[0]
}
