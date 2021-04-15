function maFunction(){
  let drop = document.getElementById('drop');
if(drop.className == 'active'){
  drop.classList.remove('active')
}
else{
  drop.classList.add('active')
}
}