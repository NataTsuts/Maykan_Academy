import SliderPrevButton from '../../../components/SliderPrevButton';
import SliderNextButton from '../../../components/SliderNextButton';
import styles from "./styles.module.css";
import LessonsMenuItem from './LessonsMenuItem';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const LessonsMenu = () => {
  const navigate = useNavigate()
  const lessons = useSelector(state => state.player.course.lessons);
  const selectedLesson = useSelector(state => state.player.activeLesson);
  const courses = useSelector(state => state.course.courses)
  const course = useSelector(state => state.player.course)

  const getNextCourseId = () => {
    let i = courses.findIndex(item => item.id === course.id) + 1;
    i = i % courses.length;
    return courses[i].id;
  }

  const getPrevCourseId = () => {
    let i = courses.findIndex(item => item.id === course.id);
    if (i === 0) {
      i = courses.length;
    }
    i = i - 1;
    return courses[i].id;
  }

  const nextCourse = () => {
    const id = getNextCourseId();
    navigate(`/courses/${id}`);
  }

  const prevCourse = () => {
    const id = getPrevCourseId();
    navigate(`/courses/${id}`)
  }

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <span className={styles.title}>{course?.title}</span>
        {courses.length > 1 && (
          <div className={styles.buttonWrapper}>
            <SliderPrevButton onClick={prevCourse}/>
            <SliderNextButton onClick={nextCourse}/>
          </div>
        )}
      </div>
      <hr/>
      <div className={styles.lessonsWrapper}>
        <ul>
          {lessons && lessons.map((lesson) => (
            <LessonsMenuItem key={lesson.id} id={lesson.id} isActive={selectedLesson.id === lesson.id}
                             title={lesson.title}
                             image={lesson.image}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LessonsMenu;
