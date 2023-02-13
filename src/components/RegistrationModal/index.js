import ValidationError from '../ValidationError';
import eyeIcon from '../RegistrationPopup/images/fluent_eye.svg';
import closeIcon from '../RegistrationPopup/images/close.svg';
import Modal from 'react-modal';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {closeRegister} from '../../store/features/popupSlice';
import {fetchRegister} from '../../store/features/authSlice';
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

const RegistrationModal = () => {
  const dispatch = useDispatch();
  const {register, setError, watch, handleSubmit, reset, formState: {errors, isSubmitSuccessful}} = useForm({
    defaultValues: {
      terms: true
    }
  });
  const watchPassword = watch('password');
  const [isPassword1Visible, setPassword1Visibility] = useState(false);
  const [isPassword2Visible, setPassword2Visibility] = useState(false);
  const isOpen = useSelector(state => state.popup.isRegisterOpened)

  const closeModal = () => dispatch(closeRegister());

  const onSubmit = async data => {
    try {
      await dispatch(fetchRegister(data)).unwrap()
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
      dispatch(closeBurger())
      closeModal();
    }
  })
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}
           parentSelector={() => document.querySelector('#root')}
           style={{overlay: {zIndex: 999, backgroundColor: 'rgba(0, 0, 0, 0.9)'}, content: contentStyle}}>
      <div className="popup-log register">
        <div className="popup-log__inner">
          <h4 className="popup-login__title">
            Регистрация
          </h4>
          <form className="popup-log__form" id="registerForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="popup-log__form-elem">
              <label className="popup-log__label">
                ФИО
                <input className="popup-log__form-input fullName-register" {...register('name', {required: true})}
                       type="text"/>
              </label>
              {errors.name && <ValidationError message='Имя обязательно'/>}
            </div>
            <div className="popup-log__form-elem">
              <label className="popup-log__label">
                Электроная почта
                <input className="popup-log__form-input email-register" {...register('email', {required: true})}
                       type="email"/>
              </label>
              {errors.email && <ValidationError message={errors.email.message}/>}
            </div>
            <div className="popup-log__form-elem">
              <label className="popup-log__label">
                Пароль
                <input
                  className="popup-log__form-input password-register" {...register('password', {required: true})}
                  value={watchPassword}
                  type={isPassword1Visible ? 'text' : 'password'}/>
                <button type='button' onClick={() => setPassword1Visibility(!isPassword1Visible)}
                        className="togglePass"><img
                  src={eyeIcon}
                  alt=""/></button>
              </label>
              {errors.password && <ValidationError message='Пароль обязателен'/>}
            </div>
            <div className="popup-log__form-elem">
              <label className="popup-log__label">
                Подтвердить пароль
                <input
                  className="popup-log__form-input password-registerConfirm" {...register('password_confirmation', {
                  required: true,
                  validate: value => value === watchPassword
                })}
                  type={isPassword2Visible ? 'text' : 'password'}/>
                <button type='button' onClick={() => setPassword2Visibility(!isPassword2Visible)}
                        className="togglePass"><img
                  src={eyeIcon} alt=""/></button>
              </label>
              {errors.password_confirmation && <ValidationError message='Пароли должны совпадать.'/>}
            </div>
            <div className="popup-login reg">
              <div className="popup-login__left">
                <div className="checkbox-inner">
                  <label className="popup-login__checkbox-label">
                    <input className="popup-login__checkbox terms-register"
                           type="checkbox"
                           {...register('terms', {required: true})}
                    />
                  </label>
                </div>
                <p className="popup-login__text">
                  Я ознакомлен и принимаю все условия компании.
                </p>
              </div>
              {errors.terms && <ValidationError message='Вы должны согласиться с политикой.'/>}
              <div className="popup-login__left">
                <div className="checkbox-inner">
                  <label className="popup-login__checkbox-label">
                    <input className="popup-login__checkbox subscribe-register" {...register('subscribe')}
                           type="checkbox"/>
                  </label>

                </div>
                <p className="popup-login__text">
                  Подписаться на новости.
                </p>
              </div>
              <button className="popup-login__btn" type='submit'>
                Зарегистрироваться
              </button>
            </div>
          </form>

          <div className="popup-links">
            <a href="#" className="popup-link decoration">условиями обработки персональных данных </a>
            <a href="#" className="popup-link decoration">правилами использования сервиса..</a>
          </div>

        </div>
        <a className="popup-close" onClick={closeModal}>
          <img className="closing" src={closeIcon} width="30" height="30" alt=""/>
        </a>
      </div>
    </Modal>
  )
}

export default RegistrationModal;
