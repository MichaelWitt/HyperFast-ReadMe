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
            name: "name"
        },
        {
            type: "input",
            message: "Please write a short project description:",
            name: "description"
        },
        {
            type: "input",
            message: "What kind of license do you want for this project?",
            name: "license"
        },
        {
            type: "input",
            message: "Do you have any credits or people to thank for this project?",
            name: "credits"
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
            message: "How do users use the repo?",
            name: "use"
        },
        {
            type: "input",
            message: "How can users contribute to the repo?",
            name: "contribute"
        }
    ]).then((response) => {

        let readme = `
# ${response.name}
${response.description}

## HyperFast

Welcome to the HyperFast ReadMe Generator! 

## Project Details

Thanks for stopping in! I look forward to working together to make the present and future a better place.

## Build Details

Build Details

## Instructions

## Repository

View the repository at: https://github.com/${response.username}

<!-- Website Preview: ![alt text](https://michaelwitt.github.io/HyperFast-ReadMe/Develop/images/IMAGEHERE) -->

## Updates

You can find project updates in the repository, highlighting what was done to create the final product.

https://github.com/MichaelWitt/HyperFast-ReadMe/commits/

## Credits

${response.credits}

Thanks! 

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






