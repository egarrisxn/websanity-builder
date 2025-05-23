import Link from 'next/link'
import {CustomPortableText} from '@/components/shared/CustomPortableText'
import {Header} from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'

export function ProjectPage({data, encodeDataAttribute}) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    tags,
    title,
  } = data ?? {}

  const startYear = new Date(duration?.start).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <div>
      <div className='mb-14 space-y-6'>
        {/* Header */}
        <Header title={title} description={overview} />
        <br />
        <br />
        <div className='rounded-md border-2 shadow-lg'>
          {/* Image  */}
          <ImageBox
            data-sanity={encodeDataAttribute?.('coverImage')}
            image={coverImage}
            // @TODO add alt field in schema
            alt=''
            classesWrapper='relative aspect-[16/9]'
          />

          <div className='grid grid-cols-1 divide-y divide-inherit lg:grid-cols-4 lg:divide-x lg:divide-y-0'>
            {/* Duration */}
            {!!(startYear && endYear) && (
              <div className='p-3 lg:p-4'>
                <div className='text-xs md:text-sm'>Duration</div>
                <div className='text-md md:text-lg'>
                  <span data-sanity={encodeDataAttribute?.('duration.start')}>
                    {startYear}
                  </span>
                  {' - '}
                  <span data-sanity={encodeDataAttribute?.('duration.end')}>
                    {endYear}
                  </span>
                </div>
              </div>
            )}

            {/* Client */}
            {client && (
              <div className='p-3 lg:p-4'>
                <div className='text-xs md:text-sm'>Client</div>
                <div className='text-md md:text-lg'>{client}</div>
              </div>
            )}

            {/* Site */}
            {site && (
              <div className='p-3 lg:p-4'>
                <div className='text-xs md:text-sm'>Site</div>
                {site && (
                  <Link
                    target='_blank'
                    className='text-md break-words hover:text-indigo-900 md:text-lg'
                    href={site}
                  >
                    {site}
                  </Link>
                )}
              </div>
            )}

            {/* Tags */}
            <div className='p-3 lg:p-4'>
              <div className='text-xs md:text-sm'>Tags</div>
              <div className='text-md flex flex-row flex-wrap text-indigo-700 md:text-lg'>
                {tags?.map((tag, key) => (
                  <div key={key} className='mr-1 break-words'>
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {description && (
          <CustomPortableText
            paragraphClasses='font-serif max-w-3xl text-xl text-slate-700'
            value={description}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectPage
