import Link from 'next/link'
import HomePost from '../../Comps/HomePost'
import TopNavUI from '../../Comps/TopNavUI'

import styles from './tester.module.css'


function Tester() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
    
    <TopNavUI />

    </div>
  </div>

    
  )
  }

export default Tester;
