import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as Blueprint from '@blueprintjs/core';
import {Table, Column} from '@blueprintjs/table';

class AppState {
	@observable timer = 0;

	constructor() {
		setInterval(() => {
			this.timer += 1;
		}, 1000);
	}

	resetTimer() {
		this.timer = 0;
	}
}


@observer
class TimerView extends React.Component<{appState: AppState}, {}> {
	render() {
		return (
			<div className="pt-app">
				<nav className="pt-navbar">
					<div className="pt-navbar-group pt-align-left">
						<div className="pt-navbar-heading">Blueprint</div>
					</div>
					<div className="pt-navbar-group pt-align-right">
						<Blueprint.Button className="pt-button pt-minimal pt-icon-home">Home</Blueprint.Button>
						<Blueprint.Button className="pt-button pt-minimal pt-icon-document">Files</Blueprint.Button>
						<span className="pt-navbar-divider"></span>
						<Blueprint.Button className="pt-button pt-minimal pt-icon-user"></Blueprint.Button>
						<Blueprint.Button className="pt-button pt-minimal pt-icon-notifications"></Blueprint.Button>
						<Blueprint.Button className="pt-button pt-minimal pt-icon-cog"></Blueprint.Button>
					</div>
				</nav>
				<Table numRows={5}>
						<Column />
						<Column />
						<Column />
				</Table>
			</div>
		);
	}

	onReset = () => {
		this.props.appState.resetTimer();
	}
};

const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
