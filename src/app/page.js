import Image from 'next/image'
import styles from './page.module.css'
import { Suspense } from 'react'
import Loading from './loading'
import Products from './products/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading/>}>
        
        <Products/>
    
      </Suspense>
    </main>
  )
}
