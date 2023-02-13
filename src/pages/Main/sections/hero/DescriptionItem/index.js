import styles from '../styles.module.css';

const DescriptionItem = ({image, text}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', padding: '7.5px 0'}}>
      <img src={image} width={28} height={20} alt=""/>
      <p className={styles.heroContentTopLessons}>{text}</p>
    </div>
  )
}

export default DescriptionItem;
