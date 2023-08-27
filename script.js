const header = document.querySelector('.Header');
const nav = document.querySelector('.Navbar')
const topOfNav = header.offsetTop;

function fixNav(){
    if (window.scrollY >= topOfNav){
        nav.style.paddingTop = header.offsetHeight + 2 + 'px';
    }
    else{
        nav.style.paddingTop = 0;
    }
}
// for fixing the navbar at top
window.addEventListener('scroll',fixNav);



var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}