import styles from './styles.module.css';

const Card = ({title, text}) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Card;
