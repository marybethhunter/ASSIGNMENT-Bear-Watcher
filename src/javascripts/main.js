import '../styles/main.scss';

import initialScreen from './components/initialScreen';
import createBearForm from './components/bearForm';

const init = () => {
  $('#app').html('<h1>Hi! You are up and running!</h1>');
  console.warn('YOU ARE UP AND RUNNING!');
  initialScreen();
  createBearForm();
};

init();
