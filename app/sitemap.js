import {pageData, projectData} from '../sanity/lib/data'

export default async function sitemap() {
  const pages = await pageData()
  const projects = await projectData()
  const baseUrl = 'https://websanitybuilder.vercel.app'

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
  ]

  const pageRoutes = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: page._updatedAt,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project._updatedAt,
  }))

  return [...staticRoutes, ...pageRoutes, ...projectRoutes]
}
