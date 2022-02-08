// Required Packages
const inquirer = require('inquirer');
const { resolve } = require('path');
const { writeFile } = require('fs');

const { Manager, Engineer, Intern } = require('./models')
const { 
    engineerQuestions,
    internQuestions,
    mgrQuestions
} = require('./questions')

const renderHTML = require('./renderHTML.js');

const outputPath = resolve(__dirname, 'dist/index.html');

(async function() {
    try {
        const teamData = [];
        const input = await inquirer.prompt(mgrQuestions)
        
        const manager = new Manager(
            input.name,
            input.id,
            input.email,
            input.officeNumber
        );
        teamData.push(manager);
        
        let empType = input.addEmp

        while (empType !== 'Done') {
            let staff
            let answer
            if (empType === 'Engineer') {
                answer = await getEngineer();
                staff = new Engineer(
                    answer.name,
                    answer.id,
                    answer.email,
                    answer.github
                )
            }
            else if (empType === 'Intern') {
                answer = await getIntern();
                staff = new Intern(
                    answer.name,
                    answer.id,
                    answer.email,
                    answer.school
                )
            }
            teamData.push(staff)
            empType = answer.addEmp
        }
        
        const html = renderHTML(teamData);
        writeHTMLFile(html);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }

})();


function getEngineer() {
    return inquirer.prompt(engineerQuestions)  
}

function getIntern() {
    return inquirer.prompt(internQuestions)
}

function writeHTMLFile(html){
    writeFile(outputPath, html, function(error) {
        if(error){ return console.log(error); }
        console.log('\nYou have created your file successfully! \nIt is located in the folder dist and it is called index.html\n');
    })
}
