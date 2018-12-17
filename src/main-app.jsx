// import Nav from './components/nav';
// import './main-app.css';
import Nav from './client/apps/auth/src/app';

// React must be in scope when using JSX because JSX is translated into React.createElement(...)
const React = require('react');
const ReactDOM = require('react-dom');
const Index = require('./pages/Index');
const Profile = require('./pages/Profile');

const components = {
  index: Index,
  profile: Profile
};

const mainApp = () => {
  const el = document.getElementById('app');
  const { dataset } = el;
  const { view } = dataset;
  const data = JSON.parse(el.dataset.props);
  data.selected = view;

  ReactDOM.render(
    React.createElement(Nav, data),
    document.getElementById('nav'),
  );
  ReactDOM.render(
    React.createElement(components[view], data),
    el,
  );
};


document.addEventListener('DOMContentLoaded', mainApp);
