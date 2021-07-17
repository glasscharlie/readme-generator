const inquirer = require('inquirer');
const fs = require('fs');
readME = ''


const generateLICENSE = (answers) => {

    for (let i = 0; i < answers.license.length; i++) {
           
        switch(answers.license[i]) {
            case "Apache-2.0":
                return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

            case "MIT":
                return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

            case "GPLv3":
                return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                    }
    }                     
}


const generateREADME = (answers) => {

return `# ${answers.name}

## Desciption
${answers.description}

${generateLICENSE(answers)}

# Table of Contents
[Installation-Instructions](#Installation-Instructions)
[Usage-Information ](#Usage-Information )
[Contribution-Guidelines](#Contribution-Guidelines)
[Test-Instruction](#Test-Instruction)
[Questions](#Questions)
[License](#license)

## Installation-Instructions
${answers.insallation}

## Usage-Information 
${answers.usage}

## Contribution-Guidelines
${answers.contribution}

## Test-Instruction
${answers.test}

## Questions
[Github](https://github.com/${answers.username})
[Email](${answers.email})

## License
${answers.license}`

}





inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of the project?',
    },
    {
      type: 'input',
      name: 'insallation',
      message: 'Are there any installation instructions for the project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Is there any usage information for the project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are there any contribution guidelines for the project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Are there any test instructions for the project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Do you want to add a license to the readme?.',
        choices: ['Apache-2.0', 'MIT', 'GPLv3']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
  ])
  .then((answers) => {
    pageContent = generateREADME(answers);

    fs.writeFile('testREAME.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });

