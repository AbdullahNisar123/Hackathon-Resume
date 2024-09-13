
document.addEventListener('DOMContentLoaded', () => {
  const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
  const skillsContent = document.querySelector('.skills-content') as HTMLElement;

  // Toggle Skills section visibility
  toggleSkillsButton.addEventListener('click', () => {
    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
      skillsContent.style.display = 'block';
      toggleSkillsButton.textContent = 'Hide Skills';
    } else {
      skillsContent.style.display = 'none';
      toggleSkillsButton.textContent = 'Show Skills';
    }
  });

  const form = document.getElementById('resume-form') as HTMLFormElement;
  const formModal = document.getElementById('form-modal') as HTMLDivElement;
  const closeModal = document.querySelector('.close') as HTMLSpanElement;

  // Show form modal when "Generate Resume" is clicked
  document.getElementById('show-form-button')?.addEventListener('click', () => {
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
