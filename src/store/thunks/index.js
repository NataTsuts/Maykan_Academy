import {getAllCourses} from '../../services/courses';
import {setCourses} from '../features/coursesSlice';

export const fetchAllCourses = (token) => async dispatch => {
  try {
    const {data} = await getAllCourses(token)
    dispatch(setCourses(data))
  } catch (err) {
    console.log(err);
  }
}
