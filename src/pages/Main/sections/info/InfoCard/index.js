import styles from './styles.module.css';
import infoSvg from './images/info-circle.svg';

const InfoCard = ({text}) => {
  return (
    <div className={styles.card}>
      <span className={styles.icon} style={{backgroundImage: `url(${infoSvg})`}}></span>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default InfoCard;
