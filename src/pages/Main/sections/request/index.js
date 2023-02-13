import styles from './styles.module.css';

const RequestSection = () => {
  return (
    <section className={styles.request}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <h5 className={styles.title}>
              ОСТАВЬ ЗАЯВКУ, ЧТОБЫ
              ЗАБРОНИРОВАТЬ СКИДКУ
            </h5>
            <p className={styles.subtitle}>
              И ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
            </p>
          </div>
          <a href='https://t.me/Vitalik_insider' target='_blank' rel="noopener noreferrer"
             className={`${styles.button} ${styles.light}`}>
            Оставить Заявку
          </a>
        </div>
      </div>
    </section>
  )
}

export default RequestSection;
