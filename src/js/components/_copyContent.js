document?.querySelector('.copy-content').addEventListener('click', () => {
  const textContent = document.querySelector('.copy-content').innerText;
  navigator.clipboard.writeText(textContent);
})
