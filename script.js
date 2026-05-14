/* ========================= */
/* ELEMENT */
/* ========================= */

const button = document.querySelector(".open-btn");

const cover = document.querySelector(".cover");

const hero = document.querySelector(".hero");

/* ========================= */
/* OPEN INVITATION */
/* ========================= */

button.addEventListener("click", function(e){

  e.preventDefault();

  /* hide cover */
  cover.style.display = "none";

  /* show hero */
  hero.classList.add("show");

  /* unlock scroll */
  document.body.style.overflowY = "auto";

  /* START REVEAL */
  startReveal();

});

/* ========================= */
/* REVEAL SYSTEM */
/* ========================= */

function startReveal(){

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if(entry.isIntersecting){

          entry.target.classList.add("active");

        }

      });

    },

    {
      threshold:0.15
    }

  );

  reveals.forEach((reveal) => {

    observer.observe(reveal);

  });

}

/* ========================= */
/* COUNTDOWN */
/* ========================= */

const targetDate = new Date(
  "June 21, 2026 00:00:00"
).getTime();

const countdown = setInterval(function(){

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;

  if(distance < 0){

    clearInterval(countdown);

    document.getElementById("days").innerHTML = "00";

    document.getElementById("hours").innerHTML = "00";

    document.getElementById("minutes").innerHTML = "00";

    document.getElementById("seconds").innerHTML = "00";

  }

}, 1000);