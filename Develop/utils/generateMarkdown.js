// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // MIT License
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`;
    // No License
  } else {
    return ' ';
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
  // MIT License
  if (license === "MIT") {
    return `[${license}](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[${license}](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
    // No License
  } else {
    return 'No License';
  }
}

// A function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `
  
The application is covered under the following license: ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// A function to generate markdown for README
function generateMarkdown(response) {
return `
# ${response.title}

${renderLicenseBadge(response.license)}

## Description

${response.description}

## Table of Contents

- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Usage

${response.usage}

## License

${renderLicenseSection(response.license)}

## Contributing

${response.contributing}

## Tests

${response.test}

## Questions

Please contact me using the following links:

[GitHub](https://github.com/${response.name})

[Email: ${response.email}](mailto:${response.email})`
}

// Exports the formatted Readme
module.exports = generateMarkdown;
