import {Outlet} from 'react-router';
import Menu from './Menu';
import styles from './styles.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchCourses} from '../../store/features/coursesSlice';

const Cabinet = () => {
  const dispatch = useDispatch();
  const coursesStatus = useSelector(state => state.course.status);

  useEffect(() => {
    if (coursesStatus === 'idle') {
      dispatch(fetchCourses())
    }
  }, [coursesStatus, dispatch])
  return (
    <div className={'container'}>
      <div className={styles.cabinetContainer}>
        <Breadcrumbs/>
        <div className={styles.wrapper}>
          <Menu/>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Cabinet;
