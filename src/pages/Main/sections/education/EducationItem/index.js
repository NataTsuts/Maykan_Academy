import styles from './styles.module.css';

const EducationItem = ({number, text}) => {
  return (
    <div className={styles.item}>
      <span className={styles.elem}>{number}</span>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default EducationItem;
