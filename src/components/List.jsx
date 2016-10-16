import React from 'react';

import Headingbox from "./list/Headingbox.jsx";
import Singleboxcontainer from "./list/Singleboxcontainer.jsx";

class List extends React.Component{
  render() {
  		return (
				<div className="list">
  				<span className="list__shownweek">week 21, 2016</span>
					<Headingbox />
          <div className="singleboxcontainer">
            <Singleboxcontainer 
              topPad="50px" 
              heading="Waarom de wereld zoals ik die ken op omvallen staat"
            />
          </div>            
          <div className="singleboxcontainer">
            <Singleboxcontainer 
              topPad="100px" 
              heading="From web dev to VR: how to get started with VR development"
            />
          </div>            
           <div className="singleboxcontainer">
            <Singleboxcontainer 
              topPad="175px" 
              heading="Startups Bet on Workplace Use of VR"
            />
          </div>
				</div>
  		)
		}
}
export default List;