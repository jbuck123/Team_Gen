const generateHTML = array => {
  //create the manager card
  const generateManager =  manager => {
    return `
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${manager.getName()}<br /><br />${manager.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.getID()}</li>
                    <a class="list-group-item" href="mailto:${manager.getEmail()}">Send Email</a>
                    <li class="list-group-item">${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
  };

  // create Engineer card
  const generateEngineer =  engineer => {
    return `
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${engineer.getName()}<br /><br />${engineer.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.getID()}</li>
                    <a class="list-group-item" href="mailto:${engineer.getEmail()}">Send Email</a>
                    <a class="list-group-item" href="${engineer.getGithub()}">Github Link</a>.
                </ul>
            </div>
        </div>
    </div>
</div>`;
  };
  // create the intern card
  const generateIntern = intern => {
    return `
<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${intern.getName()}<br /><br />${intern.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.getID()}</li>
                    <a class="list-group-item" href="mailto:${intern.getEmail()}">Send Email</a>
                    <li class="list-group-item">${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
  };

  const page = [];
// filtering through the objects 
  page.push(
    array
      .filter((manager) => manager.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  page.push(
    array
      .filter((engineer) => engineer.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  page.push(
    array
      .filter((intern) => intern.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return page.join("");
};

// exporting this function to generate the html

module.exports = (team) => {
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
    `
};
