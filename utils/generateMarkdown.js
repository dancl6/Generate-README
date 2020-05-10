
const badges = badgesLicense => {

  if (!badgesLicense){
    return ``;
  }

  return `
  
  
  `
}

// function to generate markdown for README
function generateMarkdown(data) {
  const badgesArray = {CCO: "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)", Attribution: '![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)', Eclipse: '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)', GNU: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)', IBM: '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)', ISC: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)', MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', None: ""};
 const badgeDescriptionArray = [];
 badgeDescriptionArray["CCO"]= "Creative Commons License";
 badgeDescriptionArray["Attribution"] = "Attribution License";
 badgeDescriptionArray["Eclipse"] = "Eclipse License";
 badgeDescriptionArray["CCO"] = "GNU License";
 badgeDescriptionArray["IBM"] = "IBM License";
 badgeDescriptionArray["ISC"] = "ISC License";
 badgeDescriptionArray["MIT"] = "MIT License";
 badgeDescriptionArray["None"] = "";

const badgeId = badgesArray[data.licenses];
const badgeDescription = badgeDescriptionArray[data.licenses];
  return `# ${data.title}  

## Badges

${badgeId}

## Description

${data.description}

## Table of Contents
* [Badges](#badges)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

## License

${badgeDescription}

## Contributing

${data.contribution}

## Tests

${data.instructions}

## Questions

[User Git Hub Link](https://github.com/${data.github}/  "Git Hub Link")

User Email: ${data.email}
`;
}

module.exports = generateMarkdown;
