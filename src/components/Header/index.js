// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link,withRouter} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/"><img
      src="
https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website logo"
      className="logo"
    /></Link>
    <Popup
      modal
      trigger={
        <button
          className="nav-btn"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburg" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}  data-testid="closeButton"
          >
            <IoMdClose className="close" />
          </button>
        </>
      )}
      <div className="content">
        <Link to="/">
          <div className="container">
            <AiFillHome className="pop-icon" />
            <h1 className="head">Home</h1>
          </div>
        </Link>
        <Link to="/about">
          <div className="container">
            <BsInfoCircleFill className="pop-icon" />
            <h1 className="head">About</h1>
          </div>
        </Link>
      </div>
    </Popup>
  </nav>
)

export default withRouter(Header)
