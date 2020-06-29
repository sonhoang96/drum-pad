import React from 'react'
const root = document.querySelectorAll('#root');
const backgrounds = [
	'linear-gradient(45deg, #673AB7, #00BCD4)',
	'linear-gradient(45deg, #009688, #00BCD4)',
	'linear-gradient(45deg, #F44336, #673AB7)',
	'linear-gradient(45deg, #9E9E9E, #009688)',
	'linear-gradient(45deg, #795548, #FF5722)',
	'linear-gradient(45deg, #8BC34A, #9C27B0)',
	'linear-gradient(45deg, #E91E63, #CDDC39)',
	'linear-gradient(45deg, #673AB7, #607D8B)',
	'linear-gradient(45deg, #F44336, #607D8B)',
	'linear-gradient(45deg, #4CAF50, #FF5722)'
]

//set random color background
const randomBg = () => {
	root[0].style.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
}
export default class Buttons extends React.Component {
	constructor(props){
		super(props)
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
		randomBg();
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(e){
		if(e.keyCode === this.props.keyCode){
			this.playSound();
		}
	}
	playSound(){
		const sound = document.getElementById(this.props.id);
		if(this.props.power){
			sound.play();
			setTimeout(() => {
				sound.parentNode.classList.add('buttons__btn__clicked');
			}, 0);

			setTimeout(() => {
				sound.parentNode.classList.remove('buttons__btn__clicked');
				setTimeout(() => {
					randomBg();
				},200);
			}, 100);
			this.props.soundName(this.props.id);
		}else{
			setTimeout(() => {
				sound.parentNode.classList.add('buttons__btn__nonactive');
			}, 0);

			setTimeout(() => {
				sound.parentNode.classList.remove('buttons__btn__nonactive');
			}, 100);
			sound.setAttribute('muted','')
		}
	}
	render() {
		const styleBtn = this.props.power ? {'background':'white'} : {'background' : '#d4d4d4'}
		return (
			<div className="buttons__btn" onClick={this.playSound} style={styleBtn}>
			  {this.props.keyTrigger}
              <audio src={this.props.url} className="sound" id={this.props.id}/>
            </div>
		)
	}
}