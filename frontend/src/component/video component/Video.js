import React from 'react'
import Section1 from '../sections/section1/Section1'
import Section2 from '../sections/section2/Section2'
import Section3 from '../sections/section3/Section3'
import Section4 from '../sections/section4/Section4'
import './videoStyle.css'

function Video() {
  const data=[
    {
      "asset_id": 18883,
      "asset_title": "Technical Project Management",
      "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
      "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
      "asset_type": "display_asset",
      "asset_content_type": "video"
    },
    {
      "asset_id": 18884,
      "asset_title": "Threadbuild",
      "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
      "asset_content": " ",
      "asset_type": "input_asset",
      "asset_content_type": "threadbuilder"
    },
    {
      "asset_id": 18885,
      "asset_title": "Structure you pointers ",
      "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
      "asset_content": " ",
      "asset_type": "input_asset",
      "asset_content_type": "article"
    },
    {
      "asset_id": 18886,
      "asset_title": "4SA Method",
      "asset_description": "To explore more read more",
      "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
      "asset_type": "display_asset",
      "asset_content_type": "article"
    }
  ]
  return (
   <>
     <div className='video_cnt'>
     {data.map((element) => { if(element.asset_id%4===3){
                            return <div  key={element.asset_id}> 
                            <Section1  asset_content={element.asset_content} asset_title={element.asset_title}  asset_description={element.asset_description} />
                            </div>}
                            if(element.asset_id%4===0){
                              return <div  key={element.asset_id}>
                                 <Section2 asset_content={element.asset_content} asset_title={element.asset_title}  asset_description={element.asset_description} />
                              </div>}
                              if(element.asset_id%4===1){
                                return <div key={element.asset_id}>
                                   <Section3 asset_content={element.asset_content} asset_title={element.asset_title}  asset_description={element.asset_description} />
                                </div>}
                                if(element.asset_id%4===2){
                                  return <div key={element.asset_id}>
                                     <Section4 asset_content={element.asset_content} asset_title={element.asset_title}  asset_description={element.asset_description} />
                                  </div>}
                            
                        })}
     </div>
   
   </>
  )
}

export default Video