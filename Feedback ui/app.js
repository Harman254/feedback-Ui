const ratingELs = document.querySelectorAll('.rating');

let selectedRating = "";

const BtnEl = document.getElementById('Btn');

const containerEL = document.getElementById('container');

BtnEl.addEventListener('click', () => {
  
  if (selectedRating !== ""){
    containerEL.innerHTML= `<strong>
    Thank You</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your  freedback to improve our customer support.</p>`;
}});






ratingELs.forEach(ratingEl => {
  ratingEl.addEventListener('click', (event) => {

    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
    
  })
});

const removeActive = () => {
  ratingELs.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
  })
}