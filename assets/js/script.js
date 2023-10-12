// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");
const mybutton = document.getElementById("btn-back-to-top");
const modalSubmission = document.getElementById("modal-submission");
const modalDaftar = document.getElementById("modal-daftar");
const modalWebinar = document.getElementById("modal-webinar");
const modalRegistrasiWebinar = document.getElementById("modal-registrasi-webinar");

const countDownDay = document.getElementById("countDownDay");
const countDownHour = document.getElementById("countDownHour");
const countDownMinute = document.getElementById("countDownMinute");
const countDownSecond = document.getElementById("countDownSecond");

const linkLomba = {
  web: {
    registrasi: "https://forms.gle/mXDtikfPPSaTTQKS9",
    konfirmasi: "https://forms.gle/ibHMWcm9XSgDsAhf7",
	guidebook: "http://uns.id/GuideBookDesignWebBytesfest"
  },
  poster: {
    registrasi: "https://forms.gle/UTt81HTa93JUCtQBA",
    konfirmasi: "https://forms.gle/rx13jWc9JvrZ6nXC6",
	guidebook: "http://uns.id/GuideBookPosterBytesfest"
  },
  ml: {
    registrasi: "https://forms.gle/oX1z1XyFAQmKGPNM6",
    konfirmasi: "https://forms.gle/Ce5HHE9mqiykciGj6",
	guidebook: "https://drive.google.com/file/d/1MX41Hsd6AXdK8tuxxBFovbTaRvLxGMlt/view?usp=sharing"
  },
  futsal: {
    registrasi: "https://forms.gle/FTVQCFXPBQKQU2FF8",
    konfirmasi: "https://forms.gle/v9FzMJGVJ3u777n99",
	guidebook: "#"
  },
  
};

const linkSubmission = {
  batch1: "#",
  batch2: "#",
};

window.onscroll = function () {
  scrollFunction();
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.setProperty("display", "block", "important");
  } else {
    mybutton.style.setProperty("display", "none", "important");
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// init Swiper:
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  // autoplay: {
  // 	delay: 3000,
  // 	disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navigation for mobile
let hamburgerMenu = document.querySelector("#hamburger");
let navigationMenu = document.querySelector("#navigation-menu");
let navigationMenuBg = navigationMenu.querySelector("ul");

// hamburger-line
const hamburgerLine1 = hamburgerMenu.querySelector("span:nth-child(1)");
const hamburgerLine2 = hamburgerMenu.querySelector("span:nth-child(2)");
const hamburgerLine3 = hamburgerMenu.querySelector("span:nth-child(3)");

hamburgerMenu.addEventListener("click", function () {
  setTimeout(() => {
    hamburgerLine1.classList.add("hamburger-line-1");
    hamburgerLine2.classList.add("hamburger-line-2");
    hamburgerLine3.classList.add("hamburger-line-3");
  }, 50);

  navigationMenu.classList.toggle("hidden");
  navigationMenu.classList.toggle("flex");
  setTimeout(() => {
    navigationMenu.classList.toggle("opacity-0");
    navigationMenu.classList.toggle("opacity-100");
    // setTimeout(() => {
    //   navigationMenuBg.classList.toggle("opacity-100");
    // }, 50);
  }, 100);
});

const countDownDate = new Date("Nov 26, 2023 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownDay.innerHTML = ("0" + days).slice(-2);
  countDownHour.innerHTML = ("0" + hours).slice(-2);
  countDownMinute.innerHTML = ("0" + minutes).slice(-2);
  countDownSecond.innerHTML = ("0" + seconds).slice(-2);

  if (distance < 0) {
    clearInterval(x);
    countDownDay.innerHTML = "00";
    countDownHour.innerHTML = "00";
    countDownMinute.innerHTML = "00";
    countDownSecond.innerHTML = "00";
  }
}, 1000);

const closeModal = () => {
  console.log("tes modal");
  modalDaftar.classList.toggle("opacity-100");
  modalDaftar.classList.toggle("opacity-0");
  setTimeout(() => {
    modalDaftar.classList.toggle("hidden");
  }, 300);
};

document.getElementById("backdrop").addEventListener("click", closeModal);
document.getElementById("close-button").addEventListener("click", closeModal);

const closeModalSubmission = () => {
  console.log("tes modal sub");
  modalSubmission.classList.toggle("opacity-100");
  modalSubmission.classList.toggle("opacity-0");
  setTimeout(() => {
    modalSubmission.classList.toggle("hidden");
  }, 300);
};

document
  .getElementById("backdrop-submission")
  .addEventListener("click", closeModalSubmission);
document
  .getElementById("close-button-submission")
  .addEventListener("click", closeModalSubmission);

  const closeModalWebinar = () => {
	console.log("tes modal sub");
	modalWebinar.classList.toggle("opacity-100");
	modalWebinar.classList.toggle("opacity-0");
	setTimeout(() => {
	  modalWebinar.classList.toggle("hidden");
	}, 300);
  };

  document
  .getElementById("backdrop-webinar")
  .addEventListener("click", closeModalWebinar);

  const closeModalRegistrasiWebinar = () => {
	modalRegistrasiWebinar.classList.toggle("opacity-100");
	modalRegistrasiWebinar.classList.toggle("opacity-0");
	setTimeout(() => {
	  modalRegistrasiWebinar.classList.toggle("hidden");
	}, 300);
  };

  document
  .getElementById("backdrop-registrasi-webinar")
  .addEventListener("click", closeModalRegistrasiWebinar);
