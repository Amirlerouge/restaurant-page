import './style.css';




    window.addEventListener('DOMContentLoaded', (event) => {
        
        let sidemenu = document.getElementsByClassName("glass");

        sidemenu.onclick = function(event) {
            let target = event.target; // where was the click?
          
            if (target.tagName == 'link1'){
                alert("target"); // highlight it
            } return; // not on TD? Then we're not interested
          
            alert(target.tagName); // highlight it

          };


    });