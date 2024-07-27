form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (password.value !== passwordConfirm.value) {

    setTimeout(() => {
      setTimeout(() => {
        passwordConfirm.style.border = "1px solid rgb(231, 0, 0)"
        pwordError.innerHTML = "Password doesn\'t match";
      }, 100);

      setTimeout(() => {
         passwordConfirm.style.border = "1px solid rgb(45, 45, 45)"
        pwordError.innerHTML = '';
      }, 4000);

    }, 0);
  } else if (password.value.length < 8) {
    setTimeout(() => {
      setTimeout(() => {
        password.style.border = "1px solid rgb(231, 0, 0)"
        pwordErrorText.innerHTML = "Password should be more than 8 characters";

        passwordConfirm.style.border = "1px solid rgb(231, 0, 0)"
        pwordError.innerHTML = "Password should be more than 8 characters";
      }, 100);

      setTimeout(() => {
        password.style.border = "1px solid rgb(45, 45, 45)"
        pwordErrorText.innerHTML = '';

        passwordConfirm.style.border = "1px solid rgb(45, 45, 45)"
        pwordError.innerHTML = '';
      }, 4000);

    }, 0);
  } else {
    saveData();
    submit();
    alert('Successfully Submit');

    let savedData = retriveData();
    let fName = inputData.firstName;
    let lName = inputData.lastName;

    document.querySelector('.form-box').innerHTML = `<p class="submitted-form-text">Welcome ${fName} ${lName}<br></p>
    <p class="submitted-form-text-p">This is not a real online service. It's just a test project. Hope you didn't input any sensitive information </p>`
  } 
   
})