async function addCharacter(event) {
  console.log("click");
  event.preventDefault();

  let { character_name, char_class, level, age, gender, race, background } =
    req.body;
  console.log(character_name);

  const response = await fetch("/api/addcharacter", {
    method: "POST",
    body: JSON.stringify({
      character_name,
      char_class,
      level,
      age,
      gender,
      race,
      background,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("success");
    document.location.replace("/characters/all");
  } else {
    alert(response.statusText);
  }
}

// document
//   .querySelector("#character-creator")
//   .addEventListener("submit", addCharacter);
