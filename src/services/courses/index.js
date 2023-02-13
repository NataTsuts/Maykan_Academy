import axios from 'axios';

export const getAllCourses = async (token) => {
  await axios.get(`https://api.maykanacademy.com/api/courses`, {
    headers: {Authorization: `Bearer ${token}`}
  })
}
