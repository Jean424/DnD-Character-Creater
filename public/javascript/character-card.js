//-- All character-Card specific requests


//-- Delete character if requested from a card
const deleteCharacter = async (character_id) => {
    console.log("delete requested")
    try{

        
        const response = await fetch(`/api/characters/${character_id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log("Response OK")
            document.location.replace('/');
            
        } else {
            alert(`ELSE Alert: ${character_id} - ${response.statusText}`);
        }
    }
    catch (err){
        alert(`Error: ${err}`)
    }
};

//-- Modal Specific behaviors for Character Card
var modal = document.getElementById("div-onload-modal"); // Get the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.location.replace('/');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.location.replace('/');
    }
};