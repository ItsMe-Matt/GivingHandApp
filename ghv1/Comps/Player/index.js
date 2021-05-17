import react from 'react'
import ReactPlayer from 'react-player';
import styles from './player.module.css';


function Player() {
    return <div className={styles.home}>
    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
</div>
}

export default Player;
