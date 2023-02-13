import {Link} from 'react-router-dom';
import styles from './styles.module.css'

const CustomLink = ({icon, text, ...props}) => {
  return (
    <Link className={styles.link} {...props}>
      <img width={24} height={24} src={icon} alt=""/>
      <span className={styles.text}>{text}</span>
    </Link>
  )
}

export default CustomLink
