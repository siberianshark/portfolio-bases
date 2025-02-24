const themeToggleButton = document.querySelector('.theme-toggle-btn');
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('theme-light') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.body.classList.remove(`theme-${currentTheme}`);
  document.body.classList.add(`theme-${newTheme}`);

  localStorage.setItem('theme', newTheme);
});

// Сохранение темы при перезагрузке
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(`theme-${savedTheme}`);
});
