import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'
import RulesBtn from './StyledButton'

import './index.css'

const RulesButton = () => (
  <Popup
    modal
    trigger={
      <RulesBtn type="button" className="rules-btn">
        Rules
      </RulesBtn>
    }
  >
    {close => (
      <div className="modal-container">
        <button
          type="button"
          className="trigger-button"
          onClick={() => close()}
        >
          <RiCloseLine className="close-modal-btn" />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="modal-image-rules"
        />
      </div>
    )}
  </Popup>
)

export default RulesButton
