import styles from './styles.module.css';

const Burger = ({clickHandler, isOpen}) => {
  return (
    <button onClick={clickHandler} className={`${styles.burger} ${isOpen && styles.active}`}>
      <span className={`${styles.line} ${styles.first}`}></span>
      <span className={`${styles.line} ${styles.second}`}></span>
      <span className={`${styles.line} ${styles.third}`}></span>
      <span className={`${styles.line} ${styles.fourth}`}></span>
    </button>
  )
}

export default Burger;
