import RegistrationPopup from '../../../components/RegistrationPopup';
import LoginPopup from '../../../components/LoginPopup';
import styles from './styles.module.css';

const MobileMenu = ({onSubmitCallback}) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/" className={styles.menuLink}>
            О платформе
          </a>
        </li>
        <li className={styles.item}>
          <RegistrationPopup onSubmitCallback={onSubmitCallback} text={'Регистрация'}/>
        </li>
        <li className={styles.item}>
          <LoginPopup onSubmitCallback={onSubmitCallback}/>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu;
