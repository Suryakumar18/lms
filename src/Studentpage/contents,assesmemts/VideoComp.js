

import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import Videotest from '../videos/test1.mp4'
import React from 'react'
import TopicNav from './TopicNav'
import StudentSidemenu from '../components/Studentsidemnu/StudentSidemenu'

function VideoComp() {
  return (

    <div>
        <TopicNav />
        <div style={{display:'flex'}}>
        <StudentSidemenu />
    <div style={{width:"900px",marginLeft:"150px",marginTop:"30px"}}>
        <Video autoPlay loop 
        
        >
            <source src={Videotest} type='video/webm'></source>

        </Video>

        <div>
            <h5>HTML FULL CONTENTS VIDEOS</h5>
            <p>HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content. HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</p>
        </div>



    </div>
    </div>
    </div>
  )
}

export default VideoComp