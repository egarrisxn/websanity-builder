import {PortableText} from 'next-sanity'
import {TimelineSection} from './TimelineSection'
import ImageBox from './ImageBox'

export function CustomPortableText({paragraphClasses, value}) {
  const components = {
    block: {
      normal: ({children}) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({children, value}) => {
        return (
          <a
            className='underline transition hover:text-indigo-900'
            href={value?.href}
            rel='noreferrer noopener'
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({value}) => {
        return (
          <div className='my-6 space-y-2'>
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper='relative aspect-[16/9]'
            />
            {value?.caption && (
              <div className='font-sans text-sm text-slate-700'>
                {value.caption}
              </div>
            )}
          </div>
        )
      },
      timeline: ({value}) => {
        const {items} = value || {}
        return <TimelineSection timelines={items} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
