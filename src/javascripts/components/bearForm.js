import renderToDom from '../helpers/renderToDom';

const createBearForm = () => {
  const domString = `
  <form>
  <div class="mb-3">
    <label class="form-label"><strong>Bear Name</strong></label>
    <input type="text" class="form-control" id="bearName" placeholder="Name of bear...">
  </div>
  <div class="mb-3">
    <label class="form-label"><strong>Image</strong></label>
    <input type="url" class="form-control" id="bearImage" placeholder="Bear image link...">
  </div>
  <button type="submit" class="btn btn-primary">Track</button>
  </form>
  `;
  renderToDom('#form', domString);
};

export default createBearForm;
