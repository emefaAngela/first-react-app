import person from '../person.png'
function FooterSection(){
    return(
        <div className="quote">
        <div className="person" ><img className="personsection" src={person}></img></div>
        <div className="quotetext">
          <div>Lorem ipsum dolor sit omet, consectetur odipiscing elit.integer iaculis quis tellus ac vestibulum<br></br>
            Etiam fermentum nisi ac venenatis rhoncus.
          </div>
          <div> - Neil Young</div>
          <div>  Vice President Primal Inc</div>
        </div>
      </div>
    )
}
export default FooterSection