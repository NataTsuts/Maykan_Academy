import instagramIcon from './images/insta.svg';
import telegramIcon from './images/telegram.svg';
import chatIcon from './images/chat.svg';
import bgFade from './images/bg-gradient.png';
import styles from './styles.module.css';
import backgroundImage from './images/header-bg.png';
import DescriptionItem from './DescriptionItem';
import bagIcon from './images/bag.svg';
import cmoIcon from './images/cmo_rte.svg';
import societyIcon from './images/society.svg';
import mindIcon from './images/mind.svg';
import {useSelector} from 'react-redux';
import RegistrationPopup from '../../../../components/RegistrationPopup';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  const {user} = useSelector(state => state.auth)

  return (
    <section className={styles.hero} style={{backgroundImage: `url(${backgroundImage})`}}>
      <img className={styles.fade} src={bgFade} alt={'fade'}/>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroContentTop}>
            <div className={styles.heroContentTopLeft}>
              <p className={styles.heroContentTopText}>
                Инвестор/Криптоэнтузиаст/Предприниматель
              </p>
              <h1 className={styles.heroContentTopTitle}>
                Павел Майкан
              </h1>
              <div className={styles.heroContentTopLessonsWrapper}>
                <DescriptionItem image={cmoIcon} text={'CMO RTE Ventures'}/>
                <DescriptionItem image={mindIcon} text={'Эксперт в области блокчейн технологий'}/>
                <DescriptionItem image={societyIcon} text={'Блогер/Сообщество более 35000 человек'}/>
                <DescriptionItem image={bagIcon} text={'Владелец ноды “MaykanInvest” с оборотом более 3 млн$'}/>
              </div>
              {
                !user ? (
                    <RegistrationPopup className={`${styles.btnLight} ${styles.heroContentTopButton}`}
                                       text={'Смотреть курс'}/>
                  ) :
                  <Link className={`${styles.btnLight} ${styles.heroContentTopButton}`} to={'cabinet/lessons'}>Смотреть
                    курс</Link>
              }
            </div>
          </div>
          <div className={styles.heroContentBottom}>
            <a href='https://t.me/Maykanlnvest' target='_blank' className={styles.heroContentBottomSocial}
               rel="noreferrer">
              <img className={styles.heroContentBottomSocialImg} src={telegramIcon} width="22" height="22" alt=""/>
            </a>
            <a href='https://instagram.com/maykaninvest?igshid=YmMyMTA2M2Y=' target='_blank'
               className={styles.heroContentBottomSocial} rel="noreferrer">
              <img className={styles.heroContentBottomSocialImg} src={instagramIcon} width="22" height="22" alt=""/>
            </a>
            <a href='https://t.me/Vitalik_insider' target='_blank'
               className={styles.heroContentBottomSocial} rel="noreferrer">
              <img className={styles.heroContentBottomSocialImg} src={chatIcon} width="22" height="22" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
