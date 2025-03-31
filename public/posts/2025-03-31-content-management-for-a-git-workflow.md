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


  ### **Solution**


  I discovered a much more effective workflow, which brings together different elements working in harmony:


  1. A [CMS]((https://decapcms.org/)) injected via script and exposed to a specific route

  2. A CI/CD pipeline that triggers the deployment whenever the repository changes.

  3. A static site generator (in this case, Next.js SSG) that reads the data from the repository and generates pages at build time.

  4. A hosting service responsible for building and deploying the website.


  ![](https://res.cloudinary.com/dmgymopan/image/upload/v1743410065/marcelloluatti.com/Screenshot_2025-03-31_alle_10.34.15_niaxeq.png)


  This approach not only simplifies maintenance but also improves scalability, making it a powerful solution for static website generation.
---