document
  .getElementById("close-button-registrasi-webinar")
  .addEventListener("click", closeModalRegistrasiWebinar);

function moreInfoWebinar() {
	event.preventDefault();
  
	modalWebinar.classList.toggle("hidden");
	setTimeout(() => {
	  modalWebinar.classList.toggle("opacity-0");
	  modalWebinar.classList.toggle("opacity-100");
	}, 100);
  }

function goToGuidebook(lomba) {
	event.preventDefault();
	const link = linkLomba[lomba]['guidebook']
	if(link != "#") {
		window.open(link, "_blank");
	}
	
}

function daftarLomba(lomba) {
  event.preventDefault();

  console.log(linkLomba[lomba]);
  document
    .getElementById("btnRegistrasi")
    .setAttribute("href", linkLomba[lomba]["registrasi"]);
  document
    .getElementById("btnKonfirmasi")
    .setAttribute("href", linkLomba[lomba]["konfirmasi"]);
  modalDaftar.classList.toggle("hidden");
  setTimeout(() => {
    modalDaftar.classList.toggle("opacity-0");
    modalDaftar.classList.toggle("opacity-100");
  }, 100);
}

function daftarWebinar() {
	event.preventDefault();
  
	modalRegistrasiWebinar.classList.toggle("hidden");
	setTimeout(() => {
	  modalRegistrasiWebinar.classList.toggle("opacity-0");
	  modalRegistrasiWebinar.classList.toggle("opacity-100");
	}, 100);
  }

function submissionLomba() {
  event.preventDefault();
  document
    .getElementById("btnSubmissionBatch1")
    .setAttribute("href", linkSubmission.batch1);
  document
    .getElementById("btnSubmissionBatch2")
    .setAttribute("href", linkSubmission.batch2);
  modalSubmission.classList.toggle("hidden");
  setTimeout(() => {
    modalSubmission.classList.toggle("opacity-0");
    modalSubmission.classList.toggle("opacity-100");
  }, 100);
}

// SCRIPT DI BAWAH INI UNTUK LOAD ANIMATION START

// anime-js
// loading - animation - script

loadingText = document.querySelector(".loading-value");
loadingContainer = document.querySelector(".loading-container");
loadingValue = {
  progress: 0,
};

const loadingTimeline = anime.timeline({});

anime({
  targets: loadingValue,
  progress: 100,
  easing: "easeInQuad",
  duration: 800, // loading-duration
  round: 1,
  update: () => {
    loadingText.innerHTML = loadingValue.progress;
    anime({
      targets: ".loading-line",
      width: loadingValue.progress + "%",
      duration: 0,
    });
  },
  complete: () => {
    loadingContainer.classList.add("hidden");
  },
});

const proudlyPresentContainer = document.querySelector(
  ".proudly-present-container"
);
const proudlyPresentTitle = document.querySelector(".proudly-present-title");
const proudlyPresentSubtitle = document.querySelector(
  ".proudly-present-subtitle"
);

setTimeout(() => {
  proudlyPresentContainer.classList.remove("opacity-0");
  proudlyPresentContainer.classList.add("opacity-100");
}, 900);

// proudly-present-appear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-0");
  proudlyPresentTitle.classList.add("opacity-100");
}, 900);
setTimeout(() => {
  proudlyPresentSubtitle.classList.remove("opacity-0");
  proudlyPresentSubtitle.classList.add("opacity-100");
}, 900);

// proudly-present-disappear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-100");
  proudlyPresentTitle.classList.add("opacity-0");
}, 2500);
setTimeout(() => {
  proudlyPresentSubtitle.classList.remove("opacity-100");
  proudlyPresentSubtitle.classList.add("opacity-0");
}, 2500);

setTimeout(() => {
  proudlyPresentContainer.classList.add("hidden");
}, 3200);

// bytefest-title-state
const bytesfestStartContainer = document.querySelector(
  ".bytesfest-start-container"
);
setTimeout(() => {
  bytesfestStartContainer.classList.remove("opacity-0");
  bytesfestStartContainer.classList.add("opacity-100");
}, 3200);

const backdropBg = document.querySelector(".backdrop-bg");

setTimeout(() => {
  backdropBg.classList.remove("hidden");
}, 3200);
setTimeout(() => {
  backdropBg.classList.remove("backdrop-blur-lg");
  backdropBg.classList.add("backdrop-blur-0");
}, 3500);

const startAnimationBg = document.querySelector(".start-animation-bg");
const lightBg = document.querySelector(".light-bg");
setTimeout(() => {
  startAnimationBg.classList.add("hidden");
  lightBg.classList.add("opacity-0");
}, 5500);

setTimeout(() => {
  lightBg.classList.add("hidden");
}, 6000);
