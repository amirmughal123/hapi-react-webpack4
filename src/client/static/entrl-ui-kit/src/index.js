import React from 'react';
import { render } from "react-dom";
import './lib/app.css';

import Input from  './lib/input/input';
import Div from "./lib/container/container";
import Card from "./lib/card/card";
import Label from "./lib/typography/labels/labels";
import Button from "./lib/button/button";

const App = () => (
	<React.Fragment>
		<Div eClass="row row-ch row-cv row-hh">
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
		</Div>
	</React.Fragment>
);

render(<App />, document.getElementById("root"));
