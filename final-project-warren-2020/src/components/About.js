import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'


class About extends React.Component {
  render() {
    return (
      <div className="about-page-background">
        <Link to="/donate/elizabethwarren2020" target="_top">
          <div className='donationsBar-new'>
            <h1 className="giving-text">Give Now</h1></div>
        </Link>
        <div className="hero-image-div">
          <div class="hero-image" >
            <div class="hero-text">
              <h1 style={{ fontStyle: 'italic' }}>Meet Liz</h1>
            </div>
          </div>
        </div>
        <h2 className='about-page-header'>Elizabeth grew up on the ragged edge of the middle class in Oklahoma and became a teacher, a law professor, and a US Senator because America invested in kids like her.</h2>
        <div>
          <div className='image-box'>
            <img className='bio-img-1' src='https://images.ctfassets.net/4ubxbgy9463z/6DpizKApsvsuw03rAiqgXB/386fb583a4ea3b255413900786a78a53/Bio-1.jpg' alt='Elizabeth with her mom and brothers' />
          </div></div>
        <p style={{ fontSize: '10' }}>Elizabeth with her mom and brothers</p>
        <div className='about-page'>
          <h3>Elizabeth's dad sold fencing and carpeting, and ended up as a building maintenance man. Her mom stayed home with Elizabeth and her older brothers.
          When Elizabeth was twelve, her dad suffered a heart attack and was out of work for a long time. They lost the family station wagon, and were about an inch away from losing their home, when her mom got a minimum wage job answering phones at Sears. That job saved their home, and it saved their family.
          </h3></div>

        <div className='about-page'><h3>All three of Elizabeth’s older brothers served in the military. Her oldest brother was career Air Force and flew combat missions in Vietnam.
            Her middle brother went on to work construction. Her youngest brother started his own business.</h3>
        </div>
        <div className='image-box'>
          <img className='bio-img-1' src='https://images.ctfassets.net/4ubxbgy9463z/4bypAdjXMaFz3GmsCXIzti/93ac674c958c3863f96fe26e50b4130f/Bio-2.jpg'
            alt='Elizabeth with her mom and brothers' />
        </div>
        <p style={{ fontSize: '10' }}>Elizabeth at age 22 holding her newborn daughter, Amelia</p>
        <div className='about-page'>
          <h3>From the time Elizabeth was in second grade, she wanted to be a teacher, but her family didn’t have money for college.
          She earned a debate scholarship, but dropped out to get married to her high school sweetheart at 19.
          Elizabeth got a second chance at a commuter college in Texas that cost $50 a semester, and she started teaching children with special needs at a public elementary school.
          Her daughter Amelia was born when Elizabeth was 22.
           </h3></div>

        <div className='about-page'>
          <h3>When Amelia turned two, Elizabeth enrolled in a public law school that cost $450 a semester.
          Three years later, she graduated at eight months pregnant with her son Alex.
          Elizabeth hung out a shingle and practiced law out of her living room, but she soon returned to teaching.
        </h3></div>
        <div className='about-page'>
          <h3>
            Elizabeth was a law professor for more than 30 years at Rutgers University, the University of Houston, University of Texas-Austin, University of Michigan, University of Pennsylvania, and Harvard University.
            She is one of the nation’s top experts on the financial pressures facing middle class families.
            She taught classes on commercial law, contracts, and bankruptcy, and conducted groundbreaking research on the connection between health care costs and personal bankruptcy.
        </h3></div>
        <div className='image-box'>
          <img className='bio-img-1' src='https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201811/514053746.jpg' alt='Elizabeth with her mom and brothers' />
        </div>
        <p style={{ fontSize: '10' }}>Elizabeth serving in the United States Senate</p>
        <div className='about-page'>
          <h3>During the 2008 financial crisis, Democratic Majority Leader Harry Reid asked Elizabeth to serve as Chair of the Congressional Oversight Panel to provide some oversight of TARP, the Wall Street bailout.
        She fought to protect taxpayers, hold Wall Street accountable, and ensure tough oversight of both the Bush and Obama Administrations.
        </h3></div>
        <div className='about-page'>
          <h3>
            Elizabeth is widely credited for the original thinking, political courage, and relentless persistence that led to the creation of the Consumer Financial Protection Bureau.
            As an assistant to President Barack Obama and special adviser to the Secretary of the Treasury, she led the establishment of the consumer agency to protect consumers from financial tricks and traps often hidden in mortgages, credit cards, and other financial products.
            Wall Street opposed the CFPB, and they didn’t want Elizabeth – the agency’s biggest champion – to run it. After Senate Republicans vowed to block Elizabeth’s nomination to serve as the first director of the CFPB, Elizabeth ran for the U.S. Senate in her home state of Massachusetts.
            She has served as the Bay State’s Senior Senator since 2013.
            </h3></div>
        <div className='about-page-gif'>
          <h3>
            Elizabeth and her husband Bruce have been married for 38 years. They have three grandchildren and a golden retriever named Bailey.</h3> </div>
        <div className='image-box'>
          <img className='bio-img-1' src='https://bostonglobe-prod.cdn.arcpublishing.com/resizer/cHeMydQvQQ2qKehYZKCRAuKcmZw=/420x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/XSYK5LD6L4I6TGDHAVKMS6HRZ4.jpg' alt='Elizabeth with her mom and brothers' />
        </div>
        <p style={{ fontSize: '10' }}>Elizabeth, Bruce, and Bailey</p>
        <div></div>
        {/* <div className='gif'>
            <ReactPlayer
              className='react-player'
              url='https://media.giphy.com/media/TK4XFFAzhHmar2MsDG/giphy.mp4'
              playing='true'
              loop='true'
              width='100%'
            />
          </div> */}
      </div >

    )
  }
}

export default About
