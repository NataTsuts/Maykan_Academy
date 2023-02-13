import LessonsSlider from './LessonsSlider';
import LessonDashboard from './LessonDashboard';
import styles from './styles.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <LessonsSlider/>
      <hr/>
      <LessonDashboard/>
    </div>
  )
}

export default Dashboard;
