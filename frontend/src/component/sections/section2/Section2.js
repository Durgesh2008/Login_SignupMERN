import React from 'react'
import "./section2.css"
function Section2(props) {
  const {asset_title,asset_description,asset_content}=props;
  return (
    <div>
      <div className="sec-02">
        <div className='sec01-heading'>
          <h6>{asset_title}</h6>
          <div>i</div>
        </div>
        <div>
          <p><span><b>Description:</b>{asset_description}</span></p>
        </div>
        <div className="threadA">
          <i className='fas fa-angle-up'></i>
          <h5>Thread A</h5>
        </div>
        <div className="subthread">
          <div className="sub-thread01">
            <div className='sub-text'>Sub thread 1</div>
            <div className='text'>Enter Text here</div>
          </div>
          <div className="sub-interpretation01">
            <div className='sub-text'>Sub Interpretation</div>
            <div className='text'>Enter Text here</div>
          </div>
        </div>
        <div className="sec-2-icon">
          <i className='fas fa-lightbulb'></i>
          <i className='fas fa-comment-alt'></i>
          <i className="fa fa-question-circle"></i>
          <i className='fas fa-seedling'></i>
          <select name="" className="select-catag">
            <option value="">Select Categ</option>
          </select>
          <select name="" className="select-proc">
            <option value="">Select Proces</option>
          </select>
        </div>
        <button  className='subthread-btn' >+ Sub-thread</button>
        <div className="sub-summary">
            <div className='sub-text'>Summary for thread A</div>
            <div className='text'>Enter Text here</div>
          </div>
      </div>
    </div>
  )
}

export default Section2