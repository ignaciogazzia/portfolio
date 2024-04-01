const checkBox = document.getElementById('check');
const menuToggle = document.getElementById('toggle');
const closeToggle = document.getElementById('close');
const menuContainer = document.querySelector('.card-nav-bottom-container');

checkBox.addEventListener('change', function() {
  if(this.checked) {
    menuContainer.classList.add('is-visible');
    menuToggle.classList.add('hide');
    closeToggle.classList.add('pin','show');          
  } else {
    menuContainer.classList.remove('is-visible');
    menuToggle.classList.remove('pin','hide');
    closeToggle.classList.remove('show');
    closeToggle.classList.add('hide');
  }
});      