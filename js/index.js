var today = new Date();
var thisYear = today.getFullYear(); 
//console.log(today);//
//console.log(thisYear);//

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Talaizia Morris ${thisYear}`;
footer.append(copyright);

const skills = [
    'typing',
    'microsoft applications',
    'JavaScript',
    'HTML'
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
console.log(skillsSection);
console.log(skillsList); 

for (let listItem of skills) {
    const skill = document.createElement('li');
    skill.innerHTML = listItem;
    skillsList.append(skill);
    
    //console.log(listItem);//
};
