/* Dropdown */
function maFunction(){
  let drop = document.getElementById('drop');
if(drop.className == 'active'){
  drop.classList.remove('active')
  drop.classList.add('inactive')
}
else{
  drop.classList.add('active')
  drop.classList.remove('inactive')
}
}