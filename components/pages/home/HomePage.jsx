import Link from 'next/link'
import {ProjectListItem} from '@/components/pages/home/ProjectListItem'
import {Header} from '@/components/shared/Header'
import {resolveHref} from '@/sanity/lib/utils'

export function HomePage({data, encodeDataAttribute}) {
  // Default to an empty object to allow previews on non-existent documents
  const {overview = [], showcaseProjects = [], title = ''} = data ?? {}

  return (
    <div className='space-y-20'>
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase Projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className='mx-auto max-w-[100rem]'>
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
