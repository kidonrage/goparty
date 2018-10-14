import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SignUp extends Component {
	render() {
		return (
			<div className="login">
				<div className="nav-status"><span id="current-city" className="bold">Регистрация</span></div>
				<form>
					<input type="text" id="name" placeholder="Имя Фамилия"/>
					<input type="email" id="email" placeholder="E-mail"/>
					<input type="password" id="password" placeholder="Пароль"/>
					<button className="input-btn">Зарегистрироваться</button>
					<ul className="soc-enter center">
						<li><a href=""><i className="fab fa-vk"></i></a></li>
						<li><a href=""><i className="fab fa-google"></i></a></li>
						<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
					</ul>
				</form>
				<Link className="no-acc" to="/">У меня есть аккаунт. <span>Войти</span></Link>
			</div>
		)
	}
}

export default SignUp