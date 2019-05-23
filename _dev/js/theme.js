document.addEventListener('DOMContentLoaded', function(){

  let openModalButtons = document.getElementsByClassName('openModal');
  [...openModalButtons].forEach( button => {
    button.addEventListener('click', function(){
      document.getElementById(this.dataset.target).classList.add('active');
      document.getElementsByName('smoothieType')[0].value = this.id
    }, false);
  });

  document.getElementById('dismissModal').addEventListener('click', dismissModal)

  document.getElementById('formModal').addEventListener('submit', function(e){
    e.preventDefault();
    let isValid = validateForm(this);
    if (isValid) {
      let thankYouMessage = document.getElementById('thankYou');
      thankYouMessage.style.display = 'block';
      thankYouMessage.nextElementSibling.style.display = 'none';
      thankYouMessage.previousElementSibling.style.display = 'none';
      setTimeout(dismissModal, 3000);
    }
  });


}, false);

function dismissModal(){
  document.getElementById('formModal').classList.remove('active');
}

function validateForm(el){
  let inputs = el.getElementsByTagName('input');
  let isValid = true;
  [...inputs].forEach( input => {
    if(input.value === ''){
      isValid = false;
    }
    if (input.type === 'email') {
      isValid = emailIsValid(input.value);
      if (!isValid) {
        input.classList.add('error');
        input.previousElementSibling.innerHTML = "Check your email again";
        input.addEventListener('keydown', resetErrorOnChange);
      }
    }
  });
  return isValid;
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function resetErrorOnChange(){
  this.classList.remove('error');
  this.previousElementSibling.innerHTML = "";
}
