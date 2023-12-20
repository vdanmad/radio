import Image from 'next/image';
import styles from './page.module.css';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <ReactAudioPlayer src="http://xplayer.neohub.pt:1905/stream/swyh.mp3" autoPlay controls />
      </div>

    </main>
  )
}
