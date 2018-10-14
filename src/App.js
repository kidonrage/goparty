import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard';
import MapTest from './components/dashboard/Map'

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="App">
					<Sidebar />
					<div className="app-main">
						<MapTest />
						<Dashboard />
					</div>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
