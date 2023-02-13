import styles from './styles.module.css'
import icon from './prev.svg';

const SliderPrevButton = ({...props}) => {
  return (
    <button className={styles.button} {...props}><img src={icon} width={29} height={28} alt="Previous slide"/></button>
  )
}

export default SliderPrevButton;
