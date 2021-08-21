import '../styles/main.scss';

import initialScreen from './components/initialScreen';
import createBearForm from './components/bearForm';
import buttonEvents from './helpers/domEvents';

const init = () => {
  initialScreen();
  createBearForm();
  buttonEvents();
};

init();
