import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state)
	}
	render(){
		const {authError} = this.props;
		return (
			<div className="login">
				<div className="nav-status"><span id="current-city" className="bold">Вход</span></div>
				<form onSubmit={this.handleSubmit}>
					<input autocomplete="off" id="email" type="email" placeholder="E-mail" onChange={this.handleChange} />
					<input autocomplete="off" id="password" type="password" placeholder="Пароль" onChange={this.handleChange} />
					<button className="input-btn">Войти</button>
					<div className="error-text">
						{authError ? <span>{authError}</span> : null}
					</div>
					<ul className="soc-enter center">
						<li><a href=""><i className="fab fa-vk"></i></a></li>
						<li><a href=""><i className="fab fa-google"></i></a></li>
						<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
					</ul>
				</form>
				<Link className="no-acc" to="/signup">Нет аккаунта? <span>Зарегистрироваться</span></Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)