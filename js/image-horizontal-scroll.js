const scrollContainer = document.querySelector('.gallery');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

// Get gallery width (visible area)
const containerWidth = scrollContainer.offsetWidth;

// --- Manual Scroll with Wheel ---
scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
});

// --- Manual Next Button ---
nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += containerWidth;
  checkLoop();
});

// --- Manual Back Button ---
backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= containerWidth;
  checkLoop();
});

// --- Loop Function ---
function checkLoop() {
  if (scrollContainer.scrollLeft + containerWidth >= scrollContainer.scrollWidth) {
    // If reached end → jump to start
    scrollContainer.scrollLeft = 0;
  } else if (scrollContainer.scrollLeft <= 0) {
    // If reached start → jump to end
    scrollContainer.scrollLeft = scrollContainer.scrollWidth - containerWidth;
  }
}

// --- Auto Play ---
let autoPlay = setInterval(() => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += containerWidth;
  checkLoop();
}, 5000); // every 3s

// --- Pause autoplay on hover ---
scrollContainer.addEventListener('mouseenter', () => clearInterval(autoPlay));
scrollContainer.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += containerWidth;
    checkLoop();
  }, 5000);
});
