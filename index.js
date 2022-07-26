// link to page creation 
// const generateHTML = require('./src/generateHTML');



//node modules
const fs = require("fs");
const inquirer = require("inquirer");

//team profiles 
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

//declaring the array
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


//FUNCTION STARTS

//this starts with the first question which is who is manager at Default.

inquirer.prompt(firstArray).then((managerData) => {
let manager;
if (managerData){
    manager = new Manager(
    managerData.managerName,
    managerData.managerID,
    managerData.managerEmail,
    managerData.officeNumber 
    )

    array.push(manager);
    console.log(array);
    
}
  if (managerData.continue === "yes") {

    addEmployee();
  } else if (managerData.continue === "no"){
     
    const printManager = displayManager(managerData);
    fs.writeFile("output.html", printManager, (err) => {
        err ? console.log(err): console.log("write file has printed the manager data")
    })
  }
});

function addEmployee() {
  console.log("EMPLOYEE GENERATOR");
   return inquirer.prompt(secondArray).then((employeeData) => {
     
    let employee;
    if (employeeData.role == "Intern") {
        console.log("new Intern")
      employee = new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.school
        
      );
      console.log(employee);
    //   employee.printIntern();
    } if (employeeData.role == "Engineer") {
        console.log("new Engineer")
      employee = new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.github
      );
      console.log(employee);
    //   employee.printEngineer();
    }
    array.push(employee);
    

    // console.log(array[1].getRole() === "Intern");
    // this how you can check the role

    if (employeeData.continue === "yes"){
        addEmployee();
        console.log(array)
    } else {
        htmlBuilder()
        
    }
  });
}

function htmlBuilder () {
  console.log("please generate a team bro")

  fs.writeFile("output.html", generateHTML(array), "UTF-8")

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


var generateHTML = team => {
  //create the manager card
  const generateManager =  function(manager)  {
    return `
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${manager.getName()}<br /><br />${manager.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.getID()}</li>
                    <li class="list-group-item">${manager.getEmail()}</li>
                    <li class="list-group-item">${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
  };

  // create Engineer card
  const generateEngineer = function (engineer) {
    return `
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${engineer.getName()}<br /><br />${manager.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.getID()}</li>
                    <li class="list-group-item">${engineer.getEmail()}</li>
                    <li class="list-group-item">${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
  };
  // create the intern card
  const generateIntern = function (intern) {
    return `
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${intern.getName()}<br /><br />${intern.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.getID()}</li>
                    <li class="list-group-item">${intern.getEmail()}</li>
                    <li class="list-group-item">${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
  };

  const page = [];

  page.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  page.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  page.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// exporting this function to generate the html

module.export = (team) => {
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
<div>
${generateHTML(team)}
</div>
</body>
</html>
    `;
};