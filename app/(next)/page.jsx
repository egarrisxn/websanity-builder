import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {loadHomePage} from '@/sanity/loader/loadQuery'
import {studioUrl} from '@/sanity/lib/api'
import {HomePage} from '@/components/pages/home/HomePage'
import Link from 'next/link'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()
  const {isEnabled} = await draftMode()

  if (isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
