import styles from './styles.module.css';
import ReactPlayer from 'react-player';

const VideoSection = () => {
  return (
    <section className={styles.video}>
      <div className="container">
        <div className={styles.wrapper}>
          <ReactPlayer width={'100%'} height={'100%'} url={'https://www.youtube.com/watch?v=asjMumJwK9Y'}/>
        </div>
      </div>
    </section>
  )
}

export default VideoSection;
