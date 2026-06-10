/* ============ Mobile menu ============ */
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

/* ============ Scroll reveal ============ */
const revealEls = document.querySelectorAll("[data-reveal]");
if (revealEls.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* ============ Card glow follows cursor ============ */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  });
});

/* ============ Lead form (Web3Forms) ============ */
const leadForm = document.getElementById("lead-form");
const formStatus = document.getElementById("form-status");

if (leadForm && formStatus) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      return;
    }

    const submitBtn = leadForm.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Отправка…";
    formStatus.className = "form-status";
    formStatus.textContent = "";

    try {
      const response = await fetch(leadForm.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(leadForm),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        leadForm.reset();
        formStatus.classList.add("is-ok");
        formStatus.textContent = "Заявка отправлена — отвечу в течение рабочего дня. Спасибо!";
      } else {
        throw new Error(data.message || "Ошибка отправки");
      }
    } catch (err) {
      formStatus.classList.add("is-err");
      formStatus.textContent =
        "Не удалось отправить. Напишите в Telegram @fsyu13 или на sergeyfedorov13@yandex.ru.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

/* ============ Projects carousel ============ */
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
