import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';
import SliderNextButton from '../../../../components/SliderNextButton';
import SliderPrevButton from '../../../../components/SliderPrevButton';
import CourseItem from './CourseItem';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveNextCourse, setActivePrevCourse} from '../../../../store/features/coursesSlice';
import NoAvailableCourses from './NoAvailableCourses';

const LessonsSlider = () => {
  const dispatch = useDispatch();
  const coursesStatus = useSelector(state => state.course.status);
  const courses = useSelector(state => state.course.courses);
  const selectedCourseId = useSelector(state => state.course.activeSliderCourse?.id)
  const slider = useRef();

  const nextSlide = () => {
    dispatch(setActiveNextCourse());
    slider.current.slickNext();
  }

  const prevSlide = () => {
    dispatch(setActivePrevCourse());
    slider.current.slickPrev();
  }

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.wrapper}>
      {
        (coursesStatus === 'succeeded' && courses.length > 0) && (
          <>
            <div className={styles.slider}>
              <Slider ref={slider} {...settings}>
                {courses.map(course => (
                  <CourseItem key={course.id} description={course.description} image={course.image} title={course.title}/>
                ))}
              </Slider>
            </div>
            <div className={styles.buttonWrapper}>
              <Link className={styles.linkToLessons} to={`/courses/${selectedCourseId}`}>перейти к урокам</Link>
              {
                courses.length > 1 && (
                  <div className={styles.sliderButtons}>
                    <SliderPrevButton onClick={prevSlide}/>
                    <SliderNextButton onClick={nextSlide}/>
                  </div>
                )
              }
            </div>
          </>
        )
      }
      {
        (coursesStatus === 'failed' || courses.length === 0) && <NoAvailableCourses/>
      }
    </div>
  )
}

export default LessonsSlider;
