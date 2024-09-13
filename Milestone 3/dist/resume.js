"use strict";
document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from localStorage
    var firstName = localStorage.getItem('first-name');
    var lastName = localStorage.getItem('last-name');
    var email = localStorage.getItem('email');
    var age = localStorage.getItem('age');
    var city = localStorage.getItem('city');
    var instituteName = localStorage.getItem('institute-name');
    var degreeName = localStorage.getItem('degree-name');
    var startDate = localStorage.getItem('start-date');
    var endDate = localStorage.getItem('end-date');
    var skills = localStorage.getItem('skills');
    var workExperience = localStorage.getItem('work-experience');
    // Populate resume content
    var resumeName = document.getElementById('resume-name');
    var resumeNameInfo = document.getElementById('resume-name-info');
    var resumeEmail = document.getElementById('resume-email');
    var resumeAge = document.getElementById('resume-age');
    var resumeCity = document.getElementById('resume-city');
    var resumeInstitute = document.getElementById('resume-institute');
    var resumeDegree = document.getElementById('resume-degree');
    var resumeDuration = document.getElementById('resume-duration');
    var resumeExperience = document.getElementById('resume-experience');
    var resumeSkills = document.getElementById('resume-skills');
    // Set content
    if (firstName && lastName) {
        var fullName = "".concat(firstName, " ").concat(lastName);
        resumeName.textContent = fullName;
        resumeNameInfo.textContent = "".concat(firstName);
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
        resumeDuration.textContent = "".concat(startDate, " - ").concat(endDate);
    if (workExperience)
        resumeExperience.textContent = workExperience;
    // Populate skills
    if (skills) {
        var skillsArray = skills.split(',');
        skillsArray.forEach(function (skill) {
            var listItem = document.createElement('li');
            listItem.textContent = skill.trim();
            resumeSkills.appendChild(listItem);
        });
    }
});
