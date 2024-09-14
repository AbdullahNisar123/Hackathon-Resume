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
    const resumeUrl = document.getElementById('resume-url');
    // Set content
    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        resumeName.textContent = fullName;
        resumeNameInfo.textContent = firstName;
        // Generate URL-safe identifier
        const urlSafeName = fullName.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const uniqueUrl = `https://${urlSafeName}.vercel.app/resume`;
        resumeUrl.textContent = uniqueUrl;
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
    makeEditable(resumeName, 'first-name'); // Full name is not editable here
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
    // Copy URL to clipboard
    const shareButton = document.getElementById('share-button');
    shareButton.addEventListener('click', () => {
        if (resumeUrl.textContent) {
            navigator.clipboard.writeText(resumeUrl.textContent)
                .then(() => {
                alert('Resume URL copied to clipboard!');
            })
                .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
        }
    });
    // Handle PDF download
    const downloadPdfButton = document.getElementById('download-button');
    const skillsContent = document.querySelector('.skills-content');
    const message = document.getElementById('message');
    downloadPdfButton.addEventListener('click', () => {
        if (skillsContent && skillsContent.style.display === 'none') {
            message.textContent = 'Please click on "Show Skills" to display your skills before downloading the resume.';
            message.classList.remove('hidden');
        }
        else {
            message.classList.add('hidden');
            window.print(); // Opens the print dialog and allows saving as PDF
        }
    });
});
