// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [Licence](#licence)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Questions
  If you have any questions regarding this repo, contact me via GitHub: ${data.username}, or via email: ${data.email}
  ## Licence
  ${"This product is licenced under the " + data.licence + " licence"}

`;
}

module.exports = generateMarkdown;
