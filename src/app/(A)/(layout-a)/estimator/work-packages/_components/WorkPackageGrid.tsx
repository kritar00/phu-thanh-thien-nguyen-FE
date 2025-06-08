import { WorkPackageCard } from './WorkPackageCard'

const workPackages = [
  {
    id: 1,
    title: 'Work package 1',
    description:
      'Define system structure, technology stack, and integration flow. Includes documentation of architectural decisions and technical specifications.'
  },
  {
    id: 2,
    title: 'Work package 2',
    description:
      'Build a modern single-page application (SPA) using SvelteKit, integrated with a headless CMS for content management.'
  },
  {
    id: 3,
    title: 'Work package 3',
    description:
      'Set up continuous integration and deployment pipeline using GitHub actions, automated testing, and cloud deployment.'
  },
  {
    id: 4,
    title: 'Work package 4',
    description:
      'Identify and document business processes, user roles, and key features required for the application functionality.'
  },
  {
    id: 5,
    title: 'Work package 5',
    description:
      'Define overall architecture, services layout, tech stack, and database strategy for scalable application development.'
  },
  {
    id: 6,
    title: 'Work package 6',
    description:
      'Design complex data relationships, event flows (CQRS/Event Sourcing), and implement robust data management patterns.'
  },
  {
    id: 7,
    title: 'Work package 7',
    description:
      'Deliver wireframes and high-fidelity designs for key screens using Figma with comprehensive design system documentation.'
  },
  {
    id: 8,
    title: 'Work package 8',
    description:
      'Develop frontend using SvelteKit integrated with a CMS like Directus or Strapi for dynamic content management capabilities.'
  },
  {
    id: 9,
    title: 'Work package 9',
    description:
      'Implement domain-driven backend API with authentication, user roles, and comprehensive business logic implementation.'
  }
]
export function WorkPackageGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
      {workPackages.map((wp) => (
        <WorkPackageCard key={wp.id} {...wp} />
      ))}
    </div>
  )
}
