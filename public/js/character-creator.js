const { Store } = require("express-session");
const session = require("express-session");
var fetch = require("node-fetch");
const {
  User,
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
  Character_Equipment,
  Character_Spells,
} = require("../../models");

var racedata;
var classdata;
var backdata;
async function getAPI(charrace, charclass, charback) {
  console.log("getAPI");
  console.log(charrace, charclass, charback);
  // const charrace = charrace;
  // const charclass = charclass;
  // const charback = charback

  let racesURL = `https://www.dnd5eapi.co/api/races/${charrace}/`;
  const getRace = await fetch(racesURL)
    .then((response) => response.json())
    .then((data) => {
      racedata = data;
      // console.log(data);
      //     const chaSize = data.size;
      //     // console.log(chaSize);

      //     const chaLanguage0 = data.languages;
      //     var chaLanguage = [];
      //     for (let i = 0; i < chaLanguage0.length; i++) {
      //       chaLanguage.push(chaLanguage0[i].name);
      //       // console.log(chaLanguage);
      //     }
      //     // document.querySelector(".char-feat").innerHTML =
      //     //   `Size: Your size is ` +
      //     //   chaSize +
      //     //   "." +
      //     //   `
      //     //     ` +
      //     //   "Language: You can speake and write in " +
      //     //   chaLanguage +
      //     //   ".";

      //     charspeed = data.speed;
      //     // console.log(chaSpeed);
      //     // document.querySelector(".char-speed").value = chaSpeed;

      //     // const chaAge = data.age;
      //     // console.log(chaAge);
      //     // document.querySelector('#char-age').innerHTML = chaAge;

      //     const chaSubRace0 = data.subraces;
      //     for (let i = 0; i < chaSubRace0.length; i++) {
      //       const chaSubRace = chaSubRace0[i].name;
      //       // console.log(chaSubRace);
      //     }
      //     const startingProficiencies0 = data.starting_proficiencies;
      //     for (let i = 0; i < startingProficiencies0.length; i++) {
      //       const startingProficiencies = startingProficiencies0[i].name;
      //       // console.log(startingProficiencies);
      //     }
      //     const chaTraits0 = data.traits;
      //     for (let i = 0; i < chaTraits0.length; i++) {
      //       const chaTraits = chaTraits0[i].name;
      //       // console.log(chaTraits);
      //     }
    })
    .catch(function (error) {
      // console.log(error);
    });

  // // char_class = document.querySelector("#character-form").querySelector("#char-class").value
  // // async function getClass(char_class) {
  // // const chaClass = charclass;

  let classURL = `https://www.dnd5eapi.co/api/classes/${charclass}`;
  const getClass = await fetch(classURL)
    .then((response) => response.json())
    .then((data) => {
      classdata = data;
      //     // console.log(data);
      //     const hitDice = data.hit_die;
      //     // // document.querySelector("#hit-dice").value = "1d" + hitDice;
      //     // console.log(hitDice);
      //     const proficiencies0 = data.proficiencies;
      //     var proficiencies = [];
      //     for (let i = 0; i < proficiencies0.length; i++) {
      //       proficiencies.push(proficiencies0[i].name);
      //       // console.log(proficiencies);
      //     }
      //     // // document.querySelector("#char-prof").innerHTML = proficiencies;
      //     const startingEquipment0 = data.starting_equipment;
      //     var startingEquipment = [];
      //     for (let i = 0; i < startingEquipment0.length; i++) {
      //       startingEquipment.push(startingEquipment0[i].equipment.name);
      //       // console.log(startingEquipment);
      //     }
      //     // // document.querySelector("#char-startEquip").innerHTML =
      //     // //   startingEquipment;
      //     const proficiencyChoices0 = data.proficiency_choices;
      //     for (let i = 0; i < proficiencyChoices0.length; i++) {
      //       const proficiencyChoices = proficiencyChoices0[i];
      //       for (let j = 0; j < proficiencyChoices.from.length; j++) {
      //         var proficiencyList = proficiencyChoices0[i].from[j].name;
      //         // console.log(proficiencyList);
      //         prof.push(proficiencyList);
      //       }
      //     }
      //     for (let i = 0; i < data.proficiency_choices.choose; i++) {
      //       const option = data.proficiency_choices.choose[i];
      //       profchoices.push[{ choice: option }];
      //     }
      //     allchoices.push(profchoices);
      //     const savingThrows0 = data.saving_throws;
      //     for (let i = 0; i < savingThrows0.length; i++) {
      //       const savingThrows = savingThrows0[i].name;
      //       // console.log(savingThrows);
      //       if (savingThrows == "STR") {
      //         $('input[name="Strength-save-prof"]').prop("checked", true);
      //       }
      //       if (savingThrows == "CON") {
      //         $('input[name="Constitution-save-prof"]').prop("checked", true);
      //       }
      //       if (savingThrows == "DEX") {
      //         $('input[name="Dexterity-save-prof"]').prop("checked", true);
      //       }
      //       if (savingThrows == "WIS") {
      //         $('input[name="Wisdom-save-prof"]').prop("checked", true);
      //       }
      //       if (savingThrows == "INT") {
      //         $('input[name="Intelligence-save-prof"]').prop("checked", true);
      //       }
      //       if (savingThrows == "CHA") {
      //         $('input[name="Charisma-save-prof"]').prop("checked", true);
      //       }
      //     }
      //     const startingEquipmentOptions0 = data.starting_equipment_options;
      //     for (let i = 0; i < startingEquipmentOptions0.length; i++) {
      //       for (let j = 0; j < 1; j++) {
      //         const startingEquipmentList =
      //           startingEquipmentOptions0[i].from[j].equipment.name;
      //         // console.log(startingEquipmentList);
      //         equip.push(startingEquipmentList);
      //       }
      //     }
      //     const chaSubClass = data.subclasses[0].name;
      //     // console.log(chaSubClass);
    })
    .catch(function (error) {
      // console.log(error);
    });

  let backgroundURL = `https://www.dnd5eapi.co/api/backgrounds/${charback}/`;
  const getBackground = await fetch(backgroundURL)
    .then((response) => response.json())
    .then((data) => {
      backdata = data;
      //     // console.log(data);
      //     const proficiencies0 = data.starting_proficiencies;
      //     var proficiencies = [];
      //     for (let i = 0; i < proficiencies0.length; i++) {
      //       proficiencies.push(proficiencies0[i].name);
      //       // console.log(proficiencies);
      //     }
      //     // const languageChoices0 = data.language_options;
      //     // for (let i = 0; i < languageChoices0.length; i++) {
      //     //   const languageChoices = languageChoices0[i];
      //     //   for (let j = 0; j < languageChoices.from.length; j++) {
      //     //     var languageList = languageChoices0[i].from[j].name;
      //     //     // console.log(languageList);
      //     //     language.push(languageList);
      //     //   }
      //     langoptions = data.language_options.from;
      //     console.log("LANGUAGE OPTIONS");
      //     console.log(langoptions);
      //     for (let i = 0; i < langoptions.length; i++) {
      //       const option = langoptions[i].name;
      //       console.log(option);
      //       langchoices.push({ language: option });
      //     }
      //     console.log("Choices");
      //     console.log(langchoices);
      //     // allchoices.push(langchoices);
      //     // }
      //     const startingEquipment0 = data.starting_equipment;
      //     var startingEquipment = [];
      //     for (let i = 0; i < startingEquipment0.length; i++) {
      //       startingEquipment.push(startingEquipment0[i].equipment.name);
      //       // console.log(startingEquipment);
      //     }
      //     // document.querySelector("#char-startEquip").innerHTML =
      //     //   startingEquipment;
      //     //CURRENT API HAS NO EQUIPMENT OPTIONS
      //     // const startingEquipmentOptions0 =
      //     //   data.starting_equipment_options[0].from;
      //     // console.log("--------------");
      //     // console.log(startingEquipmentOptions0);
      //     // for (let i = 0; i < startingEquipmentOptions0.length; i++) {
      //     //   const startingEquipmentList =
      //     //     startingEquipmentOptions0[i].equipment.equipment_category.name;
      //     // console.log(startingEquipmentList);
      //     //   equip.push(startingEquipmentList);
      //     // }
      //     // let choose = data.starting_equipment_options[0].choose;
      //     // for (let i = 0; i < choose; i++) {
      //     //   const option = choose[i];
      //     //   equipchoices.push[{ choice: option }];
      //     // }
      //     // allchoices.push(equipchoices);
      //     const backgroundFeature = data.feature.name;
      //     // console.log(backgroundFeature);
    })
    .catch(function (error) {
      // console.log(error);
    });
    let loggedIn = true;
  return { racedata, classdata, backdata, loggedIn};
}

