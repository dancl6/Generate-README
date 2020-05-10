const inquirer = require('inquirer');
const fs = require('fs');

const { writeFile} = require('./generate-site.js');
// const promptUser = () =>{}

const generatePage = require('./utils/generateMarkdown')

const portfolioData = [];

const promptProject = portfolioData => {
// 	if (!portfolioData.projects) {
// 		portfolioData.projects = [];
// 	}
// 	console.log(`
// =========================
// Add a New Project
// =========================	
// 	`);
// 	// portfolioData.projects = [];
// 	// If there's no 'projects' array property, create one

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
// {
//   type: 'confirm',
//   name: 'feature',
//   message: 'Would you like to feature this project?',
//   default: false
// },
// {
//   type: 'confirm',
//   name: 'confirmAddProject',
//   message: 'Would you like to enter another project?',
//   default: false
// }				
])
// .then(projectData => {
// 	portfolioData.projects.push(projectData);
// 	if(projectData.confirmAddProject) {
// 		return promptProject(portfolioData);
// 	} else {
// 		return portfolioData;
// 	}
// })
// .then(projectData => {
// 	portfolioData.projects.push(projectData);

// 	});
}


// const badgesArray = {CCO: "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)", Attribution: '![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)', Eclipse: '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0', GNU: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0', IBM: '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0', ISC: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC', MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'};
// console.log(badgesArray[0]);

// module.exports = generatePage;

// promptUser()
	promptProject(portfolioData)
	.then(portfolioData => {
    console.log("portfolio data is :");
    console.log(portfolioData);
    // for(let i = 0; i < portfolioData.licenses.length; i++){
    //   if(i===0){
    //     var badgeList = [];
    //   }
    //   badgeList.push(badgesArray[portfolioData.licenses[i]]);
    // }
    // console.log(badgeList);
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  .catch(err => {
    console.log(err);
  });
  
