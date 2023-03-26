import React from 'react'
import "./section1.css"
function Section1(props) {
      const {asset_title,asset_description,asset_content}=props;
  return (
    <div>
      <div className='sec-01'>
        <div className='sec01-heading'>
          <h6>{asset_title}</h6>
          <div>i</div>
        </div>
        <div>
          <p><span><b>Description:</b></span>{asset_description}</p>
        </div>
        <div className='youtube-video'>
        <iframe  src={asset_content}>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Section1