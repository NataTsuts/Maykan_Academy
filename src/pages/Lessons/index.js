import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './styles.module.css';
import {useParams} from 'react-router';
import LessonsMenu from './LessonsMenu';
import LessonPlayer from './LessonPlayer';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchCourseById} from '../../store/features/playerSlice';
import {fetchCourses} from '../../store/features/coursesSlice';

const Lessons = () => {
  const dispatch = useDispatch()
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCourses())
      await dispatch(fetchCourseById(id));
    }
    fetchData()
  }, [dispatch, id])

  return (
    <div className={'container'}>
      <div className={styles.courseContainer}>
        <Breadcrumbs/>
        <div className={styles.wrapper}>
          <LessonsMenu/>
          <LessonPlayer/>
        </div>
      </div>
    </div>
  )
}

export default Lessons;
