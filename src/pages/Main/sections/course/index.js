import styles from './styles.module.css';
import CourseCard from './CourseCard';

const CourseSection = () => {
  return (
    <section className={styles.course}>
      <div className="container">
        {/*<h2 className={styles.title}>*/}
        {/*  КУРС ПАВЛА МАЙКАНА*/}
        {/*</h2>*/}
        <div className={styles.wrapper}>
          <CourseCard/>
        </div>
      </div>
    </section>
  )
}

export default CourseSection;
