import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google';
import styles from './../styles/Home.module.css'

// const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={styles['open-sans']}>
      <Component {...pageProps} />
    </main>
  )
}
