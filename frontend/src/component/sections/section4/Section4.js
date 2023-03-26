import React from 'react'
import "./section4.css"
function Section4(props) {
  const {asset_title,asset_description,asset_content}=props;
  return (
    <div>
      <div className="sec-04">
        <div className='sec01-heading'>
          <h6>{asset_title}  </h6>
          <div>i</div>
        </div>
        <div>
          <p><span><b>Description:</b></span>{asset_description}</p>
        </div>
        <div className="sec-04-main">
          <div className='introduction'>
            <i className='fas fa-angle-up'></i>
            <h4>Introduction</h4>
          </div>
          <div className='s4method'>
            The 4SA Method , How to bring a idea into progress ?
          </div>
          <div className='seeMore'>See more</div>
          <div className='introduction'>
            <i className='fas fa-angle-up'></i>
              <h4>Thread A</h4>
          </div>
          <div className='sec-04-threadA-below-text'>
            How are you going to develop your stratergy? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
          </div>
          <div className='seeMore'>See more</div>
          <div className='Example'><h4>Example 1</h4></div>
          <div className='Example-below-text'>You have a concept, How will you put into progress? </div>
        </div>
      </div>
    </div>
  )
}

export default Section4