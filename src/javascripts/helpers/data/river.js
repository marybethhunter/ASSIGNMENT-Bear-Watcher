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

export default handleFormSubmit;
