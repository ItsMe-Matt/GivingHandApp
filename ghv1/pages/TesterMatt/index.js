import Link from 'next/link'
import HomePost from '../../Comps/HomePost'
import TopNavUI from '../../Comps/TopNavUI'
import Player from '../../Comps/Player'

import styles from './tester.module.css'


function Tester() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
    
    <Player />

    </div>
  </div>

    
  )
  }

export default Tester;
