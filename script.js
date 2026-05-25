const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yandexBlock = document.getElementById("yandex-form-block");
const yandexIframe = document.getElementById("yandex-form-iframe");
const fallbackToggle = document.getElementById("form-fallback-toggle");
const yandexToggle = document.getElementById("form-yandex-toggle");
const form = document.getElementById("feedback-form");
const status = document.getElementById("form-status");

const showFallbackForm = () => {
  if (!yandexBlock || !form) return;
  yandexBlock.classList.add("is-hidden");
  yandexBlock.hidden = true;
  form.hidden = false;
  if (yandexToggle) yandexToggle.hidden = false;
};

const showYandexForm = () => {
  if (!yandexBlock || !form) return;
  yandexBlock.classList.remove("is-hidden");
  yandexBlock.hidden = false;
  form.hidden = true;
  if (yandexToggle) yandexToggle.hidden = true;
  if (fallbackToggle) fallbackToggle.hidden = false;
};

if (fallbackToggle) {
  fallbackToggle.addEventListener("click", showFallbackForm);
}

if (yandexToggle) {
  yandexToggle.addEventListener("click", showYandexForm);
}

if (yandexIframe && fallbackToggle) {
  fallbackToggle.hidden = false;

  yandexIframe.addEventListener("error", () => {
    fallbackToggle.hidden = false;
  });

  window.setTimeout(() => {
    try {
      const doc = yandexIframe.contentDocument;
      if (doc && doc.body && doc.body.childElementCount === 0) {
        fallbackToggle.hidden = false;
      }
    } catch {
      /* cross-origin: iframe likely loaded, keep Yandex form visible */
    }
  }, 8000);
}

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent("Заявка с сайта FedorovDev");
    const body = encodeURIComponent(
      `Имя: ${name}\nКонтакт: ${contact}\n\nЗадача:\n${message}`
    );

    window.location.href = `mailto:funtiknax13@yandex.ru?subject=${subject}&body=${body}`;
    status.textContent =
      "Откроется почтовый клиент. Если не сработало — напишите в Telegram @fsyu13.";
    form.reset();
  });
}

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = [...carousel.querySelectorAll(".carousel__slide")];
  const prevBtn = carousel.querySelector("[data-carousel-prev]");
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  const dotsContainer = carousel.querySelector("[data-carousel-dots]");
  let currentIndex = 0;

  const goTo = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dotsContainer.querySelectorAll(".carousel__dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === currentIndex);
      dot.setAttribute("aria-selected", String(i === currentIndex));
    });
  };

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Проект ${i + 1}`);
    dot.setAttribute("aria-selected", String(i === 0));
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
  nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

  let touchStartX = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        goTo(currentIndex + (diff > 0 ? 1 : -1));
      }
    },
    { passive: true }
  );
}
