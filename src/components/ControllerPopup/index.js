import React, {useState} from 'react';
// import Warper from './Warper';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const ControlledPopup = ({component}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          {component}
        </div>
      </Popup>
    </div>
  );
};

export default ControlledPopup;