async function getSaves(data, charid) {
  var savdata = {};
  console.log(charid);
  let saving_throws = data.classdata.saving_throws;
  for (let i = 0; i < saving_throws.length; i++) {
    const charsave = saving_throws[i].index;
    savdata[charsave] = true;
  }
  savdata["character_id"] = charid;
  return savdata;
  // console.log(characterSave);
}

async function getSkills(sendskills, apiGet, charid) {
  var skilldata = {};
  var skills = sendskills;
  console.log("Sendskills", sendskills);
  var backprof = apiGet.backdata.starting_proficiencies;
  console.log(backprof);
  for (let i = 0; i < backprof.length; i++) {
    const skillobj = backprof[i];
    const skill = skillobj.name;
    skills.push(skill);
  }
  for (let i = 0; i < skills.length; i++) {
    const charskill = skills[i];
    if (charskill.includes("Skill")) {
      let replaced = charskill.replace("Skill: ", "");
      let skill = replaced.toLowerCase();
      console.log(skill);
      skilldata[skill] = true;
    }
  }
  skilldata["character_id"] = charid;
  console.log(skilldata);
  return skilldata;
}

async function getProf(sendprofchoice, sendlangchoices, apiGet, charid) {
  var profdata = {};
  const data = apiGet;
  var choices = sendprofchoice;
  var tools = [];
  var armor = [];
  var weapon = [];
  const allprofs = [];
  var language = [];
  for (let i = 0; i < choices.length; i++) {
    const prof = choices[i];
    if (!prof.includes("Skill")) {
      tools.push(prof);
    }
  }
  const raceprofs = data.racedata.starting_proficiencies;
  for (let i = 0; i < raceprofs.length; i++) {
    const profs = raceprofs[i].name;
    allprofs.push(profs);
  }
  const classprofs = data.classdata.proficiencies;
  for (let i = 0; i < classprofs.length; i++) {
    const profs = classprofs[i].name;
    allprofs.push(profs);
  }
  for (let i = 0; i < allprofs.length; i++) {
    const prof = allprofs[i];
    if (prof.includes("armor") || prof.includes("shield")) {
      armor.push(prof);
    } else if (prof.includes(" kit") || prof.includes(" tool")) {
      tools.push(prof);
    } else {
      weapon.push(prof);
    }
  }
  const racelang = data.racedata.languages;
  const backlang = sendlangchoices;
  for (let i = 0; i < racelang.length; i++) {
    const lang = racelang[i].name;
    language.push(lang);
  }
  for (let i = 0; i < backlang.length; i++) {
    const lang = backlang[i];
    language.push(lang);
  }
  console.log("tools", tools);
  console.log(weapon);
  console.log(armor);
  const stringtool = JSON.stringify(tools);
  const stringweapon = JSON.stringify(weapon);
  const stringarmor = JSON.stringify(armor);
  const stringlang = JSON.stringify(language);
  const jsontool = JSON.parse(stringtool);
  const jsonweapon = JSON.parse(stringweapon);
  const jsonarmor = JSON.parse(stringarmor);
  const jsonlang = JSON.parse(stringlang);

  console.log("allprofs", allprofs);
  profdata["tool"] = jsontool;

  profdata["weapon"] = jsonweapon;

  profdata["armor"] = jsonarmor;

  profdata["languages"] = jsonlang;
  profdata["character_id"] = charid;
  console.log("profdata", profdata);
  return profdata;
}

//       console.log(element.name.toLowerCase())
//      return element.name.toLowerCase() = true;});

module.exports.getAPI = getAPI;
module.exports.getSaves = getSaves;
module.exports.getSkills = getSkills;
module.exports.getProf = getProf;
