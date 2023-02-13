import MainPage from './pages/Main';
import {ToastContainer} from 'react-toastify';
import Layout from './layouts/Layout';
import {useRoutes} from 'react-router';
import Cabinet from './pages/Cabinet';
import Lessons from './pages/Lessons';
import Dashboard from './pages/Cabinet/Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {checkToken} from './store/features/authSlice';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginModal from './components/LoginModal';
import RegistrationModal from './components/RegistrationModal';

const App = () => {
  const dispatch = useDispatch()
  const {user, validationStatus} = useSelector(state => state.auth)

  useEffect(() => {
    if (validationStatus === 'idle') {
      dispatch(checkToken())
    }
  }, [dispatch, validationStatus])

  return useRoutes([{
    path: '/',
    element:
      <>
        <ToastContainer/>
        <Layout/>
        <LoginModal/>
        <RegistrationModal/>
      </>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: 'cabinet',
        element: (
          <ProtectedRoute user={user}>
            <Cabinet/>
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'lessons',
            element: <Dashboard/>
          },
          {
            path: 'profile',
            element: <div>Страница профиля в разработке...</div>
          }
        ]
      },
      {
        path: 'courses',
        children: [
          {
            path: ':id',
            element: (
              <ProtectedRoute user={user}>
                <Lessons/>
              </ProtectedRoute>
            ),
          }
        ]
      },
      {
        path: '*',
        element: <MainPage/>
      }
    ],
  }])
}

export default App;
