import styles from './styles.module.css';
import Card from './Card';

const PropositionSection = () => {
  return (
    <section className={styles.proposition}>
      <div className="container">
        <h2 className={styles.title}>
          Что вы получите на курсе
        </h2>
        <div className={styles.wrapper}>
          <Card number='01' text='Узнаете о понятиях финансовой грамотности'/>
          <Card number='02' text='Понимание что такое криптовалюта и как с ней работать'/>
          <Card number='03' text='Сможете разобраться с технологией блокчейн и его обозревателями'/>
          <Card number='04' text='Узнаете как делать фундаментальный и технический анализ рынка'/>
          <Card number='05' text='Сможете покупать и продавать криптовалюту на CEX и DEX биржах'/>
          <Card number='06' text='Узнаете психологию рынка'/>
          <Card number='07' text='Узнаете одну из стратегий работы на рынке'/>
          <Card number='08' text='Научитесь преумножать капитал в долгосрочной перспективе!'/>
        </div>
      </div>
    </section>
  )
}

export default PropositionSection;
