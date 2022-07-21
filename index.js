const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./manager");

const firstQuestion = [
  {
    type: "input",
    name: "managerName",
    message: "Please enter the manager's name.",
  },
  {
    type: "input",
    name: "managerID",
    message: "Please enter the manager ID number.",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "please enter the manager email.",
  },
  {
    type: "input",
    name: "officeName",
    message: "please enter the manager's office number.",
  },
  {
    type: "list",
    name: "continue1",
    message: "do you wish to add more to the squad?",
    choices: ["yes", "no"],
  },
];

inquirer.prompt(firstQuestion).then((answer) => {
  console.log(answer);
  if (answer.continue1 === "yes") {
    menuFunc();
  } else {
    // templateLit(answer)
    // push answers too the display function
  }
});

function menuFunc() {
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "do you wish to add an engineer or an intern",
      choices: ["Engineer", "Intern"],
    },
  ])
  .then((answer1) => {
      console.log(answer1)
      if(answer1.menu === "Engineer"){
          addEngineer()
      } else{
          addIntern()
      }
  })
}

function addEngineer(){
    console.log("engineer working func")
}
function addIntern(){
    console.log("intern func")
}
// const firstQuestion = [
// {
//     type: 'list',
//     name: 'members',
//     message: 'How many members are in your team?',
//     choices: [
//         1, 2, 3, 4, 5,
//     ]
// },

// ]

// inquirer.prompt(firstQuestion).then((answer) => {
//     console.log(firstQuestion)
//     if (answer.members == 1) {
//         generate1()
//         console.log(1)
//     }
//     else if ( answer.members == 2){
//         generate2()
//         console.log(2)
//     }
//     else if (answer.members == 3) {
//         generate3()
//         console.log(3)
//     }
//     else if (answer.members == 4) {
//         generate4()
//         console.log(4)
//     }
//     else{
//         generate5()
//         console.log(5)
//     }
//     console.log(answer);
// })

// generate1()
// {
//     console.log("hey1")
// }

// generate2()
// {
//     console.log("hey2")
// }
// generate3()
// {
//     console.log("hey3")
// }
// generate4()
// {
//     console.log("hey4")
// }
// generate5()
// {
//     console.log("hey5")
// }
