import {CustomPortableText} from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'

export function ProjectListItem(props) {
  const {project, odd} = props

  return (
    <div
      className={`my-6 flex flex-col gap-x-5 rounded-md border-2 p-2 shadow-lg transition hover:bg-orange-50/50 xl:flex-row ${
        odd && 'xl:flex-row-reverse'
      }`}
    >
      <div className='w-full xl:w-9/12'>
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper='relative aspect-[16/9]'
        />
      </div>
      <div className='flex xl:w-1/4'>
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({project}) {
  return (
    <div className='relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0'>
      <div>
        {/* Title */}
        <div className='mb-2 text-xl font-bold tracking-tight md:text-2xl'>
          {project.title}
        </div>
        {/* Overview  */}
        <div className='font-serif text-slate-600'>
          <CustomPortableText value={project.overview} />
        </div>
      </div>
      {/* Tags */}
      <div className='mt-4 flex flex-row gap-x-2'>
        {project.tags?.map((tag, key) => (
          <div
            className='text-sm font-medium text-indigo-700 lowercase hover:text-indigo-900 md:text-lg'
            key={key}
          >
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
