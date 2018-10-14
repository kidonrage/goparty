import React from 'react'
import {Link} from 'react-router-dom'
import settingsicon from '../../img/settings.svg'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import addicon from '../../img/+.svg'

const SignedInSidebar = (props) => {
	return (
		<div class="main-menu">
			<div className="nav-status"><span id="current-city" className="bold">Благовещенск</span><button className="text-white"><img src={settingsicon} alt=""/></button></div>
			<ul>
				<li><Link to="/favorites">Закладки</Link></li>
				<li><Link to="/feedback">Обратная связь</Link></li>
				<li><Link to="/guide">Руководство</Link></li>
				<li><Link to="faq">FAQ</Link></li>
				<li><Link to="about">О нас</Link></li>
				<li><a onClick={props.signOut} >Выйти</a></li>
			</ul>
			<button className="btn-wrap"><img src={addicon} alt=""/><Link class="input-btn" to="create">Создать Событие</Link></button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInSidebar)