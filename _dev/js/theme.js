document.addEventListener('DOMContentLoaded', function(){

  let openModalButtons = document.getElementsByClassName('openModal');
  [...openModalButtons].forEach( button => {
    button.addEventListener('click', function(){
      document.getElementById(this.dataset.target).classList.add('active');
      document.getElementsByName('smoothieType')[0].value = this.id
      console.log(this.id);
    }, false);
  });

  document.getElementById('dismissModal').addEventListener('click', function() {
    this.parentNode.parentNode.classList.remove('active');
  })

  document.getElementById('formModal').addEventListener('submit', function(e){
    e.preventDefault();
    validateForm(this);
  });

  [...document.querySelectorAll('input')].forEach( el => {
    el.addEventListener('change', function(){
      if (this.classList.contains('error')) {
        this.classList.remove('error');
        this.previousElementSibling.innerHTML = "";
      }
    })
  })

}, false);


function validateForm(el){
  let inputs = el.getElementsByTagName('input');
  let isValid = true;
  [...inputs].forEach( input => {
    if (input.type == 'email') {
      console.log(input);
      isValid = emailIsValid(input.value);
      if (!isValid) {
        input.classList.add('error');
        input.previousElementSibling.innerHTML = "Check your email again";
      }
      console.log(isValid);
    }
  });
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
