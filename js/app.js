document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.form');
  form.addEventListener('click', handleFormClick);

})

const handleFormClick = function(event){
  const updatedForm = event.preventDefault();
  const resultForm = document.querySelector('#form_info-result');
  resultForm.textContent = `Who is the burger for: ${this.name.value}`;
}
