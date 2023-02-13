import styles from './styles.module.css';
import InfoCard from './InfoCard';

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className="container">
        <h2 className={styles.title}>
          ДЛЯ КОГО ЭТОТ КУРС
        </h2>
        <div className={styles.wrapper}>
          <InfoCard text='Для новичков, которые только начинают разбираться с криптовалютой'/>
          <InfoCard text='Для тех кто хочет зарабатывать в долгосрочной перспективе'/>
          <InfoCard text='Для тех людей, которые хотят повысить свой уровень знаний в криптосфере'/>
          <InfoCard text='Кто хочет сформировать свою стратегию работы на рынке'/>
          <InfoCard text='Для тех кто хочет научиться самостоятельно анализировать проекты'/>
        </div>
      </div>
    </section>
  )
}

export default InfoSection;
