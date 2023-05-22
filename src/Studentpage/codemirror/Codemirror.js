import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import "../../App.css"
import Coursenavbar from "../coursenavbar/Coursenavbar";
import { NavLink } from "react-router-dom";
const Practicecompailer= () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

 
    const timeout = () => {
      setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`);
    };

 
  return (
    <>
      <div className="pane top-pane">
        
        <Editor 
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />

      
      </div>


<div style={{display:"flex"}}>


      <div style={{height:"280px",width:"710px",background:"black",border:"1px solid white"}}>
        {/* <div style={{height:"30px",width:"120px",background:"white",marginTop:"310px",marginLeft:"10px",textAlign:"center",borderRadius:"10px"}}>
        </div> */}

      </div>



      <div className="pane" style={{background:"black",width:"827px",border:"1px solid white",position:"relative",height:"280px"}}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        /> 
      </div>
      <button type="button" class="btn btn btn-dark" onClick={timeout} style={{position:"absolute",left:"1310px",top:"675px"}}><i class="ri-loop-left-line"></i>Load</button>
      <button type="button" class="btn btn-success" onClick={timeout} style={{position:"absolute",left:"1410px",top:"675px"}}><i class="ri-loop-left-line"></i>Validate</button>
</div>
    </>
  );
};





export default Practicecompailer;