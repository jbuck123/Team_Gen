// function generateHTML(team) {
//   //create the manager card
//   const generateManager =  function(manager)  {
//     return `
// <div class="container">
//     <div class="row">
//         <div class="col-1">
//             <div class="card mx-auto" style="width: 18rem">
//                 <h5 class="card-header">${manager.getName()}<br /><br />${manager.getRole()}</h5>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">${manager.getID()}</li>
//                     <li class="list-group-item">${manager.getEmail()}</li>
//                     <li class="list-group-item">${manager.getOfficeNumber()}</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>`;
//   };

//   // create Engineer card
//   const generateEngineer = function (engineer) {
//     return `
// <div class="container">
//     <div class="row">
//         <div class="col-1">
//             <div class="card mx-auto" style="width: 18rem">
//                 <h5 class="card-header">${engineer.getName()}<br /><br />${manager.getRole()}</h5>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">${engineer.getID()}</li>
//                     <li class="list-group-item">${engineer.getEmail()}</li>
//                     <li class="list-group-item">${engineer.getGithub()}</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>`;
//   };
//   // create the intern card
//   const generateIntern = function (intern) {
//     return `
// <div class="container">
//     <div class="row">
//         <div class="col-1">
//             <div class="card mx-auto" style="width: 18rem">
//                 <h5 class="card-header">${intern.getName()}<br /><br />${intern.getRole()}</h5>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">${intern.getID()}</li>
//                     <li class="list-group-item">${intern.getEmail()}</li>
//                     <li class="list-group-item">${intern.getSchool()}</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>`;
//   };

//   const page = [];

//   page.push(
//     team
//       .filter((employee) => employee.getRole() === "Manager")
//       .map((manager) => generateManager(manager))
//   );
//   page.push(
//     team
//       .filter((employee) => employee.getRole() === "Engineer")
//       .map((engineer) => generateEngineer(engineer))
//       .join("")
//   );
//   page.push(
//     team
//       .filter((employee) => employee.getRole() === "Intern")
//       .map((intern) => generateIntern(intern))
//       .join("")
//   );

//   return html.join("");
// };

// // exporting this function to generate the html

// module.export = (team) => {
//   return `
    
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./Assets/styles.css">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//     <title>Team Generator</title>
// </head>
// <body>
// <header class="bg-secondary">
//     <h1 class="display-3 text-center text-danger">My Squad</h1> 
//     <h6 class="display-6 text-center text-danger">By: James Buchmann</h6>
// </header>
// <div>
// ${generateTeam(team)}
// </div>
// </body>
// </html>
//     `;
// };
