import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Slider from '@/components/Slider'
import Featured from '@/components/Featured'
import Offer from '@/components/Offer'

export default function Home() {
  return (
    <main className={styles.fonts}>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
