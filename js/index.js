var today = new Date();
var thisYear = today.getFullYear(); 


const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Talaizia Morris ${thisYear}`;
footer.append(copyright);

const skills = [
    'Typing',
    'Microsoft Applications',
    'JavaScript',
    'HTML',
    'CSS'
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');


for (let listItem of skills) {
    const skill = document.createElement('li');
    skill.innerHTML = listItem;
    skillsList.append(skill);
    
};

//lesson 4-3
messageForm = document.getElementsByName('leave_message')[0];


//create submit button for message form
messageForm.addEventListener('submit', myFunction => {
    myFunction.preventDefault();
    const name = myFunction.target.name.value;
    const email =  myFunction.target.email.value;
    const message = myFunction.target.message.value;

    //Display messages in list
    const messageSection = document.getElementById('message');
    const messageList =  messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto: ${email}">${name}<a/>`
    console.log(newMessage);
    messageList.appendChild(newMessage);

    const span = document.createElement('span');
    span.textContent = message;
    messageList.appendChild(span);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        const ul = entry.parentNode;
        ul.removeChild(entry);

    });

    messageList.appendChild(removeButton);
    messageForm.reset();
});

var githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/talaizamorris/repos');
githubRequest.send();

githubRequest.addEventListener('load', function() {
    const repositories = JSON.parse(this.response);
    const projectSection = document.getElementById(projects);
    const projectList = projectSection.querySelector('ul');
        for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement('li');
        project.innerHTML = repositories[i];
        projectsList.appendChild(project);
    }
});


