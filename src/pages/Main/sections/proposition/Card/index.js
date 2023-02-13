import styles from './styles.module.css';
import cardLogo from './images/card-logo.png';

const Card = ({number, text}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardIcon} style={{backgroundImage: `url(${cardLogo})`}}></div>
      <div className={styles.card}>
        <span className={styles.number}>{number}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default Card;
