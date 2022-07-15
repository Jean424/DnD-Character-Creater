const chaClass = document.querySelector('#char-class');
const chaRace = document.querySelector('#char-race');


//API for classes
let classURL = `https://www.dnd5eapi.co/api/classes/${chaClass}`
    fetch(classURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const hitDie = data.hit_die;
            const proficiencies0 = data.proficiencies;
            for (let i = 0; i < proficiencies0.length; i++) {
                const proficiencies = proficiencies0[i].name;
                console.log(proficiencies);
            }
            const startingEquipment0 = data.starting_equipment;
            for (let i = 0; i < startingEquipment0.length; i++) {
                const startingEquipment = startingEquipment0[i].equipment.name;
                console.log(startingEquipment);
            }
            
            const proficiencyChoices0 = data.proficiency_choices;
            for (let i = 0; i < proficiencyChoices0.length; i++) {
                const proficiencyChoices = proficiencyChoices0[i];
                for (let j = 0; j < proficiencyChoices.from.length; j++) { 
                    const proficiencyList = proficiencyChoices0[i].from[j].name;
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
        })
        .catch(function (error) {
            console.log(error);
        });


//Api for Races

let racesURL = `https://www.dnd5eapi.co/api/races/${chaRace}/`
    fetch(racesURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const chaSize = data.size;
            const chaSpeed = data.speed;
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
            for (let i = 0; i < chaLanguage0.length; i++) {
                const chaLanguage = chaLanguage0[i].name;
                console.log(chaLanguage);
            }
        })
        .catch(function (error) {
            console.log(error);
        });