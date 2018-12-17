import React, { Component } from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Icon from "../icon/icon";
import Alert from "../alert/alert";
import "./input.css";

export default class Input extends Component {
	state = {
		alert: false,
		icon: "error",
		text: "",
		password2text: false
	};

	regExp = {
		email: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		password: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/,
		phone: /^\d{10}$/,
		number: /^[0-9]+$/,
		space: /^\s+$/
	};

	changeState = props => {
		this.setState(props);
	};

	checkEmail = e => {
		let email = e.target.value.trim();
		if (!this.regExp.email.test(email)) {
			this.changeState({
				alert: true,
				icon: "error",
				text: "Email address is wrong, check it out"
			});
		} else {
			this.changeState({ alert: false, icon: "error", text: "" });
		}
	};

	checkPassword = e => {
		let password = e.target.value.trim();
		if (password.length === 0) {
			if (e.target.required) {
				this.changeState({
					alert: true,
					icon: "important",
					text: "This field is required"
				});
			}
		} else {
			if (password.length < 6) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "Password must have at least 6 symbols"
				});
			} else if (password.length > 32) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "Password must have less than 32 symbols"
				});
			} else if (!password.match(/[a-z]/)) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "Add one more small letter"
				});
			} else if (!password.match(/[A-Z]/)) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "Add one more big letter"
				});
			} else if (!password.match(/[0-9]/)) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "Add one more digit"
				});
			} else {
				this.changeState({ alert: false, icon: "error", text: "" });
			}
		}
	};

	checkPhone = e => {
		let phone = e.target.value.trim();
		if (phone.length === 0) {
			if (e.target.required) {
				this.changeState({
					alert: true,
					icon: "important",
					text: "This field is required"
				});
			}
		} else {
			if (!this.regExp.phone.test(phone)) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "Phone number is wrong, check it out"
				});
			} else {
				this.changeState({ alert: false, icon: "error", text: "" });
			}
		}
	};

	checkNumber = e => {
		let number = e.target.value.trim();
		if (number.length === 0) {
			if (e.target.required) {
				this.changeState({
					alert: true,
					icon: "important",
					text: "This field is required"
				});
			}
		} else {
			if (!this.regExp.number.test(number)) {
				this.changeState({
					alert: true,
					icon: "error",
					text: "You're able to enter numbers only"
				});
			} else {
				this.changeState({ alert: false, icon: "error", text: "" });
			}
		}
	};

	passwordShowed = () => {
		this.setState({
			password2text: !this.state.password2text
		});
	};

	render() {
		const { type, inputLabel, disabled, required, alert } = this.props;

		let action = null;

		switch (type) {
			case "email":
				action = alert ? this.checkEmail : null;
				break;
			case "password":
				action = alert ? this.checkPassword : null;
				break;
			case "phone":
				action = alert ? this.checkPhone : null;
				break;
			case "number":
				action = alert ? this.checkNumber : null;
				break;
			default:
		}

		let classNames = [
			`input-${type}-wrapper`,
			`${type}-input`,
			"placeholder-input"
		];
		let passwordCheck = this.state.password2text ? "text" : type;
		let passwordIconState = this.state.password2text ? " showed" : "";
		let showPasswordBtn =
			type === "password" ? (
				<Icon
					icon="eye"
					eClass={passwordIconState}
					onClick={this.passwordShowed}
				/>
			) : null;
		return (
			<div className={`input-wrapper ${classNames[0]}`}>
				<input
					type={passwordCheck}
					className={classNames[1]}
					placeholder=" "
					disabled={disabled}
					required={required}
					onBlur={action}
				/>
				<span className={classNames[2]}>{inputLabel}</span>
				{showPasswordBtn}
				<TransitionGroup>
					{this.state.alert ? (
						<CSSTransition component={null} classNames="alert" timeout={{ enter: 500, exit: 300 }}>
							<Alert icon={this.state.icon} text={this.state.text} />
						</CSSTransition>
					) : null}
				</TransitionGroup>
			</div>
		);
	}
}
