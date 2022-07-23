const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./manager");



let array = [];

// QUESTIONS

const firstQuestion = [
    {
      type: "input",
      name: "managerName",
      message: "Please enter the manager's name.",
      //validating input... if this returns false, ends the app.
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log("Please enter a valid name")
              return false;
          }
      }
    },
    {
      type: "input",
      name: "managerID",
      message: "Please enter the manager ID number.",
      //validate ID .. make sure it is a number
      validate: id_input => {
          if (isNaN(id_input)) {
              console.log('please enter a valid ID number');
              return false;
          } else {
              return true;
          }
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "please enter the manager email.",
      // i cant figure out how to 
    },
    {
      type: "input",
      name: "officeName",
      message: "please enter the manager's office number.",
      validate: id_input => {
        if (isNaN(id_input)) {
            console.log('please enter a valid ID number');
            return false;
        } else {
            return true;
        }
    }
    },
    {
      type: "list",
      name: "continue",
      message: "do you wish to add more to the squad?",
      choices: ["yes", "no"],
    },
  ];

const secondQuestion = [
    {
        type: "list",
        Name: "role",
        message: "Do you want to add an intern or an engineer",
        choices: ["Intern", "Engineer"]
    },
  {
    type: "input",
    name: "name",
    message: "Please enter their name.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter a valid name")
            return false;
        }
    }
  },
  {
    type: "input",
    name: "ID",
    message: "Please enter the their ID.",
    validate: id_input => {
        if (isNaN(id_input)) {
            console.log('please enter a valid ID number');
            return false;
        } else {
            return true;
        }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the their email.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the engineer's Github username.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter a valid name")
            return false;
        }
    }
  },
  {
    type: "list",
    name: "continue",
    message: "Do you wish to add to your squad?",
    choices: ["yes", "no"]
  },
];







//FUNCTION STARTS 



//this starts with the first question which is who is manager at Default.

inquirer.prompt(firstQuestion).then((answer) => {
  console.log(answer);
  array.push(answer)
  console.log(array)
  if (answer.continue === "yes") {
    menuFunc();
  } else {
    // this is where you will display the team
  }
});

function menuFunc() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "do you wish to add an engineer or an intern",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answer1) => {
      console.log(answer1);
      if (answer1.menu === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answer) => {

      array.push(answer)
      console.log(answer)
      
      if (answer.continue === "yes") {
        menuFunc();
      } else {
          displaySquad(array)
      }
      
      })
      
      // .then chain this in the future to get better s
  
}
function addIntern() {
    inquirer.prompt(internQuestions).then((answer) => {
        console.log(answer);
        array.push(answer)
        console.log(array)
       

        if (answer.continue === "yes") {
            menuFunc();
          } else {
              displaySquad(array)
          }
      });
    //.then chain this with classes(in the future).... use more advanced coding 
}

// print array to html 
// create the team

function displaySquad(array){
const pageContent = JSON.stringify(array)
console.log("final array" + pageContent)


// fs.writeFile("index.html", pageContent, (err) => {
//     err ? console.log(err): console.log('its working')
// })
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
