import React from 'react'

export default class Tools extends React.Component {
	render() {
		const switchPower = this.props.power ? {'left': '1px'} : {'left': '30px'};
		const switchBank = this.props.currentBank[1].id === 'Heater-2' ? 
			{
				'left': '1px'
			} 
		: 
			{
				'left': '30px'
			};
		const styleDisplay = this.props.power ? 
		{
			'boxShadow':'0px 0px 10px white',
			'background':'white'
		} 
		: 
		{
			'boxShadow':'0px 0px 10px black',
			'background':'#d4d4d4'
		};
		return (
		<div className="col-4">
          <div className="power" id="power">
            <p className="power__title mb-2">power</p>
            <div className="power__switch">
              <span className="power__switch__ball" onClick={this.props.powerDrumPad} style={switchPower} />
            </div>
          </div>
          <div className="display-screen mt-4" style={styleDisplay}>
          	{this.props.display}
          </div>
          <div className="bank mt-4" id="bank">
            <div className="bank__switch">
              <span className="bank__switch__ball" onClick = {this.props.changeBank} style={switchBank}/>
            </div>
            <p className="bank__title mt-2">bank</p>
          </div>
        </div>
		)
	}
}