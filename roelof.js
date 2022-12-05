// zoek de arrow 

visible_button = document.querySelector(".arrow");
popup = document.querySelector(".active");
hidden_button = document.querySelector(".arrow2");  

// add a eventlistener to the visible button 

visible_button.addEventListener('click', () => {
   popup.style.display = "flex";  
})

// add a eventListener to the hidden button 

hidden_button.addEventListener('click', () => {
    popup.style.display = "none";
})


