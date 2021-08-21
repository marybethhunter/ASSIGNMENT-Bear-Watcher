import renderToDom from '../renderToDom';

const bears = [];

const buildBearCard = (array) => {
  let domString = '';
  array.forEach((bear) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <img src="${bear.image}" class="card-img-top" alt="${bear.name}">
      <div class="card-body">
        <p class="card-text">${bear.name}</p>
        <div class="bearFishBtns">
          <button id="fishAttempt">Tried to Catch Fish: </button>
          <button id="fishSuccess">Successfully Caught Fish: </button>
          <p id="fishCounter">Number of fish caught: </p>
        </div>
        <div>
        <p>Timestamp:</p>
        </div>
      </div>
   </div>
  `;
  });
  renderToDom('#bearCards', domString);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newBear = {
    name: document.querySelector('#bearName').value,
    image: document.querySelector('#bearImage').value,
  };
  bears.push(newBear);
  buildBearCard(bears);
  document.querySelector('form').reset();
};

const fishAttemptButton = document.getElementById('#fishAttempt');
let counter = 0;

const incrementFishAttempt = () => {
  fishAttemptButton.innerHTML = counter.toString();
  counter += 1;
  return counter;
};

// const handleFishAttempt = (event) => {
//   let count = 0;
//   const attemptBtn = document.querySelector('#fishAttempt');
//   if (event.target.id === attemptBtn) {
//     count += 1;
//     attemptBtn.innerHTML = `Tried to Catch Fish: ${count}`;
//   }
// };

export { handleFormSubmit, incrementFishAttempt };
