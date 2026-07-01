(function () {
  const LANG_KEY = "lang";

  const T = {
    ru: {
      "page.title": "Фёдоров Сергей — Python backend и full-stack разработка веб-приложений и SaaS | FedorovDev",
      "page.desc": "Фёдоров Сергей (FedorovDev) — Python-разработчик. Backend и веб-приложения на Django, FastAPI и DRF, фронтенд на Vue, PostgreSQL, Docker и AI-интеграции. Разработка веб-сервисов и SaaS под ключ — от идеи до продакшена.",
      skip: "К проектам",
      menu: "Меню",
      "nav.about": "Обо мне",
      "nav.services": "Услуги",
      "nav.projects": "Проекты",
      "nav.stack": "Стек",
      "nav.process": "Процесс",
      "nav.faq": "Вопросы",
      "nav.cta": "Обсудить проект →",
      "hero.h1": 'Веб-сервисы и <span class="hl">SaaS</span>, которые работают в продакшене',
      "hero.lead": "Я <strong>Фёдоров Сергей</strong> — Python-разработчик. Проектирую и собираю backend, API и веб-приложения под задачу: от <strong>Django</strong> и <strong>FastAPI</strong> до фронтенда на <strong>Vue</strong>, баз данных и Docker. Довожу продукт от идеи до запуска и поддерживаю после релиза.",
      "hero.cta": "Обсудить проект",
      "hero.projects": "Смотреть проекты",
      "spec.dt.status": "Статус",
      "spec.dd.status": '<span class="on">●</span> открыт к проектам',
      "spec.dt.focus": "Фокус",
      "spec.dt.stack": "Стек",
      "spec.dt.format": "Формат",
      "spec.dd.format": "удалённо / гибрид",
      "spec.dt.flagship": "Флагман",
      "about.title": "Обо мне",
      "about.p1": "Python-разработчик полного цикла: <strong>требования → архитектура → код → запуск → поддержка</strong>. Начинал с Django и DRF, сейчас одинаково уверенно собираю сервисы на <strong>FastAPI</strong> и фронтенд на <strong>Vue 3</strong>. Пишу чистый SQL, проектирую модели данных, разворачиваю в Docker и сопровождаю продукт после релиза.",
      "about.p2": 'Мой флагманский проект — <a href="https://airunningcoach.pro/" target="_blank" rel="noopener noreferrer">airunningcoach.pro</a>: SaaS для бегунов на FastAPI + Vue с разбором FIT-файлов тренировок, аналитикой дистанции и темпа, целями и <strong>AI-тренером на базе OpenAI</strong>. От схемы базы данных до продакшен-деплоя в Docker — сделано в одиночку.',
      "about.h.cycle.label": "Цикл работы",
      "about.h.cycle.val": "Требования → код → запуск → поддержка",
      "about.h.infra.label": "Данные и инфра",
      "services.title": "Что я делаю",
      "services.sub": "Веб-сервисы разного уровня: от backend и API до готового SaaS с современным интерфейсом, биллингом и AI.",
      "s1.h": "Backend и API",
      "s1.p": "Django, FastAPI, DRF. REST API, авторизация и роли, бизнес-логика, фоновые задачи (Celery, APScheduler), интеграции внешних сервисов и платежей.",
      "s2.h": "Веб-приложения и SaaS под ключ",
      "s2.p": "От прототипа до запуска: backend + фронтенд на Vue или Django-шаблонах, личные кабинеты, подписки, админка и деплой в Docker.",
      "s3.h": "AI-интеграции и автоматизация",
      "s3.p": "Подключение OpenAI и LLM в продукт: ассистенты, аналитика, генерация и обработка данных. Автоматизация рутинных процессов.",
      "s4.h": "Доработка и поддержка",
      "s4.p": "Развитие функционала, рефакторинг и сопровождение существующих проектов на Django и FastAPI.",
      "projects.title": "Проекты",
      "projects.sub": "Примеры реализованных веб-приложений — от продакшен-SaaS до пет-проектов.",
      "p1.tag": "Продакшн · SaaS · FastAPI / Vue",
      "p1.p": "SaaS для бегунов: загрузка тренировок из FIT-файлов, аналитика дистанции, темпа и объёма, цели и персональные рекомендации от AI-тренера на базе OpenAI.",
      "p1.link": "Открыть сайт →",
      "p2.tag": "Пет-проект · Django",
      "p2.p": "Веб-сервис с математическими задачами: каталог заданий, рейтинг пользователей, регистрация и авторизация.",
      "p2.link": "Открыть сайт →",
      "p3.tag": "Пет-проект · Django",
      "p3.h": "«Ананас» — социальная сеть",
      "p3.p": "Социальный веб-проект: профили пользователей, лента, регистрация и авторизация.",
      "p3.link": "Открыть сайт →",
      "p4.tag": "Продакшн · NDA · Django",
      "p4.h": "Электронный журнал",
      "p4.p": "Внутренняя веб-система: авторизация, роли пользователей, отчёты и администрирование.",
      "p4.nda": "Ссылка не публикуется по NDA",
      "p5.tag": "Внутренний инструмент · FastAPI / React · LLM",
      "p5.p": "Инструмент отдела кадров: LLM-скоринг резюме под вакансию с обоснованием и сбор рыночных данных — вакансии и зарплатные вилки с HH и SuperJob с историей.",
      "stack.title": "Технологический стек",
      "stack.sub": "Инструменты, которые использую в продакшене.",
      "stack.data": "Данные и инфраструктура",
      "stack.ai": "AI и тестирование",
      "process.title": "Как строится работа",
      "pr1.h": "Бриф",
      "pr1.p": "Цели, роли пользователей, интеграции. Оценка сроков и этапов.",
      "pr2.h": "Архитектура",
      "pr2.p": "Модели данных, API, прототип экранов при необходимости.",
      "pr3.h": "Разработка",
      "pr3.p": "Итерации с демо: backend, фронтенд, тесты критичных сценариев.",
      "pr4.h": "Запуск",
      "pr4.p": "Деплой в Docker, документация, передача доступов и поддержка.",
      "faq.title": "Частые вопросы",
      "faq1.q": "На каких технологиях вы работаете?",
      "faq1.a": "Backend на Python: Django, DRF и FastAPI. Фронтенд на Vue 3 или Django-шаблонах. Базы данных — PostgreSQL, инфраструктура — Docker, Nginx и CI/CD. Подключаю AI через OpenAI API.",
      "faq2.q": "Делаете только backend или фронтенд тоже?",
      "faq2.a": "И то, и другое. Могу закрыть весь цикл: API и бизнес-логику на backend плюс интерфейс на Vue 3 или Django-шаблонах с базовым JavaScript.",
      "faq3.q": "Можете подключить AI к продукту?",
      "faq3.a": "Да. Интегрирую OpenAI и другие LLM — ассистенты, аналитика, обработка данных. Рабочий пример — AI-тренер в сервисе airunningcoach.pro.",
      "faq4.q": "Беретесь за доработку готового проекта?",
      "faq4.a": "Да. Развиваю, рефакторю и сопровождаю существующие проекты на Django и FastAPI.",
      "faq5.q": "Как оценивается стоимость?",
      "faq5.a": "После брифа — фиксированная стоимость по этапам. Обсуждаем прозрачно, без скрытых доплат.",
      "contacts.title": "Расскажите о задаче",
      "contacts.sub": "Форма или Telegram. Отвечу в течение рабочего дня.",
      "contacts.card": "// Контакты",
      "contacts.name": "Фёдоров Сергей",
      "contacts.form": "// Заявка",
      "contacts.name.label": "Имя",
      "contacts.name.ph": "Как к вам обращаться",
      "contacts.contact.label": "Контакт",
      "contacts.contact.ph": "Email, телефон или Telegram",
      "contacts.task.label": "Задача",
      "contacts.task.ph": "Тип проекта: сайт, API, SaaS, доработка…",
      "contacts.submit": "Отправить заявку",
      "contacts.alt": 'Или сразу в <a href="https://t.me/fsyu13" target="_blank" rel="noopener noreferrer">Telegram</a> · <a href="mailto:sergeyfedorov13@yandex.ru">на почту</a>',
      "form.sending": "Отправка…",
      "form.ok": "Заявка отправлена — отвечу в течение рабочего дня. Спасибо!",
      "form.err": "Не удалось отправить. Напишите в Telegram @fsyu13 или на sergeyfedorov13@yandex.ru.",
      "footer.text": "© 2026 FedorovDev — Фёдоров Сергей. Python backend & full-stack: Django, FastAPI, Vue, разработка веб-сервисов и SaaS.",
    },
    en: {
      "page.title": "Sergey Fedorov — Python backend & full-stack web development and SaaS | FedorovDev",
      "page.desc": "Sergey Fedorov (FedorovDev) — Python developer. Backend and web applications with Django, FastAPI and DRF, Vue frontend, PostgreSQL, Docker and AI integrations. Full-cycle web services and SaaS — from idea to production.",
      skip: "To projects",
      menu: "Menu",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.stack": "Stack",
      "nav.process": "Process",
      "nav.faq": "FAQ",
      "nav.cta": "Discuss a project →",
      "hero.h1": 'Web services and <span class="hl">SaaS</span> that run in production',
      "hero.lead": "I'm <strong>Sergey Fedorov</strong> — Python developer. I design and build backends, APIs and web applications tailored to your needs: from <strong>Django</strong> and <strong>FastAPI</strong> to <strong>Vue</strong> frontends, databases and Docker. I take products from idea to launch and support them after release.",
      "hero.cta": "Discuss a project",
      "hero.projects": "See projects",
      "spec.dt.status": "Status",
      "spec.dd.status": '<span class="on">●</span> open to projects',
      "spec.dt.focus": "Focus",
      "spec.dt.stack": "Stack",
      "spec.dt.format": "Format",
      "spec.dd.format": "remote / hybrid",
      "spec.dt.flagship": "Flagship",
      "about.title": "About me",
      "about.p1": "Full-cycle Python developer: <strong>requirements → architecture → code → launch → support</strong>. Started with Django and DRF, now equally confident building services with <strong>FastAPI</strong> and frontends with <strong>Vue 3</strong>. I write clean SQL, design data models, deploy with Docker and maintain products after release.",
      "about.p2": 'My flagship project — <a href="https://airunningcoach.pro/" target="_blank" rel="noopener noreferrer">airunningcoach.pro</a>: a SaaS for runners on FastAPI + Vue with FIT-file workout parsing, distance and pace analytics, goals and an <strong>AI coach powered by OpenAI</strong>. From database schema to production Docker deploy — built solo.',
      "about.h.cycle.label": "Work cycle",
      "about.h.cycle.val": "Requirements → code → launch → support",
      "about.h.infra.label": "Data & infra",
      "services.title": "What I do",
      "services.sub": "Web services of any complexity: from backend and APIs to production-ready SaaS with a modern UI, billing and AI.",
      "s1.h": "Backend & API",
      "s1.p": "Django, FastAPI, DRF. REST APIs, authentication and roles, business logic, background tasks (Celery, APScheduler), third-party integrations and payments.",
      "s2.h": "Web apps & SaaS end-to-end",
      "s2.p": "From prototype to launch: backend + Vue or Django-template frontend, user dashboards, subscriptions, admin panel and Docker deployment.",
      "s3.h": "AI integrations & automation",
      "s3.p": "Connecting OpenAI and other LLMs into your product: assistants, analytics, data generation and processing. Automation of routine workflows.",
      "s4.h": "Maintenance & support",
      "s4.p": "Feature development, refactoring and ongoing maintenance for existing Django and FastAPI projects.",
      "projects.title": "Projects",
      "projects.sub": "Selected web applications — from production SaaS to side projects.",
      "p1.tag": "Production · SaaS · FastAPI / Vue",
      "p1.p": "SaaS for runners: FIT-file workout uploads, distance, pace and volume analytics, goals and personalised recommendations from an AI coach powered by OpenAI.",
      "p1.link": "Open site →",
      "p2.tag": "Side project · Django",
      "p2.p": "Math task web service: task catalogue, user ranking, registration and authentication.",
      "p2.link": "Open site →",
      "p3.tag": "Side project · Django",
      "p3.h": "«Ananás» — social network",
      "p3.p": "Social web project: user profiles, feed, registration and authentication.",
      "p3.link": "Open site →",
      "p4.tag": "Production · NDA · Django",
      "p4.h": "Electronic Journal",
      "p4.p": "Internal web system: authentication, user roles, reports and administration.",
      "p4.nda": "Link not published due to NDA",
      "p5.tag": "Internal tool · FastAPI / React · LLM",
      "p5.p": "HR department tool: LLM-powered resume scoring against a vacancy with reasoning, plus market data collection — job listings and salary ranges from HH and SuperJob with history.",
      "stack.title": "Tech stack",
      "stack.sub": "Tools I use in production.",
      "stack.data": "Data & infrastructure",
      "stack.ai": "AI & testing",
      "process.title": "How I work",
      "pr1.h": "Brief",
      "pr1.p": "Goals, user roles, integrations. Timeline and milestone planning.",
      "pr2.h": "Architecture",
      "pr2.p": "Data models, API design, screen prototypes when needed.",
      "pr3.h": "Development",
      "pr3.p": "Iterative demos: backend, frontend, tests for critical flows.",
      "pr4.h": "Launch",
      "pr4.p": "Docker deployment, documentation, credentials handover and ongoing support.",
      "faq.title": "Frequently asked questions",
      "faq1.q": "What technologies do you work with?",
      "faq1.a": "Python backend: Django, DRF and FastAPI. Frontend with Vue 3 or Django templates. Databases — PostgreSQL, infrastructure — Docker, Nginx and CI/CD. AI integrations via OpenAI API.",
      "faq2.q": "Do you do only backend, or frontend too?",
      "faq2.a": "Both. I can cover the full cycle: API and business logic on the backend plus a Vue 3 or Django-template interface with JavaScript.",
      "faq3.q": "Can you integrate AI into a product?",
      "faq3.a": "Yes. I integrate OpenAI and other LLMs — assistants, analytics, data processing. A working example: the AI coach in airunningcoach.pro.",
      "faq4.q": "Do you take on existing projects for maintenance?",
      "faq4.a": "Yes. I extend, refactor and maintain existing Django and FastAPI projects.",
      "faq5.q": "How is the cost estimated?",
      "faq5.a": "After the brief — a fixed price broken down by milestone. We discuss it transparently, with no hidden extras.",
      "contacts.title": "Tell me about your project",
      "contacts.sub": "Form or Telegram. I reply within one business day.",
      "contacts.card": "// Contacts",
      "contacts.name": "Sergey Fedorov",
      "contacts.form": "// Request",
      "contacts.name.label": "Name",
      "contacts.name.ph": "What should I call you?",
      "contacts.contact.label": "Contact",
      "contacts.contact.ph": "Email, phone or Telegram",
      "contacts.task.label": "Project",
      "contacts.task.ph": "Project type: website, API, SaaS, maintenance…",
      "contacts.submit": "Send request",
      "contacts.alt": 'Or reach me on <a href="https://t.me/fsyu13" target="_blank" rel="noopener noreferrer">Telegram</a> · <a href="mailto:sergeyfedorov13@yandex.ru">by email</a>',
      "form.sending": "Sending…",
      "form.ok": "Request sent — I'll reply within one business day. Thank you!",
      "form.err": "Could not send. Write to Telegram @fsyu13 or email sergeyfedorov13@yandex.ru.",
      "footer.text": "© 2026 FedorovDev — Sergey Fedorov. Python backend & full-stack: Django, FastAPI, Vue, web services and SaaS.",
    },
  };

  let currentLang = "ru";

  function detect() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "ru" || saved === "en") return saved;
    return (navigator.language || "ru").toLowerCase().startsWith("ru") ? "ru" : "en";
  }

  function apply(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "en" ? "en" : "ru";
    document.title = T[lang]["page.title"];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", T[lang]["page.desc"]);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = T[lang][el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const v = T[lang][el.dataset.i18nPlaceholder];
      if (v !== undefined) el.setAttribute("placeholder", v);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    localStorage.setItem(LANG_KEY, lang);
  }

  function init() {
    apply(detect());
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.dataset.lang));
    });
  }

  window.t = (key) => T[currentLang][key] || key;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
