import Link from 'next/link'
import {resolveHref} from '@/sanity/lib/utils'

export default function NavbarLayout(props) {
  const {data} = props
  const menuItems = data?.menuItems
  return (
    <div className='sticky top-0 z-10 flex flex-row flex-wrap items-center justify-end gap-x-5 bg-orange-50/80 p-4 backdrop-blur md:px-16 md:py-5 lg:px-32'>
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={`text-lg hover:text-indigo-900 md:text-xl ${
                menuItem?._type === 'home'
                  ? 'font-bold text-indigo-700'
                  : 'text-slate-600'
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
