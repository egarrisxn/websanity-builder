import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {toPlainText} from 'next-sanity'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import {generateStaticSlugs} from '@/sanity/loader/generateStaticSlugs'
import {loadProject} from '@/sanity/loader/loadQuery'
import {ProjectPage} from '@/components/pages/project/ProjectPage'

const ProjectPreview = dynamic(
  () => import('@/components/pages/project/ProjectPreview'),
)

export async function generateMetadata({params}, parent) {
  const awaitedParams = await params
  const {data: project} = await loadProject(awaitedParams.slug)
  const ogImage = urlForOpenGraphImage(project?.coverImage)

  return {
    title: project?.title,
    description: project?.overview
      ? toPlainText(project.overview)
      : (await parent)?.description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent)?.openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function ProjectSlugRoute({params}) {
  const awaitedParams = await params
  const initial = await loadProject(awaitedParams.slug)
  const {isEnabled} = await draftMode()

  if (isEnabled) {
    return <ProjectPreview params={awaitedParams} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ProjectPage data={initial.data} />
}
