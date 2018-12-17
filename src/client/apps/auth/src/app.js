import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link as RouteLink} from "react-router-dom";
import Div from '../../../static/entrl-ui-kit/src/lib/container';
import Card from '../../../static/entrl-ui-kit/src/lib/card';
import Label from '../../../static/entrl-ui-kit/src/lib/typography/labels';
import Button from '../../../static/entrl-ui-kit/src/lib/button';
import Input from '../../../static/entrl-ui-kit/src/lib/input';
import Link from '../../../static/entrl-ui-kit/src/lib/link';

import './app.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Div eClass="row row-ch row-cv row-hh">
					<Route path="/signup" component={SignUp} exact/>
					<Route path="/login" component={LogIn} exact/>
				</Div>
			</Router>
		);
	}
}

const SignUp = () => {
	return (
		<React.Fragment>
			<Card zIndex="5" eClass="card-block—width-39">
				<Div eClass="box">
					<Div eClass="box box-lr form-head">
						<Label text="Create an account &nbsp;|&nbsp; EnTrl" fw="fw-medium" fs="fs-20" fc="c-medium"/>
					</Div>
					<Div eClass="box box-lr form-body">
						<Input
							type="text"
							inputLabel="First Name"
							disabled={false}
							required={false}
							alert={false}/>
						<Input
							type="text"
							inputLabel="Last Name"
							disabled={false}
							required={false}
							alert={false}/>
						<Input
							type="email"
							inputLabel="Email"
							disabled={false}
							required={true}
							alert={true}/>
						<Input
							type="password"
							inputLabel="Password"
							disabled={false}
							required={true}
							alert={true}/>
						<Div eClass="box box-top box-flex">
							<Button eClass="button large-btn">
								<Label text="Continue" fw="fw-medium" fs="fs-16" fc="c-white"/>
							</Button>
						</Div>
					</Div>
				</Div>
			</Card>
			<Card zIndex="5" eClass="card-block—width-39">
				<Div eClass="box">
					<Div eClass="box box-tb box-lr box-flex box-flex-aic">
						<Label text="Already have an account? — " fw="fw-medium" fs="fs-16" fc="c-medium">
							<RouteLink to="/login" className="link link-di c-primary">Log In</RouteLink>
						</Label>
					</Div>
				</Div>
			</Card>
		</React.Fragment>
	);
};

const LogIn = () => {
	return (
		<React.Fragment>
			<Card zIndex="5" eClass="card-block—width-39">
				<Div eClass="box">
					<Div eClass="box box-lr form-head">
						<Label text="Log In &nbsp;|&nbsp; EnTrl" fw="fw-medium" fs="fs-20" fc="c-medium"/>
					</Div>
					<Div eClass="box box-lr form-body">
						<Input
							type="email"
							inputLabel="Email"
							disabled={false}
							required={true}
							alert={false}/>
						<Input
							type="password"
							inputLabel="Password"
							disabled={false}
							required={true}
							alert={false}/>
						<Div eClass="box box-top box-flex">
							<Button eClass="button large-btn">
								<Label text="Continue" fw="fw-medium" fs="fs-16" fc="c-white"/>
							</Button>
						</Div>
					</Div>
				</Div>
			</Card>
			<Card zIndex="5" eClass="card-block—width-39">
				<Div eClass="box">
					<Div eClass="box box-tb box-lr box-flex box-flex-aic">
						<Label text="Don't have an account? — " fw="fw-medium" fs="fs-16" fc="c-medium">
							<RouteLink to="/signup" className="link link-di c-primary">Sign Up</RouteLink>
						</Label>
					</Div>
				</Div>
			</Card>
		</React.Fragment>
	);
};

// render(<App/>, document.getElementById('main'));
export default App;