import LessonItem from './LessonItem';
import {useSelector} from 'react-redux';

const LessonsList = () => {
  const lessons = useSelector(state => state.home.items);

  return (
    <div>
      {Boolean(lessons.length) && lessons.map(lesson => (
        <LessonItem
          key={`lessons ${lesson.id}`}
          id={lesson.id}
          image={lesson.image}
          title={lesson.title}
        />
      ))}
    </div>
  )
}

export default LessonsList;
