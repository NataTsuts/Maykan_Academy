import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import arrow from './arrow.svg';
import styles from './styles.module.css';
import {checkToken, logout} from '../../../store/features/authSlice';
import CustomLink from './CustomLink';
import userIcon from './user.svg';
import bookIcon from './book.svg';
import exitIcon from './exit.svg';
import Avatar from '../../../components/Avatar';

const UserComponent = ({isMobile}) => {
  const dispatch = useDispatch()
  const [isVisible, setVisible] = useState(false);
  const {name, image} = useSelector(state => state.auth.user);

  const setInvisible = () => {
    setVisible(false);
  }

  const toggleVisibility = () => {
    setVisible(!isVisible);
  }

  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    dispatch(checkToken())
    setInvisible()
  }

  return (
    <div className={`${styles.wrapper} ${isMobile && styles.mobile}`} onClick={toggleVisibility}>
      {!image && <Avatar name={name}/>}
      {image && <img className={styles.avatar} width={50} height={50} src={image} alt="avatar"/>}
      <span className={styles.name}>{name}</span>
      <button className={styles.opener}><img src={arrow} alt=""/></button>
      {
        isVisible && (
          <div className={styles.menu}>
            <CustomLink icon={userIcon} text='Личный кабинет' onClick={setInvisible} to={'/cabinet/profile'}/>
            <CustomLink icon={bookIcon} text='Мои уроки' onClick={setInvisible} to={'/cabinet/lessons'}/>
            <CustomLink icon={exitIcon} text='Выйти' onClick={logOut} to={'/'}/>
          </div>
        )
      }
    </div>
  )
}

export default UserComponent;
