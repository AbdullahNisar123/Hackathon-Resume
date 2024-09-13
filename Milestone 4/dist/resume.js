"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from localStorage
    const firstName = localStorage.getItem('first-name');
    const lastName = localStorage.getItem('last-name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age');
    const city = localStorage.getItem('city');
    const instituteName = localStorage.getItem('institute-name');
    const degreeName = localStorage.getItem('degree-name');
    const startDate = localStorage.getItem('start-date');
    const endDate = localStorage.getItem('end-date');
    const skills = localStorage.getItem('skills');
    const workExperience = localStorage.getItem('work-experience');
    // Populate resume content
    const resumeName = document.getElementById('resume-name');
    const resumeNameInfo = document.getElementById('resume-name-info');
    const resumeEmail = document.getElementById('resume-email');
    const resumeAge = document.getElementById('resume-age');
    const resumeCity = document.getElementById('resume-city');
    const resumeInstitute = document.getElementById('resume-institute');
    const resumeDegree = document.getElementById('resume-degree');
    const resumeDuration = document.getElementById('resume-duration');
    const resumeExperience = document.getElementById('resume-experience');
    const resumeSkills = document.getElementById('resume-skills');
    // Set content
    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        resumeName.textContent = fullName;
        resumeNameInfo.textContent = firstName;
    }
    if (email)
        resumeEmail.textContent = email;
    if (age)
        resumeAge.textContent = age;
    if (city)
        resumeCity.textContent = city;
    if (instituteName)
        resumeInstitute.textContent = instituteName;
    if (degreeName)
        resumeDegree.textContent = degreeName;
    if (startDate && endDate)
        resumeDuration.textContent = `${startDate} - ${endDate}`;
    if (workExperience)
        resumeExperience.textContent = workExperience;
    // Populate skills
    if (skills) {
        const skillsArray = skills.split(',');
        skillsArray.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill.trim();
            listItem.addEventListener('click', () => {
                const newSkill = prompt('Edit Skill:', listItem.textContent || '');
                if (newSkill !== null) {
                    listItem.textContent = newSkill.trim();
                    const updatedSkills = Array.from(resumeSkills.children)
                        .map(child => child.textContent || '')
                        .filter(text => text.trim() !== '')
                        .join(',');
                    localStorage.setItem('skills', updatedSkills);
                }
            });
            resumeSkills.appendChild(listItem);
        });
    }
    // Make fields editable
    const makeEditable = (element, storageKey) => {
        element.addEventListener('click', () => {
            const newValue = prompt('Edit Value:', element.textContent || '');
            if (newValue !== null) {
                element.textContent = newValue;
                localStorage.setItem(storageKey, newValue);
            }
        });
    };
    makeEditable(resumeName, 'first-name'); // Assuming full name is split into first and last names in localStorage
    makeEditable(resumeNameInfo, 'first-name');
    makeEditable(resumeEmail, 'email');
    makeEditable(resumeAge, 'age');
    makeEditable(resumeCity, 'city');
    makeEditable(resumeInstitute, 'institute-name');
    makeEditable(resumeDegree, 'degree-name');
    makeEditable(resumeExperience, 'work-experience');
    // Make duration editable
    resumeDuration.addEventListener('click', () => {
        const newDuration = prompt('Edit Duration:', resumeDuration.textContent || '');
        if (newDuration !== null) {
            resumeDuration.textContent = newDuration;
            const [newStartDate, newEndDate] = newDuration.split(' - ');
            localStorage.setItem('start-date', newStartDate.trim());
            localStorage.setItem('end-date', newEndDate.trim());
        }
    });
});
