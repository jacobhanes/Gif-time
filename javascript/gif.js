$(document).ready(function(){
console.log("im ready")
    
    
    
    const topics = ["Captain Falcon", "Falco", "Fox Mccloud", "Marth", "Mario", "Link", "Ganondorf"];
    
    
    
    function initializeButtons() {
        for (let i = 0; i < topics.length; i++){
            let starterButtons = $("<button>");
            
            console.log(topics[i]);
            $("#buttons").append(starterButtons);
            starterButtons.text(topics[i]);
        }
    };
    initializeButtons();
    
    
    


    
    
    
    
    
    
    
    
});