import renderToDom from '../helpers/renderToDom';

const initialScreen = () => {
  const domString = `
    <div>
      <h1>Welcome to Bear Watcher!</h1>
      <p>Brown bears in the Katmai National Park congregate along the Brooks River each year from July to September. Sockeye Salmon swim up the Brooks River to spawn. The brown bears try and catch these salmon as they leap over rocks.</p>
      <p>Complete the form below to track the brown bears you spot on the Brooks River!</p>
    <div id='form'></div>
    </div>
    <div class='bearCardFlex'>
      <div id='bearCards'></div>
    </div>
    <div class='bearAwardsFlex'>
      <div id='bearAwards'></div>
    </div>
  `;
  renderToDom('body', domString);
};

export default initialScreen;
