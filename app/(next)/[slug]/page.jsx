import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {toPlainText} from 'next-sanity'
import {generateStaticSlugs} from '@/sanity/loader/generateStaticSlugs'
import {loadPage} from '@/sanity/loader/loadQuery'
import {Page} from '@/components/pages/page/Page'

const PagePreview = dynamic(() => import('@/components/pages/page/PagePreview'))

export async function generateMetadata({params}, parent) {
  const awaitedParams = await params
  const {data: page} = await loadPage(awaitedParams.slug)

  return {
    title: page?.title,
    description: page?.overview
      ? toPlainText(page.overview)
      : (await parent)?.description,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('page')
}

export default async function PageSlugRoute({params}) {
  const awaitedParams = await params
  const initial = await loadPage(awaitedParams.slug)
  const {isEnabled} = await draftMode()

  if (isEnabled) {
    return <PagePreview params={awaitedParams} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <Page data={initial.data} />
}
