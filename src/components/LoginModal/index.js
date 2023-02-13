import ValidationError from '../ValidationError';
import eyeIcon from '../LoginPopup/images/fluent_eye.svg';
import facebookLogo from '../LoginPopup/images/fb.svg';
import googleLogo from '../LoginPopup/images/google-logo.svg';
import {closeLogin, openRegister} from '../../store/features/popupSlice';
import closeIcon from '../LoginPopup/images/close.svg';
import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {checkToken, logIn} from '../../store/features/authSlice';
import {closeBurger} from '../../store/features/burgerSlice';

const contentStyle = {
  border: 0,
  background: 'none',
  borderRadius: 0,
  padding: 0,
  height: '100%',
  width: '100%',
  inset: 0
}

const LoginModal = () => {
  const dispatch = useDispatch()
  const {register, setError, handleSubmit, reset, formState: {errors, isSubmitSuccessful}} = useForm();
  const [isPasswordVisible, setPassportVisibility] = useState(false);
  const isOpen = useSelector(state => state.popup.isLoginOpened)
  const navigate = useNavigate();

  const closeModal = () => dispatch(closeLogin());

  const onSubmit = async data => {
    try {
      await dispatch(logIn(data)).unwrap();
      dispatch(checkToken())
    } catch (e) {
      if (e.errors?.email) {
        e.errors.email.forEach((msg) => {
          setError('email', {message: msg})
        });
      }
      if (e.errors?.password) {
        e.errors.password.forEach((msg) => {
          setError('password', {message: msg})
        });
      }
      throw new Error('Server validation error');
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      closeModal();
      dispatch(closeBurger())
      navigate('/cabinet/lessons');
    }
  })

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}
           parentSelector={() => document.querySelector('#root')}
           style={{overlay: {zIndex: 999, backgroundColor: 'rgba(0, 0, 0, 0.9)'}, content: contentStyle}}>
      <div>
        <div className="popup-log login">
          <div className="popup-log__inner">
            <h4 className="popup-login__title">
              Войти
            </h4>
            <form className="popup-log__form"
                  onSubmit={handleSubmit(onSubmit)}>
              <div className="popup-log__form-elem">
                <label className="popup-log__label">
                  Электроная почта
                  <input className="popup-log__form-input email-login" {...register('email', {required: true})}
                         type="email"/>
                </label>
                {errors.email && <ValidationError message={errors.email.message}/>}
              </div>
              <div className="popup-log__form-elem">
                <label className="popup-log__label">
                  Пароль
                  <input
                    className="popup-log__form-input password-login" {...register('password', {required: true})}
                    type={isPasswordVisible ? 'text' : 'password'}/>
                  <button type='button' onClick={() => setPassportVisibility(!isPasswordVisible)}
                          className="togglePass"><img
                    src={eyeIcon} alt=""/></button>
                </label>
                {errors.password && <ValidationError message='Пароль обязателен'/>}
              </div>
              <div className="popup-login">
                <div className="popup-login__left">
                  <div className="checkbox-inner">
                    <label className="popup-login__checkbox-label">
                      <input className="popup-login__checkbox" {...register('remember')} type="checkbox"/>
                    </label>
                  </div>
                  <p className="popup-login__text">
                    Не выходить из системы на этом компьютере
                  </p>
                </div>
                <button className="popup-login__btn" type="submit">
                  Войти
                </button>
              </div>
            </form>

            <div className="popup-login__from">
            <span className="popup-login__from-text">
                Войти через:
            </span>
              <ul className="popup-login__from-list">
                <li className="popup-login__from-elem">
                  <a href="#" className="popup-login__from-link">
                    <img className="popup-login__from-img" src={facebookLogo} alt="login with apple" width="25"
                         height="24"/>
                  </a>
                </li>
                <li className="popup-login__from-elem">
                  <a href="#" className="popup-login__from-link">
                    <img className="popup-login__from-img" src={googleLogo} alt="login with google"
                         width="25"
                         height="24"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="popup-links">
              <a href="#" onClick={() => {
                dispatch(closeLogin())
                dispatch(openRegister())
              }} className="popup-link">Создать аккаунт!</a>
              <a href="https://t.me/Vitalik_insider" target='_blank' rel="noopener noreferrer"
                 className="popup-link">Забыли ваш пароль?</a>
              <a href="#" className="popup-link">Политика конфиденциальности.</a>
            </div>
          </div>
          <a className="popup-close" onClick={closeModal}>
            <img className="closing" id="closePopupTwo" src={closeIcon} width="30" height="30" alt=""/>
          </a>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal
