const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-num');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const submitButton = document.querySelector('.js-submit-button');
const pwordError = document.getElementById('cpwmessage');
const pwordErrorText = document.getElementById('pwmessage');
const form = document.getElementById('userForm');
const footer = document.querySelector('.footer-box');






function submit() {
  firstName.value = '';
  lastName.value = '';
  phoneNumber.value = '';
  password.value = '';
  passwordConfirm.value = '';
  email.value = '';

  footer.innerHTML = '';
}

function saveData() {
  const inputData = {
    firstName: firstName.value,
    lastName: lastName.value,
  }

  JSON.stringify(inputData);
  localStorage.setItem('input', JSON.stringify(inputData));
  console.log(inputData);
}


function retriveData() {
 return inputData = JSON.parse(localStorage.getItem('input'));
}

