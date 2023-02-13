import {useDispatch} from 'react-redux';
import {openLogin} from '../../store/features/popupSlice';

const LoginPopup = () => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button className="header-nav__btn-red btn-dark menu-btn" type="button" onClick={() => dispatch(openLogin())}>
          Войти
        </button>
      </div>
    </>
  );
};

export default LoginPopup;
