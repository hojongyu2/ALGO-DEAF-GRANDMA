const prompt = require("prompt-sync")({ sigint: true });
let goodbye = 0;
let greeting = prompt("HEY KID!");
while (goodbye < 2) {
  response = prompt();
  if (response === "") {
    console.log("what!");
  } else if (response.match(/[a-z]/g)) {
    console.log("SPEAK UP, KID!")
  } else if (response === response.toUpperCase() && response !== "" && response !== "GOODBYE!") {
    console.log(`NO, NOT SINCE 1946!`)
  } else if (response === "GOODBYE!") {
    console.log("LEAVING SO SOON?")
    goodbye ++
  }
  if(goodbye === 2){
    console.log("LATER, SKATER!")
  }
}
