// function setCookies(name, value){
    // app.get('/', function(req, res) {
        // var sessData = req.session;
        // sessData.token = form1;
        // char_name = document.querySelector("#character-form").querySelector("#char-name").value
        // char_age = document.querySelector("#character-form").querySelector("#char-age").value
        // char_gen = document.querySelector("#character-form").querySelector("#char-gen").value
        // char_race = document.querySelector("#character-form").querySelector("#char-race").value
        // char_class = document.querySelector("#character-form").querySelector("#char-class").value
        // char_background = document.querySelector("#character-form").querySelector("#char-background").value
        // char_str = document.querySelector("#character-form").querySelector("#char-str").value
        // char_dex = document.querySelector("#character-form").querySelector("#char-dex").value
        // char_con = document.querySelector("#character-form").querySelector("#char-con").value
        // char_int = document.querySelector("#character-form").querySelector("#char-int").value
        // char_wis = document.querySelector("#character-form").querySelector("#char-wis").value
        // char_cha = document.querySelector("#character-form").querySelector("#char-cha").value
        
        // res.render('character-creator', req.session);
    //     session.save();
    //     console.log(form1);
    //   });
// }

// function continueCharacter(){
//    const form = document.querySelector("#character-form");
//    const form1 = form.getElementsByClassName("form1")
//    for (let i = 0; i < form1.length; i++) {
//     const element = form1[i];
//     element.classList.add("hidden")
    
//    }
// }

//pass these into the creator2 handlebars
const language = []
const langchoices = []
const trait = []
const traitchoices = []
const prof = []
const profchoices = []
const skill = []
const skillchoices = []
const equip = []
const equipchoices = []
const spell = []
const spellchoices = []

// char_race = document.querySelector("#character-form").querySelector("#char-race").value
function getRace(option) {
    const chaRace = option.value;
    let racesURL = `https://www.dnd5eapi.co/api/races/${chaRace}/`
    fetch(racesURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const chaSize = data.size;
            console.log(chaSize)

            const chaLanguage0 = data.languages;
            var chaLanguage = [];
            for (let i = 0; i < chaLanguage0.length; i++) {
                chaLanguage.push(chaLanguage0[i].name);
                console.log(chaLanguage);
            }
            document.querySelector('.char-feat').innerHTML = `Size: Your size is ` + chaSize + '.' + `
            ` +
            "Language: You can speake and write in " + chaLanguage + '.';
           
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

        })
        .catch(function (error) {
            console.log(error);
        });
}

// char_class = document.querySelector("#character-form").querySelector("#char-class").value
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
                    console.log(proficiencyList);
                prof.push(proficiencyList)}
            }
            for (let i = 0; i < data.proficiency_choices.choose; i++) {
                const option = choose[i];
                profchoices.push[{choice: option}]
            }
            


            const savingThrows0 = data.saving_throws;
            for (let i = 0; i < savingThrows0.length; i++) {
                const savingThrows = savingThrows0[i].name;
                console.log(savingThrows)
                if (savingThrows == 'STR') {
                    $('input[name="Strength-save-prof"]').prop('checked', true);
                }
                if (savingThrows == 'CON') {
                    $('input[name="Constitution-save-prof"]').prop('checked', true);
                }
                if (savingThrows == 'DEX') {
                    $('input[name="Dexterity-save-prof"]').prop('checked', true);
                }
                if (savingThrows == 'WIS') {
                    $('input[name="Wisdom-save-prof"]').prop('checked', true);
                }
                if (savingThrows == 'INT') {
                    $('input[name="Intelligence-save-prof"]').prop('checked', true);
                }
                if (savingThrows == 'CHA') {
                    $('input[name="Charisma-save-prof"]').prop('checked', true);
                }
            }



            const startingEquipmentOptions0 = data.starting_equipment_options;
            for (let i = 0; i < startingEquipmentOptions0.length; i++) {
                for (let j = 0; j < 1; j++) { 
                    const startingEquipmentList = startingEquipmentOptions0[i].from[j].equipment.name;
                    console.log(startingEquipmentList);
                equip.push(startingEquipmentList)}
            }

            const chaSubClass = data.subclasses[0].name;
            console.log(chaSubClass)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getBackground(option) {
    const chaBackground = option.value;
    let backgroundURL = `https://www.dnd5eapi.co/api/races/${chaBackround}/`
    fetch(backgroundURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const proficiencies0 = data.proficiencies;
            var proficiencies = [];
            for (let i = 0; i < proficiencies0.length; i++) {
                proficiencies.push(proficiencies0[i].name);
                console.log(proficiencies);
            }
            const languageChoices0 = data.language_options;
            for (let i = 0; i < data.language_options.choose; i++) {
                const option = choose[i];
                choices.push[{choice: option}]
            }
            for (let i = 0; i < languageChoices0.length; i++) {
                const languageChoices = languageChoices0[i];
                for (let j = 0; j < languageChoices.from.length; j++) { 
                    var languageList = languageChoices0[i].from[j].name;
                    console.log(languageList);
                language.push(languageList)}
            }
            const startingEquipment0 = data.starting_equipment;
            var startingEquipment = [];
            for (let i = 0; i < startingEquipment0.length; i++) {
                startingEquipment.push(startingEquipment0[i].equipment.name);
                console.log(startingEquipment);
            }
            document.querySelector('#char-startEquip').innerHTML = startingEquipment;

            const startingEquipmentOptions0 = data.starting_equipment_options;
            
            for (let i = 0; i < data.starting_equipment_options.choose; i++) {
                const option = choose[i];
                equipchoices.push[{choice: option}]
            }
            for (let i = 0; i < startingEquipmentOptions0.length; i++) {
                for (let j = 0; j < 1; j++) { 
                    const startingEquipmentList = startingEquipmentOptions0[i].from[j].equipment.name;
                    console.log(startingEquipmentList);
                equip.push(startingEquipmentList)}
            }
            const backgroundFeature = data.feature.name;
            console.log(backgroundFeature)})}

            for (let i = 0; i < data.choose; i++) {
                const option = choose[i];
                choices.push[{choice: option}]
            }