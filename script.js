(function () {
  const header = document.querySelector(".header");
  const reveals = document.querySelectorAll(".reveal");

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.querySelector(".cta__form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。\n（デモのため送信は行われていません。実運用時はフォーム送信先を設定してください。）");
  });
})();
