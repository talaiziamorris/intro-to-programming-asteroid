var today = new Date();
var thisYear = Date().getFullYear(); 

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Talaizia Morris ${thisYear}`;
footer.append(copyright);