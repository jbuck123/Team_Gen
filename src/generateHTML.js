const generateTeam = team => {

    //create the manager card
const generateManager = function (manager) {
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
</div>`

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
</div>`

}
    // create the intern card 
const generateIntern = function (Intern) {
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
</div>`

};
return html.join("")
}

// exporting this function to generate the html

