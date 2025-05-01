import {CustomPortableText} from '@/components/shared/CustomPortableText'
import GithubIcon from '@/components/shared/GithubIcon'

export default function FooterLayout(props) {
  const {data} = props
  const footer = data?.footer
  return (
    <footer className='bottom-0 flex w-full flex-row items-center justify-between bg-orange-50 px-4 pt-24 pb-8 md:px-16 lg:px-32'>
      <GithubIcon />
      {footer && (
        <CustomPortableText
          paragraphClasses='text-base md:text-lg text-indigo-800 font-semibold'
          value={footer}
        />
      )}
    </footer>
  )
}
