import styles from './styles.module.css'

const NoAvailableCourses = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>У вас ещё нет доступных курсов</div>
      <div className={styles.text}>Преобретите свой первый курс для начала обучения</div>
      <button className={styles.button}>ПРИОБРЕСТИ СЕЙЧАС</button>
    </div>
  )
}

export default NoAvailableCourses;
