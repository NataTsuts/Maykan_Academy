import ListItem from './ListItem';
import userIcon from '../images/icons/user.svg';
import courseIcon from '../images/icons/lesson.svg'
import styles from './styles.module.css'

const List = () => {
  return (
    <div>
      <ul className={styles.list}>
        <ListItem text={'Профиль'} icon={userIcon} to={'profile'}/>
        <ListItem text={'Мои курсы'} icon={courseIcon} to={'lessons'} isCourses/>
      </ul>
    </div>
  )
}

export default List;
