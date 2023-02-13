import styles from './styles.module.css';

const Avatar = ({name}) => {
  return (
    <span className={styles.avatar}>{name[0]}</span>
  )
}

export default Avatar
