---
title: Personal Website
order: 75
description: ssg personal website
shortDescription: personal-website
slug: personal-website
image: https://res.cloudinary.com/dmgymopan/image/upload/v1743163755/marcelloluatti.com/Screenshot_2025-03-28_alle_13.07.49_j8osjz.png
tags:
  - name: ssg
  - name: static cms
  - name: Next.js
  - name: github actions
content: >-
  The goal of the project was to **simplify content management for a static
  website**. To achieve this, I adopted a **JSON-based approach**, defining
  everything from the route structure to the props injected into each component.


  ```

  const data = {
    routes: [
      {
        slug: '/',
        label: 'Marcello Luatti',
        layout: 'full',
        metaTitle: 'Marcello Luatti',
        metaDescription: 'Front End Engineer based by the Lake Como',
        metaImage: 'https://avatars.githubusercontent.com/u/16242899?v=4?s=400',
        hidden: true,
        componentIds: ['R3F_homepage'],
      },
      {
        slug: 'about',
        label: 'About',
        metaTitle: 'Marcello Luatti | About',
        metaDescription: 'Marcello Luatti | About',
        metaImage: null,
        componentIds: ['RichText_about', 'Image_about'],
      },
      ...
  ```


  \

  Then, in a single dynamic route:\

  \

  `src/pages/[...dynamic].js`


  ```

  export async function getStaticPaths() {
    const { routes } = data
    return {
      paths: routes.map(({ slug }) => ({ params: {
        dynamic: slug.split('/'),
      } })),
      fallback: false,
    }
  }


  export async function getStaticProps({ params: { dynamic } }) {
    const { routes, components } = data
    const route = routes.find((e) => e.slug === dynamic.join('/'))
    return {
      props: {
        route,
        components: route.componentIds.map((component) => components.find(({ id }) => id === component)),
      },
    }
  }

  ```


  \

  \

  tech stack used:


  ```

  Next.js (ssg)

  Styled-components

  Github actions

  netlify

  ```




  ![](https://res.cloudinary.com/dmgymopan/image/upload/v1743163755/marcelloluatti.com/Screenshot_2025-03-28_alle_13.07.49_j8osjz.png)
---
