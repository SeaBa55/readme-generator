// function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Test](#tests)
  * [Questions](#questions)

  ## Installation

  To install required dependencies, run the following command:
  > ${data.dependencies}

  ## Usage

  ${data.repo}

  ## License

  This application is covered under the ${data.license} license.

  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, run the following command:
  > ${data.tests}

  ## Questions

  If you have any questions or issues, please contact me at ${data.email}. You can find more information of my work at https://github.com/${data.github}.

  `;
}

module.exports = generateMarkdown;
