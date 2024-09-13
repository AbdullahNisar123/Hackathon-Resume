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
  const resumeName = document.getElementById('resume-name') as HTMLHeadingElement;
  const resumeNameInfo = document.getElementById('resume-name-info') as HTMLSpanElement;
  const resumeEmail = document.getElementById('resume-email') as HTMLSpanElement;
  const resumeAge = document.getElementById('resume-age') as HTMLSpanElement;
  const resumeCity = document.getElementById('resume-city') as HTMLSpanElement;
  const resumeInstitute = document.getElementById('resume-institute') as HTMLSpanElement;
  const resumeDegree = document.getElementById('resume-degree') as HTMLSpanElement;
  const resumeDuration = document.getElementById('resume-duration') as HTMLSpanElement;
  const resumeExperience = document.getElementById('resume-experience') as HTMLParagraphElement;
  const resumeSkills = document.getElementById('resume-skills') as HTMLUListElement;

  // Set content
  if (firstName && lastName) {
    const fullName = `${firstName} ${lastName}`;
    resumeName.textContent = fullName;
    resumeNameInfo.textContent = firstName;
  }

  if (email) resumeEmail.textContent = email;
  if (age) resumeAge.textContent = age;
  if (city) resumeCity.textContent = city;
  if (instituteName) resumeInstitute.textContent = instituteName;
  if (degreeName) resumeDegree.textContent = degreeName;
  if (startDate && endDate) resumeDuration.textContent = `${startDate} - ${endDate}`;
  if (workExperience) resumeExperience.textContent = workExperience;

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
                                     .map(child => (child as HTMLLIElement).textContent || '')
                                     .filter(text => text.trim() !== '')
                                     .join(',');
          localStorage.setItem('skills', updatedSkills);
        }
      });
      resumeSkills.appendChild(listItem);
    });
  }

  // Make fields editable
  const makeEditable = (element: HTMLElement, storageKey: string) => {
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
