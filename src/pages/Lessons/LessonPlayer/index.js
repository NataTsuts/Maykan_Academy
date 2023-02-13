import ReactPlayer from 'react-player'
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

const LessonPlayer = () => {
  const selectedLesson = useSelector(state => state.player.activeLesson);
  const descriptionMarkup = {__html: selectedLesson.description}

  return (
    <div className={styles.wrapper}>
      <ReactPlayer className={styles.player} width={'100%'} height={425} controls playing={false}
                   url={selectedLesson.video}/>
      <span>{selectedLesson.title}</span>
      <p dangerouslySetInnerHTML={descriptionMarkup}></p>
      <a href={selectedLesson.homework} rel="noreferrer" target='_blank'
         className={styles.homeworkLink}>ТЕСТ</a>
    </div>
  )
}

export default LessonPlayer;
