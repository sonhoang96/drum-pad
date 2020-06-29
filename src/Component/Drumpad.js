import React from 'react';
import Buttons from './Buttons.js'

export default class drumPad extends React.Component {
	render() {
		let drumPad;
		this.props.power ? 
			drumPad = this.props.currentBank.map((btn,i) => {
				return(
					<Buttons 
						soundName = {this.props.soundName}
						power = {this.props.power}
						keyTrigger = {btn.keyTrigger}
						key = {i}
						keyCode = {btn.keyCode}
						id = {btn.id}
						url = {btn.url}
					/>
				)
			})
		:
			drumPad = this.props.currentBank.map((btn,i) => {
				return(
					<Buttons 
						power = {this.props.power}
						keyTrigger = {btn.keyTrigger}
						key = {i}
						keyCode = {btn.keyCode}
						id = {btn.id}
						url = '#!'
					/>
				)
			})
		return (
			<div className="col-8">
	          <div className="buttons">
	            {drumPad}
	          </div>
	        </div>
		)
	}
}