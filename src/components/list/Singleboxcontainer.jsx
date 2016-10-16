import React from 'react';


class SingleboxContainer extends React.Component{
  render() {
	var divStyle = {
  	marginTop: this.props.topPad
	};

		return (
			<div style={divStyle} className="singlebox">
				<span className="singlebox__website">NYTIMES.COM</span>
				<h2 className="singlebox__heading" data-text={this.props.heading}>{this.props.heading}</h2>

			</div>
		)
	}
}
export default SingleboxContainer;