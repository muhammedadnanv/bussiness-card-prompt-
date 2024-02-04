// script.js

// Function to create and style the business card
function createBusinessCard(name, title, github, linkedin, facebook, skills, email, phone) {
    const businessCard = document.createElement('div');
    businessCard.id = 'business-card';

    const htmlContent = `
        <h1 id="name">${name}</h1>
        <p id="title">${title}</p>
        <div id="links">
            <a href="${github}" target="_blank">Github</a>
            <a href="${linkedin}" target="_blank">LinkedIn</a>
            <a href="${facebook}" target="_blank">Facebook</a>
        </div>
        <div id="skills">
            <p>SKILLS</p>
            ${skills.map(skill => `<div class="skill" data-name="${skill.name}"><span class="percentage">${skill.percentage}</span></div>`).join('')}
        </div>
        <div id="contact">
            <p>CONTACT</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
        </div>
    `;

    businessCard.innerHTML = htmlContent;
    document.body.appendChild(businessCard);
}

// Prompt for business card information
const name = prompt("Enter your name:");
const title = prompt("Enter your title:");
const github = prompt("Enter your Github URL:");
const linkedin = prompt("Enter your LinkedIn URL:");
const facebook = prompt("Enter your Facebook URL:");

const skills = [];
for (let i = 0; i < 3; i++) {
    const skillName = prompt(`Enter skill ${i + 1} name:`);
    const skillPercentage = prompt(`Enter skill ${i + 1} percentage:`);
    skills.push({ name: skillName, percentage: skillPercentage });
}

const email = prompt("Enter your email:");
const phone = prompt("Enter your phone number:");

// Call the function to create the business card
createBusinessCard(name, title, github, linkedin, facebook, skills, email, phone);
