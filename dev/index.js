import ChameleonNotation from 'chameleon-notation';
import _debounce from 'lodash/debounce';

let editor = null;
let messageContainer = null;
let messagePlaceholder = null;
let selectedValidationType = 'Field';

const setMessage = (message, type) => {
  messageContainer.className = `validation-result ${type}`;
  messagePlaceholder.innerText = message;
};

const validate = () => {
  let editorContent = null;
  try {
    editorContent = editor.get();
  } catch (e) {
    setMessage(e.message, 'error');
    return;
  }

  const result = ChameleonNotation.validate(selectedValidationType, editorContent);
  setMessage(result.message, result.valid ? 'success' : 'error');
};

const selectValidationType = (e) => {
  const { target } = e;
  selectedValidationType = target.options[target.selectedIndex].value;
  validate();
};

const initEditor = () => {
  const container = document.getElementById('jsoneditor');
  const options = {
    mode: 'text',
    modes: ['text', 'tree'],
    search: true,
    indentation: 2,
    onChange: _debounce(validate, 1000),
  };

  editor = new JSONEditor(container, options);
};

const initialize = () => {
  initEditor();
  [messageContainer] = document.getElementsByClassName('validation-result');
  [messagePlaceholder] = document.getElementsByClassName('validation-message');
  const selectEl = document.getElementsByClassName('validation-select')[0];
  const validationButton = document.getElementsByClassName('validation-button')[0];

  selectEl.addEventListener('change', selectValidationType, false);
  validationButton.addEventListener('click', validate, false);
};

initialize();
