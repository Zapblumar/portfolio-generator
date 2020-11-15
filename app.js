const profileDataArgs = process.argv.slice(2, process.argv.length); {
    console.log(profileDataArgs);
}
const name = profileDataArgs[0];
const Github = profileDataArgs[1];
//const [name, github] = profileDataArgs; is the same as what is above it.

const printProfileData = profileDataArgs => {
    for (let i = 0; i < profileDataArgs.length; i += 1) {
        console.log(profileDataArgs[i]);
    }

    console.log('==============');

    profileDataArgs.foreach(profileItem => console.log(profileItem));
};

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

//const generatePage = (userName, githubName) => 'name: ${userName}, Github: ${githubName}';