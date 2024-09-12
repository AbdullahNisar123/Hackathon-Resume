"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsContent = document.querySelector('.skills-content');
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
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var staticResume = document.getElementById('static-resume');
    var showFormButton = document.getElementById('show-form-button');
    var homeButton = document.getElementById('home-button');
    var formModal = document.getElementById('form-modal');
    var closeModal = document.querySelector('.close');
    var profilePic = document.querySelector('.profile-pic');
    var fullNameDisplay = document.createElement('h1');
    // Show form modal when "Generate New Resume" is clicked
    showFormButton.addEventListener('click', function () {
        formModal.style.display = 'block';
    });
    // Close form modal when "x" is clicked
    closeModal.addEventListener('click', function () {
        formModal.style.display = 'none';
    });
    // Refresh the page when "Home" button is clicked
    homeButton.addEventListener('click', function () {
        location.reload(); // Refreshes the page
    });
    // Handle form submission and resume generation
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault(); // Prevent form submission and page refresh
        // Get form data
        var formData = new FormData(form);
        // Extract data
        var firstName = formData.get('first-name');
        var lastName = formData.get('last-name');
        var email = formData.get('email');
        var age = formData.get('age');
        var city = formData.get('city');
        var education = formData.get('education');
        var workExperience = formData.get('work-experience');
        var skills = formData.get('skills');
        // Update profile picture and name display
        fullNameDisplay.textContent = "".concat(firstName, " ").concat(lastName);
        profilePic.insertAdjacentElement('afterend', fullNameDisplay);
        // Update static resume content
        staticResume.innerHTML = "\n      <header>\n        <img src=\"asset/images/profile-pic.png\" alt=\"Profile Picture\" class=\"profile-pic\">\n        <h1>".concat(firstName, " ").concat(lastName, "</h1>\n        <p class=\"slogan\">Turning Ideas into Reality \u2013 Reach Out Today!</p>\n        <button id=\"home-button\">Home</button>\n      </header>\n      <section id=\"personal-info\">\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ").concat(firstName, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Age:</strong> ").concat(age, "</p>\n        <p><strong>City:</strong> ").concat(city, "</p>\n      </section>\n      <section id=\"education\">\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n      </section>\n      <section id=\"skills\">\n        <h2>Skills</h2>\n        <ul>\n          ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n      </section>\n      <section id=\"work-experience\">\n        <h2>Work Experience</h2>\n        <p>").concat(workExperience, "</p>\n      </section>\n    ");
        // Hide the modal after submission
        formModal.style.display = 'none';
        // Reattach event listener to the Home button
        (_a = document.getElementById('home-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            location.reload(); // Refresh the page
        });
    });
});
