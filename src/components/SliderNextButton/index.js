import styles from './styles.module.css';
import icon from './next.svg';

const SliderNextButton = ({...props}) => {
  return (
    <button className={styles.button} {...props}><img src={icon} width={29} height={28} alt="Next slide"/></button>
  )
}

export default SliderNextButton;
