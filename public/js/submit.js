async function addCharacter(event){
    event.preventDefault();

  
  
  const response = await fetch('/api/addcharacter', {
    method: 'POST',
    body: JSON.stringify({ character_name,
        // class,
        level,
        age,
        gender,
        race,
        background, }),
    headers: { 'Content-Type': 'application/json' },
    
  }); if (response.ok) {
    console.log('success');
    document.location.replace('/characters/all');
  } else {
    alert(response.statusText);
  }}
  
  document.querySelector("#character-creator1").addEventListener('submit', addCharacter)