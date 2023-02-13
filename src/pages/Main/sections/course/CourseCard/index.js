import styles from './styles.module.css';

const CourseCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
      <span className={styles.title}>
          Курс на 6 месяцев
      </span>
        <p className={styles.subtitle}>
          Доступен для самостоятельного
          прохождения в любом темпе
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Самая актуальная информация
          </li>
          <li className={styles.listItem}>
            Видео, презентации, книги, тесты, источники
          </li>
          <li className={styles.listItem}>
            Личное и групповое общение
          </li>
          <li className={styles.listItem}>
            Личные рекомендации
          </li>
        </ul>
        <span className={styles.oldPrice}>500$</span>
        <span className={styles.price}>250$</span>
        {/*<div className={styles.pricingWrapper}>*/}
        {/*  <span className={styles.monthlyPrice}>*/}
        {/*    965₽/месяц*/}
        {/*  </span>*/}
        {/*  <p className={styles.priceDescription}>*/}
        {/*    При беспроцентной рассрочке*/}
        {/*    на 6 месяцев*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className={styles.buttonsWrapper}>
          <a href='https://t.me/Vitalik_insider' target='_blank' rel="noopener noreferrer"
             className={`${styles.button} ${styles.light}`}>
            Купить
          </a>
          <a href='https://t.me/Vitalik_insider' target='_blank' rel="noopener noreferrer"
             className={`${styles.button} ${styles.darkButton} ${styles.dark}`}>
            Пoдарить
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
