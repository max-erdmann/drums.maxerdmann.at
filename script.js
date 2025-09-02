document.querySelectorAll('#dropdown ul a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('check').checked = false;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const snare = document.getElementById('snare');

  snare.addEventListener('click', () => {
    snare.classList.add('pop');
    setTimeout(() => {
      snare.classList.remove('pop');
    }, 100);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const kick = document.getElementById('kick');

  kick.addEventListener('click', () => {
    kick.classList.add('pop');
    setTimeout(() => {
      kick.classList.remove('pop');
    }, 100);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const Hihat = document.getElementById('Hihat');

  Hihat.addEventListener('click', () => {
    Hihat.classList.add('pop');
    setTimeout(() => {
      Hihat.classList.remove('pop');
    }, 100);
  });
});