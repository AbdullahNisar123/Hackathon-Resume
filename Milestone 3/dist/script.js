"use strict";
// document.addEventListener('DOMContentLoaded', () => {
//   const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
//   const skillsContent = document.querySelector('.skills-content') as HTMLElement;
//   // Toggle Skills section visibility
//   toggleSkillsButton.addEventListener('click', () => {
//     if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
//       skillsContent.style.display = 'block';
//       toggleSkillsButton.textContent = 'Hide Skills';
//     } else {
//       skillsContent.style.display = 'none';
//       toggleSkillsButton.textContent = 'Show Skills';
//     }
//   });
//   const form = document.getElementById('resume-form') as HTMLFormElement;
//   const staticResume = document.getElementById('static-resume') as HTMLDivElement;
//   const showFormButton = document.getElementById('show-form-button') as HTMLButtonElement;
//   const formModal = document.getElementById('form-modal') as HTMLDivElement;
//   const closeModal = document.querySelector('.close') as HTMLSpanElement;
//   // Show form modal when "Generate Resume" is clicked
//   showFormButton.addEventListener('click', () => {
//     formModal.style.display = 'block';
//   });
//   // Close form modal when "x" is clicked
//   closeModal.addEventListener('click', () => {
//     formModal.style.display = 'none';
//   });
//   // Handle form submission and resume generation
//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission and page refresh
//     // Get form data
//     const formData = new FormData(form);
//     // Extract data
//     const firstName = formData.get('first-name') as string;
//     const lastName = formData.get('last-name') as string;
//     const email = formData.get('email') as string;
//     const age = formData.get('age') as string;
//     const city = formData.get('city') as string;
//     const instituteName = formData.get('institute-name') as string;
//     const degreeName = formData.get('degree-name') as string;
//     const startDate = formData.get('start-date') as string;
//     const endDate = formData.get('end-date') as string;
//     const skills = formData.get('skills') as string;
//     const workExperience = formData.get('work-experience') as string;
//     // Update static resume content
//     staticResume.innerHTML = `
//       <header>
//         <img src="asset/images/profile-pic.png" alt="Profile Picture" class="profile-pic">
//         <h1>${firstName} ${lastName}</h1>
//         <p class="slogan">Turning Ideas into Reality – Reach Out Today!</p>
//         <button id="show-form-button" style="display: none;" >Generate Resume</button>
//         <button id="home-button" onclick="location.reload();">Home</button>
//       </header>
//       <section id="personal-info">
//         <h2>Personal Information</h2>
//         <p><strong>Name:</strong> ${firstName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Age:</strong> ${age}</p>
//         <p><strong>City:</strong> ${city}</p>
//       </section>
//       <section id="education">
//         <h2>Education</h2>
//         <p><strong>Institute:</strong> ${instituteName}</p>
//         <p><strong>Degree:</strong> ${degreeName}</p>
//         <p><strong>Duration:</strong> ${startDate} - ${endDate}</p>
//       </section>
//       <section id="skills">
//         <h2>Skills</h2>
//         <ul>
//              ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
//         </ul>
//       </section>
//       <section id="work-experience">
//         <h2>Work Experience</h2>
//         <p>${workExperience}</p>
//       </section>
//     `;
//     // Hide the modal after submission
//     formModal.style.display = 'none';
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsContent = document.querySelector('.skills-content');
    // Toggle Skills section visibility
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
            skillsContent.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsContent.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
    var form = document.getElementById('resume-form');
    var formModal = document.getElementById('form-modal');
    var closeModal = document.querySelector('.close');
    // Show form modal when "Generate Resume" is clicked
    (_a = document.getElementById('show-form-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        formModal.style.display = 'block';
    });
    // Close form modal when "x" is clicked
    closeModal.addEventListener('click', function () {
        formModal.style.display = 'none';
    });
    // Handle form submission and redirect to resume.html
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission and page refresh
        // Get form data
        var formData = new FormData(form);
        // Store data in localStorage
        formData.forEach(function (value, key) {
            localStorage.setItem(key, value.toString());
        });
        // Redirect to resume.html
        window.location.href = './resume.html';
    });
});
