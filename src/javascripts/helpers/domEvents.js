import handleFormSubmit from './data/river';

const buttonEvents = () => {
  document
    .querySelector('#bearSubmit')
    .addEventListener('click', handleFormSubmit);
};

export default buttonEvents;
