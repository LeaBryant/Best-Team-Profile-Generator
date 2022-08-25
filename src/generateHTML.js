const team = require('../index');
var cards = "";

const renderCards = team => {
    for (i=0; i<team.length; i++) {
        if(team[i].getRole()=== 'Manager') {
            cards += `<!--card-->
            <div class="card text-white bg-primary mb-3" style="width: 15rem;">
                <div class="card-header">${team[i].name}</div>
                <div class="card-header">${team[i].getRole()}</div>
                    <div class="card-body">
                        <p class="card-text">ID: ${team[i].employeeID}</p>
                        <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></p>
                        <p class="card-text">Office Number: ${team[i].officeNumber}</p>
                    </div>
            </div>
            `
        }
        else if (team[i].getRole()=== 'Engineer') {
            cards +=  `<!--card-->
            <div class="card text-white bg-primary mb-3" style="width: 15rem;">
                <div class="card-header">${team[i].name}</div>
                <div class="card-header">${team[i].getRole()}</div>
                    <div class="card-body">
                        <p class="card-text">ID: ${team[i].employeeID}</p>
                        <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></p>
                        <p class="card-text">GitHub username: <a href="https://github.com/${team[i].gitHubUsername}" target="_blank">${team[i].gitHubUsername}</a></p>
                    </div>
            </div>
          `
        }
        else {
            cards += `<!--card-->
            <div class="card text-white bg-primary mb-3" style="width: 15rem;">
                <div class="card-header">${team[i].name}</div>
                <div class="card-header">${team[i].getRole()}</div>
                    <div class="card-body">
                        <p class="card-text">ID: ${team[i].employeeID}</p>
                        <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></p>
                        <p class="card-text">School: ${team[i].school}</p>
                    </div>
            </div>
          `
        }
        }
        return cards;
    }

const generateHTML = data => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/assets/style.css" /> 
    <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${renderCards(data)}
        </main>
    </body>
    </html>`
}

module.exports = generateHTML;