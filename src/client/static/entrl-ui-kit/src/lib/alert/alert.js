import React, { Component } from "react";

import Card from "../card/card";
import Label from "../typography/labels/labels";
import Icon from "../icon/icon";

import "./alert.css";

export default class Alert extends Component {
	render() {
		const { icon, text } = this.props;
		let classNames = "cards-wrapper-alert";
		let component = (
			<div className={classNames}>
				<Card zIndex="2">
					<Icon icon={icon} eClass="alert-message-icon" />
					<Label text={text} fw="fw-medium" fs="fs-14" fc="c-dark" />
				</Card>
			</div>
		);
		return component;
	}
}
