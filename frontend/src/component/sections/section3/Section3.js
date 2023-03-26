import React from 'react'
import "./section3.css"
function Section3(props) {
  const {asset_title,asset_description,asset_content}=props;
  return (
    <div>
      <div className="sec-03">
        <div className='sec01-heading'>
          <h6>{asset_title}</h6>
          <div>i</div>
        </div>
        <div>
          <p><span><b>Description:</b></span>{asset_description}</p>
        </div>
        <div className="sec-03-main">
          <h4 className='title'>Title</h4>
            <div className='blank-box'></div>
            <h4 className='content'>Content</h4>
            <div className='setting'>
              <div className="setting-box">
                <div className="setting-line1">
                  <div>File</div>
                  <div>Edit</div>
                  <div>View</div>
                  <div>Insert</div>
                  <div>Format</div>
                  <div>Tools</div>
                  <div>Table</div>
                  <div>Help</div>
                </div>
                <div className="setting-line2">
                  <i className="fa fa-angle-left"></i>
                  <i className="fa fa-angle-right"></i>
                  <i className='fas fa-expand-arrows-alt'></i>
                  <span className='para'>Paragraph</span>
                  <i className="fa-solid fa-ellipsis-vertical row-dot-menu"></i>
                </div>
              </div>
            <div className='sec4-blank-box-last'></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Section3