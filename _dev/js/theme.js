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


}, false);


function validateForm(el){
  let inputs = el.getElementsByTagName('input');
  let isValid = true;
  [...inputs].forEach( input => {
    if(input.value == '') isValid = false;
    if (input.type == 'email') {
      isValid = emailIsValid(input.value);
      input.classList.add('error');
      input.previousElementSibling.innerHTML = "Check your email again";
    }
  })
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
