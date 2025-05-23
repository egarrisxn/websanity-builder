import Image from 'next/image'
import {urlForImage} from '@/sanity/lib/utils'

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  ...props
}) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div
      className={`w-full overflow-hidden rounded-[3px] bg-orange-50 ${classesWrapper}`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Image
          className='absolute h-full w-full'
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  )
}
