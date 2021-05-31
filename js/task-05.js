const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
const contentOfspan = spanRef.textContent;

const inputChangeName = event => {
  spanRef.textContent = event.target.value;
};

const inputEmptyField = event => {
  if (event.target.value === '') {
    spanRef.textContent = contentOfspan;
  }
};

inputRef.addEventListener('input', inputChangeName);
inputRef.addEventListener('input', inputEmptyField);
