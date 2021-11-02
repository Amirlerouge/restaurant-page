import './style.css';
window.onload = function(){


 let links = document.getElementsByClassName("link")
alert("link");

console.log(links);

links.onclick = function(event){
  let target = event.target;
  console.log(target);

  target.classList.add('highlight');


}

}


