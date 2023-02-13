import styles from './styles.module.css'

const CourseItem = ({title, description, image}) => {
  return (
    <div className={styles.slide}>
      <img width={240} height={145} src={image} alt="course"/>
      <div>
        <span>{title}</span>
        <p dangerouslySetInnerHTML={{__html: description}}></p>
      </div>
    </div>
  )
}

export default CourseItem;
