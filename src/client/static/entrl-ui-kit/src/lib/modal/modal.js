import React, { Component } from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Label from "../typography/labels/labels";
import Button from "../button/button";
import Icon from "../icon/icon";
import Div from "../container/container";

import "./modal.css";

export default class Modal extends Component {
  state = {
    visible: true
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  closeOnEsc = event => {
    if(event.keyCode === 27) {
      this.closeModal();
    }
  };

  componentDidMount(){
    document.addEventListener("keydown", this.closeOnEsc, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.closeOnEsc, false);
  }

  render() {
    const { textHeading, textBody, firstTextBtn, secondTextBtn } = this.props;
    let classNames = "modal";
    let component = this.state.visible ? (
	    <CSSTransition component={null} classNames="modal" timeout={{ enter: 500, exit: 300 }}>
      <div className={classNames} role="dialog">
        <Div eClass="box modal-heading" onClick={this.closeModal}>
          <Label text={textHeading} fw="fw-medium" fs="fs-18" fc="c-dark" />
          <Icon icon="modal-close-btn" />
        </Div>
        <Div eClass="box modal-box">
          <Label text={textBody} fw="fw-medium" fs="fs-16" fc="c-medium" />
          <Div eClass="box modal-box-buttons">
            <Button eClass="button medium-btn">
              <Label
                text={firstTextBtn}
                fw="fw-medium"
                fs="fs-16"
                fc="c-white"
              />
            </Button>
            <Button eClass="button medium-btn opc-btn">
              <Label
                text={secondTextBtn}
                fw="fw-medium"
                fs="fs-16"
                fc="c-medium"
              />
            </Button>
          </Div>
        </Div>
      </div>
	    </CSSTransition>
    ) : null;

    return (
	    <TransitionGroup>
		    {component}
      </TransitionGroup>
    );
  }
}
