"use strict";

const templates = {};

templates.signup = reactDom => {
	return `
    <!DOCTYPE html>
    <html>
		  <head>
	      <meta charset="utf-8">
	      <title>React SSR</title>
		  </head>
		  <body>
	      <div id="main">${reactDom}</div>
	      <script src="./bundle.js"></script>
		  </body>
		  </html>
  `;
};

module.exports = templates;