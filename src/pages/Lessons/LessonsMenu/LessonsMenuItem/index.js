import styles from './styles.module.css'
import {setActiveLesson} from '../../../../store/features/playerSlice';
import {useDispatch} from 'react-redux';

const LessonsMenuItem = ({isActive, title, image, id}) => {
  const dispatch = useDispatch();

  const setSelected = () => {
    dispatch(setActiveLesson(id));
  }

  return (
    <li className={`${styles.item} ${isActive && styles.active}`} onClick={setSelected}>
      <img src={image} width={86} alt="thumbnail"/>
      <span>{title}</span>
    </li>
  )
}

export default LessonsMenuItem;
