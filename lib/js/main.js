let titleInput = document.getElementById("title_input"); 
let submit_button = document.getElementById("submit_button");
let noun = document.getElementById("noun"); 
let verb = document.getElementById("verb"); 
let adj = document.getElementById("adjective"); 
let story = document.getElementById("story_result");
let form = document.querySelector(".form_container");





titleInput.onkeyup = function() {
    document.getElementById("main_title").innerHTML = titleInput.value; 
}


submit_button.onclick = function(event){
    event.preventDefault();

    if(document.getElementById("title_input").value && document.getElementById("noun").value && document.getElementById("verb").value && document.getElementById("adjective").value){
        
        const adlibText = `Last night I ate a ${noun.value}, and today I just had to ${verb.value}. What a ${adj.value} day!`;
        story.textContent = adlibText; 
        story.style.display = 'block';
        form.style.display = 'none';
    } else {
        alert("Please fill in all fields");
    } 

    
}




