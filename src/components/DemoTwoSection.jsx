import laptop from '../laptop.png'
function DemoTwoSection(){
    return(
    <div className="line">
                 <div className="abouttext">
          <span id="h2">Designed for startups &<br></br> brands</span><br></br>
            <span id="h3">Just get the code and sit tight, you will witness its power and<br></br> performance in lead generations. is simple yet Powerful and <br></br>productive technology. Experience, then believe</span>
            <nav>
              <ul className="aboutnav">
                <li className="navtext">Write some feature here.</li>
                <li className="navtext">Repeat the same with another one.</li>
                <li className="navtext">Complete the list with the last.</li>
              </ul>
              </nav>
              <button>WATCH INTRO</button>
          </div>
          <div className="lapimage"><img className="lap" src={laptop}></img></div>
        </div>
    )
}
export default DemoTwoSection