import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {loadSettings} from '@/sanity/loader/loadQuery'
import NavbarLayout from './NavbarLayout'

const NavbarPreview = dynamic(() => import('./NavbarPreview'))

export async function Navbar() {
  const initial = await loadSettings()
  const {isEnabled} = await draftMode()

  if (isEnabled) {
    return <NavbarPreview initial={initial} />
  }

  return <NavbarLayout data={initial.data} />
}
