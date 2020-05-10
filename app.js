// use inquirer npm package
const inquirer = require('inquirer');
// use node.js file structure module
const fs = require('fs');
// call function to write README.md file
const { writeFile} = require('./generate-site.js');
// call function to generate README.md page
const generatePage = require('./utils/generateMarkdown')

const portfolioData = [];
// function to capture user answers
const promptProject = portfolioData => {

	return inquirer.prompt([
{
  type: 'input',
  name: 'title',
	message: 'What is the name of your project? (Required)',
	validate: nameInput => {
		if (nameInput) {
			return true;
		} else {
			console.log('Please enter project name!');
			return false;
		}
		}	
},
{
  type: 'input',
  name: 'description',
	message: 'Provide a description of the project (Required)',
	validate: nameInput => {
		if (nameInput) {
			return true;
		} else {
			console.log('Please enter project description!');
			return false;
		}
	}
},
{
  type: 'input',
  name: 'installation',
	message: 'What are the installation instructions?',
},
{
  type: 'input',
  name: 'usage',
	message: 'What is the usage information?',
},
{
  type: 'input',
  name: 'contribution',
	message: 'What are the contribution guidelines?',
},
{
  type: 'input',
  name: 'instructions',
	message: 'What are the test instructions?',
},
{
  type: 'list',
  name: 'licenses',
  message: 'What is the license for this project? (Choose one)',
  choices: ['CCO', 'Attribution', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'None']
},
{
  type: 'input',
  name: 'github',
	message: 'Enter the GitHub link to your project. (Required)',
	validate: nameInput => {
		if (nameInput) {
			return true;
		} else {
			console.log('Please enter GitHub link!');
			return false;
		
		}
	}
},
{
  type: 'input',
  name: 'email',
	message: 'What is your email?',
},
				
])

}


// call to fulfill promise and to then execute code in sequence with .then
	promptProject(portfolioData)
	.then(portfolioData => {
    console.log("portfolio data is :");
    console.log(portfolioData);
  
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })

  .catch(err => {
    console.log(err);
  });
  
