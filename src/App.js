import React,{useState,useEffect} from 'react';
import logo from '../src/assets/logo/sahajomy.png'; // 
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconInstagram} from './assets/icons/instagram.svg';
import CopyrightYear from 'react-copyright-year';
import "./App.css";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const App = () => {

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
 
 
  useEffect(()=>{
    setLoading(true)
    setColor("#FFD700")
    setTimeout(()=>{
      setLoading(false)
      
    },4000)

  },[])

  return (

    
        <React.Fragment>
    {

loading?   <div className="sweet-loading">
<CircleLoader color={color} loading={loading} css={override} size={150} text="loading"/> 

</div> :

<div className="card">
<div className="header">

<img className='center' src={logo} alt="Logo" />


</div>
<div className="content">
<div className="title-holder">
<h1>Stay tuned for something awesome.</h1>
<p>Website coming soon. Kindly visit us on social media pages for more updates of us.!</p>
</div>
<div className="social">
<a href="https://instagram.com/sahajomy" title="Instagram" target="_blank" rel="noopener noreferrer">
<IconInstagram className="icon" />
</a>
<a href="https://facebook.com/sahajomy" title="Facebook" target="_blank" rel="noopener noreferrer">
<IconFacebook className="icon" />
</a>
<a href="https://twitter.com/sahajomy" title="Twitter" target="_blank" rel="noopener noreferrer">
<IconTwitter className="icon" />
</a>
</div>
<a href="mailto:sahajomy@gmail.com">
<div className="cta">Send us an E-mail</div>
</a>
</div>
<div className="footer">
<span><CopyrightYear/>, All rights reserved.</span>
</div>
</div>
   }

  </React.Fragment>
   

  
  
   
    


  )
}

export default App



   