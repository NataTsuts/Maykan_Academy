import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.css';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';

const LessonDashboard = () => {
  return (
    <div>
      <h3 className={styles.title}>Моя панель</h3>
      <div className={styles.wrapper}>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <CircularProgressbar
              value={0}
              text={`${0}%`}
              strokeWidth={1}
              styles={
                buildStyles({
                  trailColor: '#E7E7E7',
                  pathColor: '#DA3A30',
                  textColor: '#FFFFFF',
                  textSize: '24px',
                })
              }
            />
          </div>
        </div>
        <div className={styles.tasksWrapper}>
          <span className={styles.tasksTitle}>Мои задания</span>
          <div className={styles.tasks}>

          </div>
          <span className={styles.empty}>У вас ещё нет доступных заданий</span>
        </div>
      </div>
    </div>
  )
}

export default LessonDashboard;
