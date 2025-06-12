
// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', ()=> navLinks.classList.toggle('show'));

// Smooth scroll close
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=> navLinks.classList.remove('show'));
});
