function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://opensource.org/licenses/${license})`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions or concerns, please contact me at ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
