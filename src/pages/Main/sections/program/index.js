import styles from './styles.module.css';
import LessonsList from './LessonsList';
import {useEffect} from 'react';
import {fetchItems} from '../../../../store/features/homeSlice';
import {useDispatch, useSelector} from 'react-redux';

const ProgramSection = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.home.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch])


  return (
    <section className={styles.program}>
      <div className="container">
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            ПРОГРАММА КУРСА
          </h2>
          <span className={styles.subtitle}>
           {lessons.length} УРОКОВ
          </span>
        </div>
        <LessonsList/>
      </div>
    </section>
  )
}

export default ProgramSection;
