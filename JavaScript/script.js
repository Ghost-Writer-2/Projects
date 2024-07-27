const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const submitButton = document.querySelector('.js-submit-button');
const pwordError = document.getElementById('cpwmessage');


document.body.addEventListener('submit', () => {
  setTimeout(() => {
    alert('This Form Works')
  }, 0)
 
})


function checkPassword() {
  if (password.value !== passwordConfirm.value) {
    setTimeout(() => {
      setTimeout(() => {
        pwordError.innerHTML = "Password doesn\'t match";
      }, 100);

      setTimeout(() => {
        pwordError.innerHTML = "";
      }, 4000);
    }, 0);
    
  } else {
    setTimeout(() => {
      setTimeout(() => {
        pwordError.innerHTML = "Password is a match";
      }, 100);

      setTimeout(() => {
        pwordError.innerHTML = "";
      }, 4000);
    }, 0);
  }
}



