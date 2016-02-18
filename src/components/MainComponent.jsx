import React from 'react';


class MainComponent extends React.Component{
	constructor(props){
		super(props);
	}


  render() {
  		return (
  			<div className="app-container">
  				<div className="auth-container">
 
    				<h4>Instructies</h4>
    				<ul className="instructies">
 						<li>1) Klopt de Iconclass notatie met het plaatje?</li>
 						<li>2) Zo ja; klik op de kop</li>
 						<li>3) Nee? Druk op 'Staat er niet op'</li>
						<li>4) Scoor punten</li>
 					</ul>
  				</div>
  			</div>
  		)
		}
}
export default MainComponent;