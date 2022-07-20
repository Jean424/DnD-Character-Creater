function getRace(option) {
    const chaRace = option.value;
    let racesURL = `https://www.dnd5eapi.co/api/races/${chaRace}/`
    fetch(racesURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const chaSize = data.size;
            console.log(chaSize)
            document.querySelector('#char-size').innerHTML = chaSize;
           
            const chaSpeed = data.speed;
            console.log(chaSpeed);
            document.querySelector('.char-speed').value = chaSpeed;

            // const chaAge = data.age;
            // console.log(chaAge);
            // document.querySelector('#char-age').innerHTML = chaAge;
            
            
            
            const chaSubRace0 = data.subraces;
            for (let i = 0; i < chaSubRace0.length; i++) {
                const chaSubRace = chaSubRace0[i].name;
                console.log(chaSubRace);
            }
            const startingProficiencies0 = data.starting_proficiencies;
            for (let i = 0; i < startingProficiencies0.length; i++) {
                const startingProficiencies = startingProficiencies0[i].name;
                console.log(startingProficiencies);
            }
            const chaTraits0 = data.traits;
            for (let i = 0; i < chaTraits0.length; i++) {
                const chaTraits = chaTraits0[i].name;
                console.log(chaTraits);
            }
            const chaLanguage0 = data.languages;
            var chaLanguage = [];
            for (let i = 0; i < chaLanguage0.length; i++) {
                chaLanguage.push(chaLanguage0[i].name);
                console.log(chaLanguage);
            }
            document.querySelector('#char-language').innerHTML = chaLanguage;

        })
        .catch(function (error) {
            console.log(error);
        });
}

function getClass(option) {
    const chaClass = option.value;
    let classURL = `https://www.dnd5eapi.co/api/classes/${chaClass}`
    fetch(classURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const hitDice = data.hit_die;
            document.querySelector('#hit-dice').value = "1d"+hitDice;
            console.log(hitDice);

            const proficiencies0 = data.proficiencies;
            var proficiencies = [];
            for (let i = 0; i < proficiencies0.length; i++) {
                proficiencies.push(proficiencies0[i].name);
                console.log(proficiencies);
            }
            document.querySelector('#char-prof').innerHTML = proficiencies;


            const startingEquipment0 = data.starting_equipment;
            var startingEquipment = [];
            for (let i = 0; i < startingEquipment0.length; i++) {
                startingEquipment.push(startingEquipment0[i].equipment.name);
                console.log(startingEquipment);
            }
            document.querySelector('#char-startEquip').innerHTML = startingEquipment;
            
            const proficiencyChoices0 = data.proficiency_choices;
            for (let i = 0; i < proficiencyChoices0.length; i++) {
                const proficiencyChoices = proficiencyChoices0[i];
                for (let j = 0; j < proficiencyChoices.from.length; j++) { 
                    var proficiencyList = proficiencyChoices0[i].from[j].name;
                    console.log(proficiencyList);}
            }


            const savingThrows0 = data.saving_throws;
            for (let i = 0; i < savingThrows0.length; i++) {
                const savingThrows = savingThrows0[i].name;
                console.log(savingThrows);
            }

            const startingEquipmentOptions0 = data.starting_equipment_options;
            for (let i = 0; i < startingEquipmentOptions0.length; i++) {
                for (let j = 0; j < 1; j++) { 
                    const startingEquipmentList = startingEquipmentOptions0[i].from[j].equipment.name;
                    console.log(startingEquipmentList);}
            }

            const chaSubClass = data.subclasses[0].name;
            console.log(chaSubClass)
        })
        .catch(function (error) {
            console.log(error);
        });
}