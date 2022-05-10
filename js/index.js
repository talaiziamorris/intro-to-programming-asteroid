var today = new Date();
var thisYear = today.getFullYear(); 
//console.log(today);//
//console.log(thisYear);//

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
    //console.log(skillsList);
};

//lesson 4-3
messageForm = document.getElementsByName('leave_message')[0];
//console.log(messageForm);

//create submit button for message form
messageForm.addEventListener('submit', myFunction => {
    //console.log('event listener working');
    myFunction.preventDefault();
    const name = myFunction.target.name.value;
    //console.log(name);
    const email =  myFunction.target.email.value;
    //console.log(email);
    const message = myFunction.target.message.value;
    //console.log(message);

    //console.log('3 variables successfully created');

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
