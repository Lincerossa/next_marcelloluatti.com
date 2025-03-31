---
title: Content Management for a Git workflow
order: 40
description: Intuitive workflow for content teams
shortDescription: Intuitive workflow for content teams
slug: cms-for-git-workflow
image: https://res.cloudinary.com/dmgymopan/image/upload/v1743410103/marcelloluatti.com/Screenshot_2025-03-31_alle_10.34.52_rbpfsi.png
tags:
  - name: cms
  - name: static website
  - name: git workflow
  - name: versioning
content: >-
  In the previous version of this site, I used a JSON schema-based UI pattern to
  create and inject data into the frontend of the application. Initially, this
  solution was highly flexible and easy to scale. \

  \

  However, over time, its limitations became clear: it was not easily maintainable and didn’t scale as expected.


  ### **SOLUTION**


  I discovered a much more effective workflow, which brings together different elements working in harmony:


  1. A [CMS]((https://decapcms.org/)) injected via script and exposed to a specific route

  2. A CI/CD pipeline that triggers the deployment whenever the repository changes.

  3. A static site generator (in this case, Next.js SSG) that reads the data from the repository and generates pages at build time.

  4. A hosting service responsible for building and deploying the website.


  This approach not only simplifies maintenance but also improves scalability, making it a powerful solution for static website generation.


  ### **CONFIGURATION**


  The only code-side thing to consider when it comes to make all these system to communicate together are a couple ones:


  \

  **1. CMS config.yml** 


  ```

  backend:
    name: git-gateway
    repo: // here you have to type the repo url
    branch: main
  media_folder: 'public/images/uploads'

  public_folder: 'public/images/uploads'

  local_backend: true

  collections:
    - label: 'About'
      name: 'about'
      folder: 'public/about/'
      create: true
      slug: 'index'
      fields:
        - { label: 'Title', name: 'title', widget: 'string' }
        - { label: 'Content', name: 'content', widget: 'markdown' }
        - label: 'Storyline'
          name: 'storyline'
          widget: 'list'
          summary: '{{fields.name}}'
          fields:
            - { label: Role, name: role, widget: string }
            - { label: Company, name: company, widget: string }
            - { label: Date, name: date, widget: string }
            - { label: Description, name: description, widget: markdown }
            - label: 'Tags'
              name: 'tags'
              widget: 'list'
              summary: '{{fields.name}}'
              fields:
                - { label: Name, name: name, widget: string }
            - { label: 'Image', name: 'image', widget: 'image' }
            - { label: Name, name: name, widget: string }
    - name: 'projects'
      label: 'Projects'
      folder: 'public/projects/'
      create: true
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
      fields:
        - { label: 'Title', name: 'title', widget: 'string' }
        - { label: 'Order', name: 'order', widget: 'number' }
        - { label: 'Description', name: 'description', widget: 'string' }
        - {
            label: 'Short Description',
            name: 'shortDescription',
            widget: 'string',
          }
        - { label: 'Slug', name: 'slug', widget: 'string' }
        - { label: 'Featured Image', name: 'image', widget: 'image' }
        - label: 'Tags'
          name: 'tags'
          widget: 'list'
          summary: '{{fields.name}}'
          fields:
            - { label: Name, name: name, widget: string }
        - { label: 'Content', name: 'content', widget: 'markdown' }
    - name: 'posts'
      label: 'Posts'
      folder: 'public/posts/'
      create: true
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
      fields:
        - { label: 'Title', name: 'title', widget: 'string' }
        - { label: 'Order', name: 'order', widget: 'number' }
        - { label: 'Description', name: 'description', widget: 'string' }
        - {
            label: 'Short Description',
            name: 'shortDescription',
            widget: 'string',
          }
        - { label: 'Slug', name: 'slug', widget: 'string' }
        - { label: 'Featured Image', name: 'image', widget: 'image' }
        - label: 'Tags'
          name: 'tags'
          widget: 'list'
          summary: '{{fields.name}}'
          fields:
            - { label: Name, name: name, widget: string }
        - { label: 'Content', name: 'content', widget: 'markdown' }

  ```




  **2. A way to read the .md produced at the build time:**


  ```

  import fs from 'fs

  import { Project } from "@/types";

  import matter from 'gray-matter'


  type GetProjects = () => Project[]


  type Tag = {
    name: string
  }


  const getProjects: GetProjects = () => {
    return fs.readdirSync(`./public/projects/`).map((fileName) => {
      const projectFile = matter(fs.readFileSync(`./public/projects/${fileName}`, 'utf8')).data
      return getPostData(projectFile)
    }).sort((a, b) => a.order > b.order ? -1 : 1)
  };

  ```
---
