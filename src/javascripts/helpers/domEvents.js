import { handleFormSubmit, incrementFishAttempt } from './data/river';

const buttonEvents = () => {
  document
    .querySelector('#bearSubmit')
    .addEventListener('click', handleFormSubmit);
  document
    .querySelector('#fishAttempt')
    .addEventListener('click', incrementFishAttempt);
};

export default buttonEvents;
