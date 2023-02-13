import {useDispatch} from 'react-redux';
import {openRegister} from '../../store/features/popupSlice';

const RegistrationPopup = ({text, ...props}) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button type="button" className="header-nav__btn btn-light menu-btn"
                onClick={() => dispatch(openRegister())} {...props}>
          {text}
        </button>
      </div>
    </>
  );
};

export default RegistrationPopup
