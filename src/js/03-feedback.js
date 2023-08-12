import common from './common.json';

const formObj = localStorage.getItem(common.LS_FEEDBACK_FORM) ?? "{}";
const parsedFormObj = JSON.parse(formObj);

const form = document.querySelector('.feedback-form');
loadFormContent();
form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
  parsedFormObj[evt.target.name] = evt.target.value;
  localStorage.setItem(common.LS_FEEDBACK_FORM, JSON.stringify(parsedFormObj));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(parsedFormObj);
  localStorage.removeItem(common.LS_FEEDBACK_FORM);
  form.reset();
}

function loadFormContent() {
  form.elements.email.value = parsedFormObj.email ?? "";
  form.elements.message.value = parsedFormObj.message ?? "";
}