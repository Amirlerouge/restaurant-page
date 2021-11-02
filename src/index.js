import './style.css';
function renderHome(){

  let changeTextOne = document.getElementById('tone');
  let changeHeaderOne = document.getElementById('hone');
  let changeTextTwo = document.getElementById('ttwo');
  let changeHeaderTwo = document.getElementById('htwo');
  let changeTextThree= document.getElementById('tthree');
  let changeHeaderThree = document.getElementById('hthree');



  changeHeaderOne.innerText = "WELCOME TO WAFFLE HOOUSE";
  changeTextOne.innerText = "   (GOOD) FOOD FAST   ";

  changeHeaderTwo.innerText = "  You are at the right place !  ";
  changeTextTwo.innerText = " 🧇 House has  more than 1,900 locations in 25 states.  We are open 24-hours a day, seven days a week. You can spot us with the iconic illuminated 🟡 sign";

  changeHeaderThree.innerText = "  Family  ";
  changeTextThree.innerText = "Whether you are a Waffle House Regular, or this is your first time experiencing our restaurant, we welcome you with open arms.  You are now a part of our Waffle House Family!";

}

function renderMenu(){

  let changeTextOne = document.getElementById('tone');
  let changeHeaderOne = document.getElementById('hone');
  let changeTextTwo = document.getElementById('ttwo');
  let changeHeaderTwo = document.getElementById('htwo');
  let changeTextThree= document.getElementById('tthree');
  let changeHeaderThree = document.getElementById('hthree');



  changeHeaderOne.innerText = "OUR MENU IS VERY COMPLEX";
  changeTextOne.innerText = "😅 JUST ORDER SOMETHING 😜";

  changeHeaderTwo.innerText = " FAVORITES ! ";
  changeTextTwo.innerText = "All Star Special©️ - Sausage 🥓 City Ham";

  changeHeaderThree.innerText = "  Breakfest  ";
  changeTextThree.innerText = "ALL-STAR SPECIAL™: THE GREATEST OF ALL TIME";

}


function renderMap(){

  let changeTextOne = document.getElementById('tone');
  let changeHeaderOne = document.getElementById('hone');
  let changeTextTwo = document.getElementById('ttwo');
  let changeHeaderTwo = document.getElementById('htwo');
  let changeTextThree= document.getElementById('tthree');
  let changeHeaderThree = document.getElementById('hthree');



  changeHeaderOne.innerText = "ATL";
  changeTextOne.innerText = "135 ANDREW YOUNG ATLANTA, GA 30303 ☎️ (404) 522-9873";

  changeHeaderTwo.innerText = "ATL";
  changeTextTwo.innerText = "4346 FULTON ATLANTA, GA 30336 ☎️ (404) 472-3559";

  changeHeaderThree.innerText = "BIRMINGHAM";
  changeTextThree.innerText = "1801 4TH AVENUE BIRMINGHAM, AL 35233 ☎️ (205) 244-1956";

}

function renderOffers(){

  let changeTextOne = document.getElementById('tone');
  let changeHeaderOne = document.getElementById('hone');
  let changeTextTwo = document.getElementById('ttwo');
  let changeHeaderTwo = document.getElementById('htwo');
  let changeTextThree= document.getElementById('tthree');
  let changeHeaderThree = document.getElementById('hthree');



  changeHeaderOne.innerText = "It's Back ! Limited Time Only";
  changeTextOne.innerText = "BLUEBERRY WAFFLE! It's Back";

  changeHeaderTwo.innerText = "ALL-STAR SPECIAL™";
  changeTextTwo.innerText = "Two Scrambled Eggs with Toast & Jelly; choice of Grits, Hashbrowns or Sliced Tomatoes; a Waffle and your choice of Bacon, Sausage or City Ham";

  changeHeaderThree.innerText = "ANGUS BURGERS";
  changeTextThree.innerText = "100% Angus beef.  Cooked fresh to order.  A variety of choices on toppings to customize it just how you like it.  What are you waiting for?";

}

window.onload = function() {
  

    let table = document.querySelector('.links');
    let innerDiv = table.getElementsByTagName("DIV");

    function renderSide(){

      for (let elem of innerDiv) {
        if(elem.matches(".highlight")){
         elem.classList.remove('highlight');
         //console.log(elem);
        }


     }
     
    }


    table.onclick = function(event) {
        let box = event.target; // (1)
        if(box.id === "home"){
          console.log(box.id);
          renderHome();
        }
        if(box.id === "menu"){
          console.log(box.id);
          renderMenu();
        }
        if(box.id === "map"){
          console.log(box.id);
          renderMap();
        }
        if(box.id === "offer"){
          console.log(box.id);
          renderOffers();
        }
        
        
        

        renderSide();         
        


        if (box.className === 'links box') {
            //console.log(box.className);
            return;
        }


        box.classList.add('highlight');




    };


    document.getElementById("home").click();


}