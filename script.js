const openBtn = document.getElementById('openBtn');
const cover = document.querySelector('.cover');
const body = document.body;

/* ---------------------------
   OPEN COVER
---------------------------- */
function openInvitation() {
  body.classList.remove('lock-scroll');
  cover.classList.add('hide');

  // biar reveal section langsung siap setelah cover hilang
  setTimeout(() => {
    revealOnScroll();
  }, 50);
}

openBtn.addEventListener('click', openInvitation);

/* ---------------------------
   COUNTDOWN
---------------------------- */
const targetDate = new Date('2026-06-21T08:00:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(0, targetDate - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================
   REVEAL
========================= */

const reveals =
document.querySelectorAll('.reveal');

function revealOnScroll(){

    const triggerBottom =
    window.innerHeight * 0.88;

    reveals.forEach((element) => {

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < triggerBottom){

            element.classList.add('active');

        }

    });

}

window.addEventListener(
    'scroll',
    revealOnScroll
);

/* LOAD */

window.addEventListener('load', () => {

    setTimeout(() => {

        revealOnScroll();

    }, 200);

});

/* ---------------------------
   COVER INTRO ANIMATION
---------------------------- */
window.addEventListener('load', () => {
  const coverReveal = document.querySelectorAll('.cover .reveal');

  coverReveal.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('active');
    }, index * 180);
  });

  revealOnScroll();
});

/* =========================================
DATE COUNTER
========================================= */

const dateNumber =
document.getElementById("dateNumber");

let current = 14;

const target = 21;

function startCounter(){

    const counter = setInterval(() => {

        if(current < target){

            current++;

            dateNumber.textContent =
            current;

            /* restart animation */

            dateNumber.style.animation =
            "none";

            dateNumber.offsetHeight;

            dateNumber.style.animation =
            "pulseDate .45s ease";

        }else{

            clearInterval(counter);

        }

    }, 250);

}

/* START PAS SECTION MASUK */

const section4 =
document.querySelector(".section4");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const sectionTop =
    section4.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100
    && !counterStarted){

        counterStarted = true;

        startCounter();

    }

});