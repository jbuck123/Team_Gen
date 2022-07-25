const generateManager = function (manager) {
    return `<div class="container">
    <div class="row">
        <div class="col-1">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${manager.managerName}<br /><br />Manager</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.managerName}</li>
                    <li class="list-group-item">${manager.managerEmail}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`

}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};