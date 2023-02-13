import EducationItem from './EducationItem';
import styles from './styles.module.css';

const EducationSection = () => {
  return (
    <section className={styles.education}>
      <div className="container">
        <h2 className={styles.title}>
          в обучение входит
        </h2>
        <div className={styles.list}>
          <EducationItem
            number='1'
            text='Сможешь провести аудит своей жизни'
          />
          <EducationItem
            number='2'
            text='Поймёшь, что необходимо изменить в жизни, чтобы развиваться'
          />
          <EducationItem
            number='3'
            text='Узнаешь, где искать мотивацию и силы для преодоления трудностей'
          />
          <EducationItem
            number='4'
            text='Найдёшь смелость, чтобы начать заниматься любимым делом'
          />
          <EducationItem
            number='5'
            text='Поймёшь, как совершенствоваться в своей профессии'
          />
          <EducationItem
            number='6'
            text='Узнаешь, какими навыками нужно обладать в современном мире, чтобы оставаться эффективным и
              гибким'
          />
          <EducationItem
            number='7'
            text='Сможешь ориентироваться в потоке информации и отбирать качественный контент'
          />
        </div>
      </div>
    </section>
  )
}

export default EducationSection;
