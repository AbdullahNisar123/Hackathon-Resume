"use strict";
// document.addEventListener('DOMContentLoaded', () => {
//     const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
//     const skillsContent = document.querySelector('.skills-content') as HTMLElement;
//     toggleSkillsButton.addEventListener('click', () => {
//       if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
//         skillsContent.style.display = 'block';
//         toggleSkillsButton.textContent = 'Hide Skills';
//       } else {
//         skillsContent.style.display = 'none';
//         toggleSkillsButton.textContent = 'Show Skills';
//       }
//     });
//   });
//   document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('resume-form') as HTMLFormElement;
//     const staticResume = document.getElementById('static-resume') as HTMLDivElement;
//     const showFormButton = document.getElementById('show-form-button') as HTMLButtonElement;
//     const homeButton = document.getElementById('home-button') as HTMLButtonElement;
//     const formModal = document.getElementById('form-modal') as HTMLDivElement;
//     const closeModal = document.querySelector('.close') as HTMLSpanElement;
//     const profilePic = document.querySelector('.profile-pic') as HTMLImageElement;
//     const fullNameDisplay = document.createElement('h1');
//     // Show form modal when "Generate New Resume" is clicked
//     showFormButton.addEventListener('click', () => {
//       formModal.style.display = 'block';
//     });
//     // Close form modal when "x" is clicked
//     closeModal.addEventListener('click', () => {
//       formModal.style.display = 'none';
//     });
//     // Refresh the page when "Home" button is clicked
//     homeButton.addEventListener('click', () => {
//       location.reload(); // Refreshes the page
//     });
//     // Handle form submission and resume generation
//     form.addEventListener('submit', (event) => {
//       event.preventDefault(); // Prevent form submission and page refresh
//       // Get form data
//       const formData = new FormData(form);
//       // Extract data
//       const firstName = formData.get('first-name') as string;
//       const lastName = formData.get('last-name') as string;
//       const email = formData.get('email') as string;
//       const age = formData.get('age') as string;
//       const city = formData.get('city') as string;
//       const education = formData.get('education') as string;
//       const workExperience = formData.get('work-experience') as string;
//       const skills = formData.get('skills') as string;
//       // Update profile picture and name display
//       fullNameDisplay.textContent = `${firstName} ${lastName}`;
//       profilePic.insertAdjacentElement('afterend', fullNameDisplay);
//       // Update static resume content
//       staticResume.innerHTML = `
//         <header>
//           <img src="asset/images/profile-pic.png" alt="Profile Picture" class="profile-pic">
//           <h1>${firstName} ${lastName}</h1>
//           <p class="slogan">Turning Ideas into Reality – Reach Out Today!</p>
//           <button id="home-button">Home</button>
//         </header>
//         <section id="personal-info">
//           <h2>Personal Information</h2>
//           <p><strong>Name:</strong> ${firstName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Age:</strong> ${age}</p>
//           <p><strong>City:</strong> ${city}</p>
//         </section>
//         <section id="education">
//           <h2>Education</h2>
//           <p>${education}</p>
//         </section>
//         <section id="skills">
//           <h2>Skills</h2>
//           <ul>
//             ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
//           </ul>
//         </section>
//         <section id="work-experience">
//           <h2>Work Experience</h2>
//           <p>${workExperience}</p>
//         </section>
//       `;
//       // Hide the modal after submission
//       formModal.style.display = 'none';
//       // Reattach event listener to the Home button
//       document.getElementById('home-button')?.addEventListener('click', () => {
//         location.reload(); // Refresh the page
//       });
//     });
//   });
