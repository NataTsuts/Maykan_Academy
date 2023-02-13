import logo from '../../assets/images/logo.png';
import RegistrationPopup from '../../components/RegistrationPopup';
import LoginPopup from '../../components/LoginPopup';
import {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Burger from './Burger';
import MobileMenu from './MobileMenu';
import {useDispatch, useSelector} from 'react-redux';
import UserComponent from './UserComponent';
import {toggleBurger} from '../../store/features/burgerSlice';

const Header = () => {
  const dispatch = useDispatch()
  const [moved, setMoved] = useState(false);
  const {validationStatus, user} = useSelector(state => state.auth)
  const isBurgerOpen = useSelector(state => state.burger.isOpened)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setMoved(true);
    } else {
      setMoved(false);
    }
  }

  const toggleMenu = () => dispatch(toggleBurger());

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  })

  return (
    <header className={`${styles.header} ${moved && styles.dark}`}>
      <div className="container">
        <div className={styles.content}>
          <a className={styles.logoLink} href="/">
            <img className={styles.logo} src={logo} width="197" alt="Logo Website"/>
          </a>
          <nav className={styles.navigation}>
            <a className={styles.info} href="/">
              О платформе
            </a>
            {validationStatus === 'succeeded' && <UserComponent/>}
            {
              validationStatus === 'failed' &&
              <>
                <RegistrationPopup text={'Регистрация'}/>
                <LoginPopup/>
              </>
            }
          </nav>
          {!user && <Burger clickHandler={toggleMenu} isOpen={isBurgerOpen}/>}
          {validationStatus === 'succeeded' && <UserComponent isMobile/>}
        </div>
        {isBurgerOpen && <MobileMenu/>}
      </div>
    </header>
  )
}

export default Header;
