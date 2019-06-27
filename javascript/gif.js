$(document).ready(function(){
console.log("im ready")
    
    
    
    const topics = ["Captain Falcon", "Falco", "Fox Mccloud", "Marth", "Mario", "Link", "Ganondorf"];
    
    
    
    function initializeButtons() {
        for (let i = 0; i < topics.length; i++){
            let starterButtons = $("<button class='starterButtons'>");
            starterButtons.attr("data-person", topics[i]);
            console.log(topics[i]);
            $("#buttons").append(starterButtons);
            starterButtons.text(topics[i]);
        }
    };
    initializeButtons();
    
    $(".starterButtons").on("click", function(){
        console.log("click");
        $("#gifBox").empty();
        const character = $(this).attr("data-person");
        console.log(character);
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=y0ixuSXwdcTW93ow6ebIUxNV4O0pulFv&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){
              console.log(response);
              const results = response.data;
              for (let i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    const rating = results[i].rating;
                    const p = $("<p>").text("Rating: " + rating);
                    const personImage = $("<img>");
                    personImage.attr("src", results[i].images.fixed_height.url);
                    $("#gifBox").append(p);
                    $("#gifBox").append(personImage);
                }
              }
          });
    });
    


    
    
    
    
    
    
    
    
});