const languageParser = require('accept-language-parser');

const preRequest = {};

preRequest.detectLanguage = (request, h) => {
	const languages = languageParser.parse(request.headers["accept-language"]);
	console.log(languages);
	return languages[0].code;
};

module.exports = preRequest;