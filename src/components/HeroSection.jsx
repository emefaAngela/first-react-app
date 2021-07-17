import Logo from '../logo.jpg'

function HeroSection(){
    return(
        <div className="imagesection">
        <div className="header">
          <div id="logo"><img  src={Logo}></img></div>
          <div className="navbar">
            <nav>
              <ul>
                <li className="headernav">HOME</li>
                <li  className="headernav">SERVICES</li>
                <li  className="headernav">FEATURES</li>
                <li  className="headernav">REVIEWS</li>
                <li  className="headernav">PRICING</li>
                <li  className="headernav">CONTACT</li>
                </ul>
            </nav>
          </div>
        </div>
        <div className="text">
          <span id="h1">Meet Destiny, the<br></br> visionary landing<br></br> Page.</span><br></br>
          <span>Re-targeting your audience with competitive intelligence embedded in Destiny. See it in action and then believe</span><br></br>
          <button>WATCH INTRO</button>
        </div>
      </div>
    )
}


export default HeroSection