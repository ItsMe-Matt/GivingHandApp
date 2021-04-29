import ReactPlayer from 'react-player';
import styles from './player.module.css';


function Player() {
    return <div className={styles.home}>
    <ReactPlayer url="https://www.video-url.com" />
</div>
}

export default Player;
