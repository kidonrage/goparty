import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../../store/actions/eventActions'
import Popup from "reactjs-popup";
import gameicon from '../../img/Game.svg'
import festicon from '../../img/Fest.svg'
import partyicon from '../../img/Party.svg'

class CreateEvent extends Component {
	state = {
		title: '',
		desc: '',
		date: '',
		category: 'event'
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createEvent(this.state)
	}
	handleClick = (e) => {
		e.target.className = 'active';
	}
	render() {
		return (
			<div className="create-event">
			<div className="nav-status">Создать событие</div>
			<form onSubmit={this.handleSubmit}>
				<input autocomplete="off" type="text" id="title" placeholder="Введите название" onChange={this.handleChange}/>
				<input autocomplete="off" type="text" id="date" placeholder="Выберите дату" onChange={this.handleChange}/>
				<textarea id="desc" placeholder="Опишите своё мероприятие" onChange={this.handleChange}></textarea>
				<ul id="category-choose">
					<li>
						<img src={festicon} alt=""/>
						<span>Фестиваль</span>
					</li>
					<li onClick={this.handleClick}>
						<img src={partyicon} alt=""/>
						<span>Вечеринка</span>
					</li>
					<li>
						<img src={gameicon} alt=""/>
						<span>Игры</span>
					</li>
				</ul>
				<Popup trigger={<button className="input-btn">Создать</button>} position="right center" modal>
    			<div class="popup">Событие создано</div>
  			</Popup>
			</form>
		</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createEvent: (event) => dispatch(createEvent(event))
	}
}

export default connect(null, mapDispatchToProps)(CreateEvent)