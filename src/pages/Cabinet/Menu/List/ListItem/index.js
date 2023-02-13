import styles from './styles.module.css'
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ListItem = ({icon, text, to, isCourses}) => {
  const numberOfCourses = useSelector(state => state.course.courses.length)

  return (
    <li className={styles.item}>
      <NavLink className={styles.link} to={to} style={({isActive}) => {
        return {
          color: isActive ? '#DA3A30' : '#FFFFFF'
        }
      }}>
        <img src={icon} width={24} height={24} alt="userIcon"/>
        <span className={styles.text}>{text}</span>
        {(isCourses && !!numberOfCourses) && <span className={styles.numberOfCourses}>{numberOfCourses}</span>}
      </NavLink>
    </li>
  )
}

export default ListItem;
