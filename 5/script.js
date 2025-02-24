const themeToggleButton = document.querySelector('.theme-toggle-btn');
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('theme-light') ? 'theme-light' : 'theme-dark';
  const newTheme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
  document.body.classList.replace(currentTheme, newTheme);
});
