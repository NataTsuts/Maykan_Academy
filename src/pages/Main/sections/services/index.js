import Card from './Card';
import styles from './styles.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.title}>
          В ОБУЧЕНИЕ ВХОДИТ
        </h2>
        <div className={styles.wrapper}>
          <Card
            title='Видеоуроки'
            text='Видео с теорией и практикой'
          />
          <Card
            title='Презентации'
            text='После каждого урока можно скачать презентацию'
          />
          <Card
            title='Домашние задания'
            text='После каждого урока есть домашнее задание'
          />
          <Card
            title='Поддержка ментора'
            text='Ментор проведет вас от начала обучения до самого его конца'
          />
          <Card
            title='Дополнительные материалы'
            text='Видео с теорией и практикой'
          />
          <Card
            title='Сообщество'
            text='Закрытый телеграмм-чат со всеми участниками курса, где каждую
              неделю будет голосовой эфир.'
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;
