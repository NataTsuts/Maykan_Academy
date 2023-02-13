import logo from '../../assets/images/logo.png';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="/" className={styles.homeLink}>
            <img src={logo} width="197" height="57" alt="Logo Website"/>
          </a>
          <div className={styles.content}>
            {/*<div className={styles.description}>*/}
            {/*  <span className={styles.descriptionTitle}>*/}
            {/*    УРОКИ ЛЕГЕНД*/}
            {/*  </span>*/}
            {/*  <p className={styles.descriptionText}>*/}
            {/*    Опыт выдающихся профессионалов*/}
            {/*    в удобном и увлекательном видеоформате*/}
            {/*  </p>*/}
            {/*</div>*/}
            <nav className={styles.nav}>
              <span className={styles.navTitle}>
                Меню
              </span>
              <ul>
                <li className={styles.item}>
                  <a href="" className={styles.navLink}>
                    О&nbsp;платформе
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.navLink}>
                    Курсы
                  </a>
                </li>

                <li className={styles.item}>
                  <a href="" className={styles.navLink}>
                    Контакты
                  </a>
                </li>

                <li className={styles.item}>
                  <a href="" className={styles.navLink}>
                    Оплата
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.news}>
                <span className={styles.newsTitle}>
                    НОВОСТИ
                </span>
              <p className={styles.newsText}>
                Подписывайся и первым узнавай
                о новых курсах
              </p>
              <button className={`${styles.button} ${styles.light}`}>
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.license}>
        2022 © Все права защищены
      </div>
    </footer>
  )
}

export default Footer;
