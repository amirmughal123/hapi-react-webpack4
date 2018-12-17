import React, { Component } from "react";

import "./icon.css";

export default class Icon extends Component {
  render() {
    const { icon, onClick, eClass} = this.props;
    switch (icon) {
      case "error":
        return (
          <div className="icon alert-message-icon">
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="10,2 19,17 1,17"
                fill="hsl(var(--error))"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="hsl(var(--error))"
              />
              <line
                x1="10"
                y1="9"
                x2="10"
                y2="16"
                stroke="white"
                strokeWidth="2"
              />
              <rect width="2" height="2" fill="white" x="9" y="5" />
            </svg>
          </div>
        );
      case "info":
        return (
          <div className="icon alert-message-icon">
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg">
              <circle r="9" cx="10" cy="9" fill="hsl(var(--info))" />
              <line
                x1="10"
                y1="8"
                x2="10"
                y2="15"
                stroke="white"
                strokeWidth="2"
              />
              <rect width="2" height="2" fill="white" x="9" y="4" />
            </svg>
          </div>
        );
      case "done":
        return (
          <div className="alert-message-icon">
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg">
              <circle r="9" cx="10" cy="9" fill="hsl(var(--success))" />
              <polyline
                points="6,10 9,13 15,6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        );
      case "important":
        return (
          <div className="icon alert-message-icon">
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="10,2 19,17 1,17"
                fill="hsl(var(--important))"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="hsl(var(--important))"
              />
              <line
                x1="10"
                y1="9"
                x2="10"
                y2="16"
                stroke="white"
                strokeWidth="2"
              />
              <rect width="2" height="2" fill="white" x="9" y="5" />
            </svg>
          </div>
        );
      case "modal-close-btn":
        return (
          <div
            className="icon modal-close-icon"
            role="button"
            onClick={onClick}
          >
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 16"
            >
              <g stroke="#646d82" strokeWidth="3" strokeLinecap="round">
                <line x1="4" y1="1" x2="16" y2="13" />
                <line x1="16" y1="1" x2="4" y2="13" />
              </g>
            </svg>
          </div>
        );
      case "dropdown-arrow":
        return (
          <div className={`icon dropdown-arrow ${eClass}`} role="button">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 16"
              fill="none"
            >
              <polyline
                points="4,8 10,13 16,8 10,3 4,8"
                stroke="#646d82"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="31.6"
                strokeDashoffset="16" //CLOSE = 47.6
              />
            </svg>
          </div>
        );
      case "button-arrow":
        return(
          <div className={`icon button-arrow`}>
            <svg width="12" height="19" viewBox="0 0 12 20" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <polyline points="4,5 10,10 4,15"/>
            </svg>
          </div>
        );
      case "eye":
        return (
          <div className="password-button" role="button" onClick={onClick}>
            <div className={"icon show-password" + eClass}>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#bbb"/>
              </svg>
            </div>
          </div>
        );
      default:
    }
  }
}
