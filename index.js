const fs = require('fs');
const inquirer = require('inquirer');

const firstQuestion = [
{
    type: 'list',
    name: 'firstQuestion',
    message: 'How many members are in your team?',
    choices: [
        1, 2, 3, 4, 5,
    ]
},
]

inquirer.prompt(firstQuestion).then((answer) => {
    console.log(answer);
})