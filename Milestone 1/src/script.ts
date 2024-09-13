document.addEventListener('DOMContentLoaded', () => {
  const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
  const skillsContent = document.querySelector('.skills-content') as HTMLElement;

  toggleSkillsButton.addEventListener('click', () => {
    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
      skillsContent.style.display = 'block';
      toggleSkillsButton.textContent = 'Hide Skills';
    } else {
      skillsContent.style.display = 'none';
      toggleSkillsButton.textContent = 'Show Skills';
    }
  });
});
