// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#licesnse)
  * [Test](#tests)
  * [Questions](#questions)

  ## Instalation

  To install required dependencies, run the following command:
  > ${data.dependencies}

  ## Usage Description

  ${data.repo}

  ## License
  
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  https://img.shields.io/github/license/<Github-Username>/<Repository>

  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, run the following command:
  > ${data.tests}

  ## Questions

  If you have any questions or issues, please contact me at ${data.email}. You can find more information of my work at ${data.github}.

  `;
}

module.exports = generateMarkdown;
