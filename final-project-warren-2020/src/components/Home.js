import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import WomensHealth from './WomensHealth'

// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Home extends React.Component {

  render() {

    const buttons = {
      'background-color': '#b61b28',
      color: '#fff'
    }
    return (
      <div>
        <Link to="/donate/elizabethwarren2020" target="_top">
          <div className='donationsBar'   >
            <h1 className="giving-text">Give Now</h1></div>
        </Link>
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://media.giphy.com/media/lPjvLFOfrS3QUudX6S/source.mp4'
            playing='true'
            loop='true'
            width='100%'
            height='80%'
          />
        </div>
        <div className='quote-div'>
          <div className='quote-grid'>
            <div className='quote-img'>
              <img className='img' alt="Elizabeth Warren in front of American flag"
                src='https://www.usnews.com/dims4/USNEWS/692809a/2147483647/crop/4050x2658%2B0%2B3/resize/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F94%2F29%2Fe66a0d5349cd8c3dbbce6ac04d92%2F190911-2020warren-editorial.warren.JPG' />
            </div>
            <div className='grid-quote'>
              <h2 className='quote-text'>
                <p>There's a lot at stake for our democracy.{' '}
                  But we can't choose a candidate we don't believe in just because we're afraid.</p>
                <p>I'm not afraid.</p>
                <p>― Elizabeth Warren</p></h2>
            </div>
            <div className='link-button'>
              <Link to="/getinvolved/elizabethwarren2020" >
                <button style={buttons} class='fluid ui button'>Get Involved Today</button>
              </Link>
            </div>
          </div>
        </div>
        {}
        <div className='issues'>
          <div class='ui three column grid'>
            <div class='column'>
              <div className='ui card'>
                <img src='https://www.macleans.ca/wp-content/uploads/2018/07/abortion-rights-protest-1024x768-810x445.jpg' />
                <Link to="/choice/elizabethwarren2020">
                  <button className='button'>Learn More About Liz's Committment to Choice</button>
                </Link>
              </div>
            </div>
            <div class="column">
              <div className='ui card'>
                <img src='https://www.macleans.ca/wp-content/uploads/2018/07/abortion-rights-protest-1024x768-810x445.jpg' />
                <Link to="/choice/elizabethwarren2020">
                  <button className='button'>Learn More About Liz's Committment to Choice</button>
                </Link>
              </div>
            </div>
            <div class="column">
              <div className='ui card'>
                <img src='https://www.macleans.ca/wp-content/uploads/2018/07/abortion-rights-protest-1024x768-810x445.jpg' />
                <Link to="/choice/elizabethwarren2020">
                  <button className='button'>Learn More About Liz's Committment to Choice</button>
                </Link>
              </div>
            </div>
          </div>
        </div >
        {}
        <div className='twitter'>
          <div className='twitter-box'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ewarren"
              options={{ height: 400 }}
            /></div></div>
        <div className='youtube-block-grid'>
          <div className='youtube'>
            <iframe title='Dream Big'
              width='100%' height='580' src="https://www.youtube.com/embed/uF3IjYG8eeY"
              frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div >
    )
  }
}

export default Home