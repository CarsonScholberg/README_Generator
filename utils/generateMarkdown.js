// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let value;

  if(license == "GNU"){
    value = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'MIT'){
    value = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'Apache'){
    value = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    value = 'No License provided.'
  }
  return value;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderGithubLink(github) {
  let user;

  user = `[![Generic Badge](https://img.shields.io/badge/Username-${github}-green.svg)](https://github.com/${github})`
  return user
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license)
  let userBadge = renderGithubLink(data.github)
  return `# ${data.title}

${userBadge} ${licenseBadge}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.contributing}

## License

${licenseBadge}

## Tests

${data.test}

## Questions

Any questions or concerns please contact me at:

${data.email}

${userBadge}

---

© 2021 Carson Scholberg Services, LLC, Inc. brand. Confidential and Proprietary. All Rights Reserved.

![Nice Picture](https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg' "Pikachu")
`;
}

module.exports = generateMarkdown;