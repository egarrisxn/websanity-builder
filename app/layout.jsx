import './globals.css'
import {Roboto_Mono, Lexend_Deca, Rubik} from 'next/font/google'

const serif = Rubik({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})
const sans = Lexend_Deca({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const mono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default async function RootLayout({children}) {
  return (
    <html
      lang='en'
      className={`${mono.variable} ${sans.variable} ${serif.variable}`}
    >
      <head>
        <meta name='apple-mobile-web-app-title' content='WebSanity Builder' />
      </head>
      <body>{children}</body>
    </html>
  )
}
