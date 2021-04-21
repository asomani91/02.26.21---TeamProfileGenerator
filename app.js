const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var roster = [];

const main = async () => {
  let a = ["ali, basd"];

  // Write code to use inquirer to gather information about the development team members,
  // and to create objects for each team member (using the correct classes as blueprints!)

  _questions = [
    {
      type: "list",
      name: "role",
      message: "Choose Type:",
      choices: ["Manager", "Engineer", "Intern"],
      default: "Manager",
    },
    {
      type: "input",
      name: "name",
      message: "Enter The Name",
    },
    {
      type: "input",
      name: "email",
      message: "Enter The Email",
    },
    {
      type: "input",
      name: "id",
      message: "Enter The Employee ID",
    },
    {
      type: "input",
      name: "office",
      message: "Enter The Office Numbner",
      when: (answers) => answers.role == "Manager",
    },
    {
      type: "input",
      name: "school",
      message: "Enter The School",
      when: (answers) => answers.role == "Intern",
    },
    {
      type: "input",
      name: "github",
      message: "Enter The Github Link",
      when: (answers) => answers.role == "Engineer",
    },
  ];

  for (let index = 0; index < 5; index++) {
    let response = await inquirer.prompt(_questions);

    user = null;

    if (response.role == "Engineer") {
      user = new Engineer(
        response.name,
        response.email,
        response.id,
        response.role,
        response.github
      );
    }
    if (response.role == "Manager") {
      user = new Manager(
        response.name,
        response.email,
        response.id,
        response.role,
        response.officeNumber
      );
    }
    if (response.role == "Intern") {
      user = new Intern(
        response.name,
        response.email,
        response.id,
        response.role,
        response.school
      );
    }

    // let user = new Employee(
    //   response.name,
    //   response.email,
    //   response.id,
    //   response.role
    // );
    roster.push(user);
  }

  console.log(roster);

  const data = fs.writeFileSync("output.html", render(roster));
};

main();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
