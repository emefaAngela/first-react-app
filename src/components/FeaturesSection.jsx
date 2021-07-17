import web from '../web.png'
import Lock from '../lock.png'
import shield from '../shield.png'

function FeaturesSection(){
    return(
        <div className="featuressection">
        <div className="featuretext">
          <span id="h4">Destiny isn't A.I, its the result of human intelligence.</span><br></br>
          <span>Ne homero petentium mel,eu pro putent persecuti. id lius mutet gubergren, eros harum<br></br> hendreit ex eos, in quo vocibus inmicus gubergren.</span>
        </div>
        <div className="iconssection">
        <div className="icon">
          <img className="feature" src={web}></img>
          <p className="title">Highly Responsive</p>
          <span className="subtext">id ius mutat gubergren, eros harum hendrerit<br></br> ex eos, in quo vocibus inimicus gubergren Experience then believe.</span>
        </div>
        <div className="icon">
        <img className="feature" src={Lock}></img>
          <p className="title">Built-in Security</p>
          <span className="subtext">id ius mutat gubergren, eros harum hendrerit <br></br>ex eos, in quo vocibus inimicus gubergren Experience then believe.</span>
        </div>
        <div className="icon">
        <img  className="feature"src={shield}></img>
          <p className="title">Safety Locked</p>
          <span className="subtext">id ius mutat gubergren, eros harum hendrerit<br></br> ex eos, in quo vocibus inimicus gubergren Experience then believe.</span>
        </div>
        </div>
      </div>
    )
}
export default FeaturesSection