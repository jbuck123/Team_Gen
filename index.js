const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let array = [];

// QUESTIONS

const firstArray = [
  {
    type: "input",
    name: "managerName",
    message: "Please enter the manager's name.",
    //validating input... if this returns false, ends the app.
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a valid name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "managerID",
    message: "Please enter the manager ID number.",
    //validate ID .. make sure it is a number
    validate: (id_input) => {
      if (isNaN(id_input)) {
        console.log("please enter a valid ID number");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "please enter the manager email.",
    // i cant figure out how to
  },
  {
    type: "input",
    name: "officeNumber",
    message: "please enter the manager's office number.",
    validate: (id_input) => {
      if (isNaN(id_input)) {
        console.log("please enter a valid ID number");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "continue",
    message: "do you wish to add more to the squad?",
    choices: ["yes", "no"],
  },
];

// 2nd array

const secondArray = [
  {
    type: "list",
    name: "role",
    message: "Do you want to add an intern or an engineer",
    choices: ["Intern", "Engineer"],
  },
  {
    type: "input",
    name: "name",
    message: "Please enter their name.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a valid name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the their ID.",
    validate: (id_input) => {
      if (isNaN(id_input)) {
        console.log("please enter a valid ID number");
        return false;
      } else {
        return true;
      }
    },
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

    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a valid name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "where does the intern attend school?",
  },
  {
      type: "list",
      name: "continue",
      message: "do you want to continue?",
      choices: ["yes", "no"]
  }
];

// ContinueArray = [
//   {
//     type: "list",
//     name: "continue",
//     message: "Do you want to add more to your squad?",
//     choices: ["yes", "no"],
//   },
// ];

//FUNCTION STARTS

//this starts with the first question which is who is manager at Default.

inquirer.prompt(firstArray).then((managerData) => {
// let employee = new Manager( 
    
//     managerData.name,
//     managerData.id,
//     managerData.email,
//     managerData.officeNumber

// )

  if (managerData.continue === "yes") {
    array.push(managerData);
    console.log(array);
    addEmployee();
  } else if (managerData.continue === "no"){
     
    const printManager = displayManager(managerData);
    fs.writeFile("output.html", printManager, (err) => {
        err ? console.log(err): console.log("its working")
    })
  }
});

function addEmployee() {
  console.log("EMPLOYEE GENERATOR");
   inquirer.prompt(secondArray).then((employeeData) => {
     
    let employee;
    if (employeeData.role == "Intern") {
        console.log()
      employee = new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.school
        
      );
      console.log(employee.Intern);
      employee.printIntern();
    } if (employeeData.role == "Engineer") {
      employee = new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.github
      );
      console.log(employee);
      employee.printEngineer();
    }
    array.push(employee);
    

    console.log(array[1].getRole() === "Intern");
    // this how you can check the role

    if (employeeData.continue === "yes"){
        addEmployee();
        console.log(array)
    } else {
        printEmployee()
        
    }
  });
}

function printEmployee(){
    console.log("work in prog")
    console.log(array)
    // grab array
  
    // 
    //loop through array 
    // 
}


function displayManager(managerData){
return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Assets/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body>
<header class="bg-secondary">
    <h1 class="display-3 text-center text-danger">My Squad</h1> 
    <h6 class="display-6 text-center text-danger">By: James Buchmann</h6>
</header>
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${managerData.managerName}<br /><br />Manager</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${managerData.managerID}</li>
                    <li class="list-group-item">${managerData.managerEmail}</li>
                    <li class="list-group-item">${managerData.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
</div>

</body>
</html>

`
    

}

// if (continue === "yes"){
//     addEmployee()

// }

// function menuFunc() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "menu",
//         message: "do you wish to add an engineer or an intern",
//         choices: ["Engineer", "Intern"],
//       },
//     ])
//     .then((answer1) => {
//       console.log(answer1);
//       if (answer1.menu === "Engineer") {
//         addEngineer();
//       } else {
//         addIntern();
//       }
//     });
// }

// function addEngineer() {
//     inquirer.prompt(engineerQuestions).then((answer) => {

//       array.push(answer)
//       console.log(answer)

//       if (answer.continue === "yes") {
//         menuFunc();
//       } else {
//           displaySquad(array)
//       }

//       })

// .then chain this in the future to get better s

// }
// function addIntern() {
//     inquirer.prompt(internQuestions).then((answer) => {
//         console.log(answer);
//         array.push(answer)
//         console.log(array)

//         if (answer.continue === "yes") {
//             menuFunc();
//           } else {
//               displaySquad(array)
//           }
//       });
//     //.then chain this with classes(in the future).... use more advanced coding
// }

// print array to html
// create the team

// function displaySquad(array){
// const pageContent = JSON.stringify(array)
// console.log("final array" + pageContent)

// // fs.writeFile("index.html", pageContent, (err) => {
// //     err ? console.log(err): console.log('its working')
// // })
// }

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
