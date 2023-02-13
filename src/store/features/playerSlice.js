import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    status: 'idle',
    error: null,
    course: {},
    nextCourseId: null,
    prevCourseId: null,
    activeLesson: {}
  },
  reducers: {
    setLessons: (state, action) => {
      state.course.lessons = action.payload
    },
    setActiveLesson: (state, action) => {
      state.activeLesson = state.course.lessons.find((lesson) => lesson.id === action.payload)
    },
    setNextCourseId: (state, action) => {
      state.nextCourseId = action.payload
    },
    setPrevCourseId: (state, action) => {
      state.prevCourseId = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCourseById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.course = action.payload
        state.activeLesson = state.course.lessons[0]
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const {setLessons, setActiveLesson, setNextCourseId, setPrevCourseId} = playerSlice.actions

export const fetchCourseById = createAsyncThunk('player/fetchCourseById', async (id, {rejectWithValue}) => {
  try {
    const {data} = await axios.get(`https://api.maykanacademy.com/api/courses/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
    return data.data;
  } catch (e) {
    return rejectWithValue(e.response.data)
  }
})

export default playerSlice.reducer
