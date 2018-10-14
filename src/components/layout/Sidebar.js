import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignedInSidebar from './SignedInSidebar'
import SignedOutSidebar from './SignedOutSidebar'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import CreateEvent from '../events/CreateEvent'
import {connect} from 'react-redux'

const Sidebar = (props) => {
	const {auth} = props;
	//console.log(auth)
	const sidebar = auth.uid ? <Route exact path="/" component={SignedInSidebar}></Route> : 
	<Route exact path="/" component={SignIn}></Route>
	return(
		<div id="sidebar" className="text-white">
			<div className="main-menu">
				<BrowserRouter>
					<Switch>
						{sidebar}
						<Route path="/signup" component={SignUp}></Route>
						<Route exact path="/create" component={CreateEvent}></Route>
					</Switch>
				</BrowserRouter>
			</div>
				
			<ul className="soc-list center">
				<li><a href=""><i className="fab fa-instagram"></i></a></li>
				<li><a href=""><i className="fab fa-twitter"></i></a></li>
				<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
			</ul>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Sidebar)