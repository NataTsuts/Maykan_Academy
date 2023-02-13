import styles from './styles.module.css';

const ValidationError = ({message}) => {
  return (
    <span className={styles.error}>{message}</span>
  )
}

export default ValidationError;
