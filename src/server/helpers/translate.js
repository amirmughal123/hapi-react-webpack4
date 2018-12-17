"use strict";

const lang = require("../config/config");

const template = {};

const translator = {};

translator.translatePage = (page, language) => {
	switch (page) {
		case "signup":
			translateSignup(language);
	}
};

const translateSignup = (lang) => {
  switch (lang) {
    case "en":
	    template.page = {
			  title: "Create an account | EnTrl"
		  };
	    template.firstBlock = {
	    	title: "Create an account | EnTrl",
		    firstName: "First name",
		    lastName: "Last name",
		    email: "Email",
		    password: "Password",
	    };
	    template.secondBlock = {
	    	haveAccount: "Already have an account?",
		    login: "Log in"
      };
	    return template;
	  case "ru":
		  template.page = {
		  	title: "Создать аккаунт | EnTrl"
		  };
		  template.firstBlock = {
		  	title: "Создать аккаунт | EnTrl",
			  firstName: "Имя",
			  lastName: "Фамилия",
			  email: "Эл. почта",
			  password: "Пароль",
		  };
		  template.secondBlock = {
		  	haveAccount: "Уже зарегистрированы?",
			  login: "Войти"
		  };
		  return template;
  }
};

module.exports = translator;