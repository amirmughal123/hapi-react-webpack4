"use strict";

// const React = require("react");
// const { renderToString } = require("react-dom/server");

// const translator = require("../helpers/translate");
// const templates = require("../helpers/templates");
// const App = require("../../client/apps/auth/src/app");

const routes = {
	signup_get: (request, h) => {
		// return h.view("index", translator.translatePage("signup", request.pre.detectLanguage));
		// const jsx = ( <App /> );
		// const reactDom = renderToString( jsx );
		// return h.response(templates.signup(reactDom)).type("text/html").code(200);
		return h.view("index");
	},
	login_get: (request, h) => {
		return h.view("index");
	}
};

module.exports = routes;
