import {client} from './client'

export async function pageData() {
  const pageQuery = `*[_type == "page"]{ "slug": slug.current, _updatedAt }`
  const pages = await client.fetch(pageQuery)
  return pages
}

export async function projectData() {
  const projectQuery = `*[_type == "project"]{ "slug": slug.current, _updatedAt }`
  const projects = await client.fetch(projectQuery)
  return projects
}
