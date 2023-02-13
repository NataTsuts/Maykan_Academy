import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const coursesSlice = createSlice({
  name: 'course',
  initialState: {
    status: 'idle',
    error: null,
    courses: [],
    activeSliderCourse: {}
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload
    },
    setActiveCourse: (state, action) => {
      state.activeSliderCourse = state.courses.find((course) => course.id === Number(action.payload))

    },
    setActiveNextCourse: (state) => {
      let i = state.courses.findIndex(course => state.activeSliderCourse.id === course.id) + 1; // increase i by one
      i = i % state.courses.length; // if we've gone too high, start from `0` again
      state.activeSliderCourse = state.courses[i]; // give us back the item of where we are now
    },
    setActivePrevCourse: (state) => {
      let i = state.courses.findIndex(course => state.activeSliderCourse.id === course.id); // increase i by one
      if (i === 0) { // i would become 0
        i = state.courses.length; // so put it at the other end of the array
      }
      i = i - 1; // decrease by one
      state.activeSliderCourse = state.courses[i]; // give us back the item of where we are now
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.courses = action.payload
        state.activeSliderCourse = action.payload[0];
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const {setCourses, setActiveCourse, setActiveNextCourse, setActivePrevCourse} = coursesSlice.actions

export const fetchCourses = createAsyncThunk('course/fetchCourses', async () => {
  const {data} = await axios.get(`https://api.maykanacademy.com/api/courses`, {
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  return data.data
})

export default coursesSlice.reducer
