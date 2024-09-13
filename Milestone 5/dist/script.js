"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    const toggleSkillsButton = document.getElementById('toggleSkills');
    const skillsContent = document.querySelector('.skills-content');
    // Toggle Skills section visibility
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
            skillsContent.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsContent.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
    const form = document.getElementById('resume-form');
    const formModal = document.getElementById('form-modal');
    const closeModal = document.querySelector('.close');
    // Show form modal when "Generate Resume" is clicked
    (_a = document.getElementById('show-form-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        formModal.style.display = 'block';
    });
    // Close form modal when "x" is clicked
    closeModal.addEventListener('click', () => {
        formModal.style.display = 'none';
    });
    // Handle form submission and redirect to resume.html
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        // Get form data
        const formData = new FormData(form);
        // Store data in localStorage
        formData.forEach((value, key) => {
            localStorage.setItem(key, value.toString());
        });
        // Redirect to resume.html
        window.location.href = './resume.html';
    });
});
