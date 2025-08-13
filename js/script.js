function scrollToFooter() { //Scroll Down
  const targetY = document.getElementById("footer").getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 2000; // 3 seconds
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // [0, 1]

    const ease = easeOutCubic(progress);
    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  requestAnimationFrame(animate);
}

function scrollToTop() { //Scroll to top
  const duration = 2000; // 3 seconds
  const startY = window.scrollY;
  const startTime = performance.now();

  function animate(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = easeOutCubic(progress);
    window.scrollTo(0, startY * (1 - ease));

    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  requestAnimationFrame(animate);
}

function changeButtonText(buttonId) { //changeButton
    const button = document.getElementById(buttonId);

    if (button.innerText === 'Say Hi') {
      button.innerText = 'Bonjour!';
    } 
    else if (button.innerText === 'Bonjour!') {
      button.innerText = 'Halo';
    }  
    else if (button.innerText === 'Halo') {
          button.innerText = 'Hola';
    }
    else if (button.innerText === 'Hola') {
              button.innerText = 'Say Hi';
    }
    
    }


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

// Darkmode
function toggleDarkMode() {
  const html = document.documentElement
  const button = document.getElementById("darkBtn")
  const isDark = html.classList.toggle('dark')
  localStorage.theme = isDark ? 'dark' : 'light'

  if(button.innerText === '☀️') {
    button.innerText = '🌑'
  }
  else if (button.innerText === '🌑') {
    button.innerText = '☀️'
  }

}

const audio = document.getElementById('audioPlayer');
const image = document.getElementById('songImage');

audio.addEventListener('play', () => {
  image.classList.add('spin-slow');
  image.classList.remove('paused');
});

audio.addEventListener('pause', () => {
  image.classList.add('paused');
});

audio.addEventListener('ended', () => {
  image.classList.remove('spin-slow', 'paused');
});