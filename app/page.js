import Image from 'next/image'
import styles from './page.module.css'
import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <ReactPlayer url='http://xplayer.neohub.pt:1905/stream/swyh.mp3'/>
      </div>

    </main>
  )
}
