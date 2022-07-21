const fs = require('fs');
const inquirer = require('inquirer');

const firstQuestion = [
{
    type: 'list',
    name: 'members',
    message: 'How many members are in your team?',
    choices: [
        1, 2, 3, 4, 5,
    ]
},

]

inquirer.prompt(firstQuestion).then((answer) => {
    console.log(firstQuestion)
    if (answer.members == 1) {
        // generate1()
        console.log(1)
    }
    else if ( answer.members == 2){
        // generate2()
        console.log(2)
    }
    else if (answer.members == 3) {
        // generate3()
        console.log(3)
    }
    else if (answer.members == 4) {
        // generate4()
        console.log(4)
    }
    else{
        // generate5()
        console.log(5)
    }
    console.log(answer);
})