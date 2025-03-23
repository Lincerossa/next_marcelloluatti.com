import { StoryLineProps } from "@/components/StoryLine/types";

type GetAbout = () => {
  content: string;
  items: StoryLineProps['items']
}

export const getAbout: GetAbout = () => {
  return {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    items: [
      {
        role: 'Frontend Engineer II',
        company: 'Cloud Academy',
        date: '09/2021 - present',
        description:
          `I work in the Labs development team.
            The front-end part is housed in an NX monorepo with React, Typescript, GraphQL, NextJs, xState,...
            Here some of the main projects:
            2025
            Deployed the new lab assistant ai module with state machine logic. (example: https://platform.qa.com/lab/deploy-a-stateful-application-in-a-kubernetes-cluster/)
            2022-2024
            Full migration of the legacy labs flow to the new fe stack. (example: https://platform.qa.com/lab-challenge/java-challenge-rna-transcription/)
            2023-2024
            Released the new SSR landing pages for labs using Next.js. (example: https://platform.qa.com/lab/introduction-virtual-private-cloud-vpc/)`,
        image: {
          src: 'https://media.licdn.com/dms/image/v2/D4D0BAQG8QuAdE-D4bw/company-logo_100_100/company-logo_100_100/0/1736177840377/qa_north_america_logo?e=1748476800&v=beta&t=t2NnAb6vqXGe4ewRUOQZJEP6Gh2pPs_utdYpxIDl5x0',
          alt: 'Cloud Academy',
        },
      },
      {
        role: 'Frontend Engineer',
        company: 'e-globe solutions AG/SA',
        date: '10/2019 - 09/2021',
        description:
          `Technology: React, Redux, ES6, Node.js, TDD, Continuous integration, Static websites development (Gatsby, Nextjs, ...), Monorepo/Microfrontend, versioning and release 
            07/2020 - updated old legacy product code.
            06/2019 - 08/2021: Business Process Model software: from zero to prod`,
       image: {
          src: 'https://media.licdn.com/dms/image/v2/C4D0BAQFxb6F-_wJSsA/company-logo_100_100/company-logo_100_100/0/1630536779725/e_globe_solutions_ag_logo?e=1748476800&v=beta&t=9vlOQhhXrIuLEFdszQM9BV_u9u1X6CZrfz5yzHB7jsA',
          alt: 'Cloud Academy',
        },
      },
      {
        role: 'Frontend Developer',
        date: '05/2017 - 10/2019',
        company: 'Alkemy',
        description:
          `Technology:
            React, Redux, ES6, Git, Node.js, Prisma, GraphQL, Jest, Continuous integration.
            11/2018: Salini Impregilo - Dashboard tool
            Software architecture has been designed for daily purposes of Salini Management team: adding, modifying and displaying different types of complex data. Challenged by the data quantity, its complexity and the performance issues, we built a GraphQL server layer upon a Prisma server. Thanks to this solution we managed to send to the client the smallest possible payload.
            Authentication is handled by Auth0 and the frontend is built with React and Redux and tested with Jest. The project is based on AWS (Route 53, EC2, S3 Buckets).
            01/2018: Corneliani - E-commerce 
            https://www.corneliani.com/

            In this project we managed to use part of the previous stack, which involved Next.js, React, Redux, Storybook and Jest for testing purposes.
            Compared to the previous project, we built a GraphQL layer in order to solve issue performances (for example the payload server-client) and other side effects while the application was scaling. This layer had the task of handling the communication between the frontend and both Wordpress (for the CMS side) and Magento (the e- commerce side).
            The project is based on AWS.

            09/2017: Fondoambiente - Istitutional website 
            https://www.fondoambiente.it/

            The complexity of this project led us to the definition of the new development stack. This stack included: Node.js, React, Redux, Next.js with Express, Lerna, Styled components, ES6, Headless Wordpress (as the cms for the data input).
            We learnt the importance and the benefits of UI testing, and of adopting the React patters (hoc, context, redux patterns, render props, compose...) to keep the project reusable, simple and readable while application was scaling.
            The project is based on AWS.

            07/2017: Moleskine - Blog https://www.foldmagazine.com/
            This project involved: Laravel, Blade, Sass (with BEM Naming), Webpack.

            Free time activities: https://github.com/Lincerossa/`,
       image: {
          src: 'https://media.licdn.com/dms/image/v2/D4D0BAQFDNNIY0w68Nw/company-logo_100_100/company-logo_100_100/0/1689070542438/alkemy_enabling_evolution_logo?e=1748476800&v=beta&t=OLFZWmrPY7aWpWgBx745uXO-L5jIipGwxUnqwb_Ded4',
          alt: 'Cloud Academy',
        },
      },
      {
        role: 'Lead Frontend Developer',
        date: '12-2016 - 05-2017',
        company: 'Supermoney',
        description: `Redesigned the news section (approx. 30,000 daily views) using ES6 with Gulp task runner integrated via npm scripts. Deployed on 16.01.2017. Developed a new navigation menu and redesigned the homepage. Experimented with Vue.js and created custom Node.js modules (module.exports / require). Explored OOP and functional programming paradigms.`,
       image: {
          src: 'https://media.licdn.com/dms/image/v2/C4D0BAQFZow1nIt8YyA/company-logo_100_100/company-logo_100_100/0/1630493197050/supermoney_eu_logo?e=1748476800&v=beta&t=o6Cb8pFPQwX5dx5LlTZI1LwjaawAQPhYw6-aSu8VlUk',
          alt: 'Supermoney',
        },
      },
      {
        role: 'Frontend Developer',
        date: '05-2016 - 12-2016',
        company: 'Supermoney',
        description: `Gained expertise in frontend technologies (HTML5, CSS3, LESS, Git, JS, jQuery, CSS libraries, npm) and focused on building scalable architectures with Node.js and package managers (Bower, Grunt, Webpack, Gulp). Developed complete user flows and lead generation landing pages. Deployed the company homepage in July 2016.
Additional activities: Developed the news homepage and template, customized a web chat system with multiple user options (chat with six operators, call-back requests, and web lead generation), handled JSONP-based AJAX calls, and integrated scripts hosted on different servers. Conducted an in-depth study of functional programming in JavaScript and developed an "email-preprocessor" project using Gulp and Node.js to automate email template creation.`,
       image: {
          src: 'https://media.licdn.com/dms/image/v2/C4D0BAQFZow1nIt8YyA/company-logo_100_100/company-logo_100_100/0/1630493197050/supermoney_eu_logo?e=1748476800&v=beta&t=o6Cb8pFPQwX5dx5LlTZI1LwjaawAQPhYw6-aSu8VlUk',
          alt: 'Supermoney',
        },
      },
      {
        role: 'Frontend Developer',
        date: '11-2015 - 05-2016',
        company: 'Supermoney',
        description: `Managed the frontend of the company website, Italy’s first multi-sector comparison portal, working with senior frontend and backend developers. Daily tasks were managed via Bug Genie, with Git for version control. Created landing pages and collaborated with different business units. Used JavaScript, HTML5, CSS3, preprocessors (LESS, JADE), and libraries like jQuery and Bootstrap.`,
       image: {
          src: 'https://media.licdn.com/dms/image/v2/C4D0BAQFZow1nIt8YyA/company-logo_100_100/company-logo_100_100/0/1630493197050/supermoney_eu_logo?e=1748476800&v=beta&t=o6Cb8pFPQwX5dx5LlTZI1LwjaawAQPhYw6-aSu8VlUk',
          alt: 'Supermoney',
        },
      },
    ]
  }
}
