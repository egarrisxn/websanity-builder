import {CustomPortableText} from '@/components/shared/CustomPortableText'
import {Header} from '@/components/shared/Header'

export function Page({data}) {
  // Default to an empty object to allow previews on non-existent documents
  const {body, overview, title} = data ?? {}

  return (
    <div>
      <div className='mb-14'>
        {/* Header */}
        <Header title={title} description={overview} />
        <br />
        <br />
        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses='font-serif max-w-3xl text-slate-700 text-xl'
            value={body}
          />
        )}
      </div>
    </div>
  )
}

export default Page
