import styles from './styles.module.css';
import lockIcon from './images/lock.svg';

const LessonItem = ({id, title, image}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemImg}
           style={{backgroundImage: `url(${image})`}}>
        <span className={styles.playIcon}>
          <span className={styles.playIconBefore}
                style={{background: `url(${lockIcon}) center no-repeat`}}></span>
        </span>
      </div>
      <div className={styles.titleWrapper}>
        <p className={styles.text}>{id} урок</p>
        <span className={styles.title}>{title}</span>
        {/*  TODO: Show error when unauthorised */}
        {/*<UnauthorisedError/>*/}
      </div>
    </div>
  )
}

export default LessonItem;
