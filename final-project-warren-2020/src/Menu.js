import React from 'react'
import { Link } from 'react-router-dom'

const buttonStyle = {
  width: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 10px',
  'margin-top': '4%',
  'margin-bottom': '4%'
}

class Menu extends React.Component {
  render() {
    return (
      <div className='Menu'>
        <div className='menu-grid'>
          <div className='links'>
            <Link to="/elizabethwarren2020" className='link'>
              <div className='about-box'>
                <h1>Home</h1></div>
            </Link>
            <Link to="/my-reps/elizabethwarren2020" className='link'>
              <div className='my-reps'>
                <h1>Find My Reps</h1></div>
            </Link>
            <Link to="/donate/elizabethwarren2020" className='link'>
              <div className='donation-box'>
                <h1>Give Now</h1></div>
            </Link>
            <Link to="/getinvolved/elizabethwarren2020" className='link'>
              <div className='get-involved-box'>
                <h1 className='involved-button'>Get Involved</h1></div>
            </Link>
            <Link to="/about/elizabethwarren2020" className='link'>
              <div className='about-box'>
                <h1>About</h1></div>
            </Link>
          </div>
          <div className='menu-gif'>
            <iframe src="https://giphy.com/embed/LqrDQpeG0ojjfEjKCb"
              height="480"
              frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>
        {/*  */}

        <div className='social-media-grid' >
          <div className='four ui icon buttons'>
            <div className='social-media'>
              <a href="https://www.facebook.com/ElizabethWarren/" target="_blank">
                <button style={buttonStyle} class="ui facebook button">
                  <i class="facebook icon"></i>
                  Facebook
                </button>
              </a>
              <a href='https://twitter.com/ewarren' target="_blank">
                <button style={buttonStyle} class="ui twitter button">
                  <i class="twitter icon"></i>Twitter</button></a>
              <a href='https://www.instagram.com/elizabethwarren/' target="_blank">
                <button style={buttonStyle} class="ui instagram button">
                  <i class="instagram icon"></i>Instagram</button></a>

              <a href='https://www.youtube.com/channel/UCrj-0FxK19tgUR2EbHkBBGg' target="_blank">
                <button style={buttonStyle} class="ui  youtube button">
                  <i class="youtube icon" ></i>
                  YouTube</button></a>
            </div>
          </div>
          <div className='footer'>
            <p>PAID FOR BY WARREN FOR PRESIDENT.</p>
            <p> © Copyright 2019. All rights reserved.</p>
          </div></div>
      </div >
    )
  }
}

export default Menu