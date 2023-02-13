import avatar from './images/avatar.png';
import styles from './styles.module.css';
import List from './List';
import {useSelector} from 'react-redux';
import Avatar from '../../../components/Avatar';

const Menu = () => {
  const {name, image} = useSelector(state => state.auth.user)

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        {!image && <Avatar name={name}/>}
        {image && <img src={avatar} width={67} height={67} alt="avatar"/>}
        <span className={styles.name}>{name}</span>
      </div>
      <hr/>
      <List/>
    </div>
  )
}

export default Menu;
