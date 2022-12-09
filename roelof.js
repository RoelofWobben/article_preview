// zoek de arrow 

visible_button = document.querySelector(".share");
popup = document.querySelector(".active");
hidden_button = document.querySelector(".share2");
arrow = document.querySelector('.arrow'); 
  

// add a eventlistener to the visible button 

visible_button.addEventListener('click', () => {
   popup.style.display = "flex";  
})

// add a eventListener to the hidden button 

hidden_button.addEventListener('click', () => {
    popup.style.display = "none";
})


// add a evenlistener to the share so hover works well

visible_button.addEventListener('mouseover', () => {
    visible_button.style.backgroundColor = "hsl(217, 19%, 35%)";
    visible_button.style.cursor = "pointer"
    arrow.style.fill= "white"
});

visible_button.addEventListener('mouseleave', () => {
    visible_button.style.backgroundColor = "lightgray"
    arrow.style.fill= "hsl(217, 19%, 35%)";
});

