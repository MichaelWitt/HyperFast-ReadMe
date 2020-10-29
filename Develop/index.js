const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your project name?",
            name: "project"
        },
        {
            type: "input",
            message: "Please write a short, one sentence project description:",
            name: "description"
        },
        {
            type: "input",
            message: "Now please write a more detailed project description:",
            name: "detailed"
        },
        {
            type: "input",
            message: "How will you build the final product?",
            name: "build"
        },
        {
            type: "input",
            message: "What technologies will be used to create this?",
            name: "tech"
        },
        {
            type: "input",
            message: "Project License:",
            name: "license"
        },
        {
            type: "input",
            message: "Do you have any credits and people to thank for this project?",
            name: "credits"
        },
        {
            type: "input",
            message: "Please write a description for how to use the repo:",
            name: "use"
        },
        {
            type: "input",
            message: "What command should be used to install dependencies?",
            name: "dependencies"
        },
        {
            type: "input",
            message: "What command should be used to run tests?",
            name: "tests"
        },
        {
            type: "input",
            message: "How can users contribute to the repo?",
            name: "contribute"
        },
        {
            type: "input",
            message: "Do you know that you are awesome?",
            name: "awesome"
        },
    ]).then((response) => {

        let readme = `
# ${response.project}
${response.description}

## Project Details

${response.detailed}

Thanks for stopping in! I look forward to working together to make the present and future a better place.

## Build Details

Build: ${response.build}
Technologies: ${response.tech}

## Instructions

How to use the repo: ${response.use}

Command to install dependencies: ${response.dependencies}
Command to run tests: ${response.tests}

## Repository & Website

View the website at: https://${response.username.replace(/\s/g, "")}.github.io/${response.project.replace(/\s/g, "")}/
View the repository at: https://github.com/${response.username.replace(/\s/g, "")}/${response.project.replace(/\s/g, "")}/

Website Preview: ![alt text](https://${response.username.replace(/\s/g, "")}.github.io/${response.project.replace(/\s/g, "")}/Assets/Images/PUTIMAGEHERE)

## Updates

You can find project updates in the repository, highlighting what was done to create the final product.

https://github.com/${response.username.replace(/\s/g, "")}/${response.project.replace(/\s/g, "")}/commits/

## Credits & License

Credits: ${response.credits}
License: ${response.license}

Thanks! 

## Contribute

${response.contribute}

## Thanks For Visiting!

Contact me if you have any questions: ${response.email}

Come back soon :)
`

        fs.writeFile('hyperFastReadme.md', readme, err => {
            if (err) {
                throw err;
            }
        })
    })






