document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { y: -2, duration: 0.12, ease: "power2.out" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { y: 0, duration: 0.12, ease: "power2.out" });
  });

  btn.addEventListener("mousedown", () => {
    gsap.to(btn, { y: 2, duration: 0.06, ease: "power1.out" });
  });

  btn.addEventListener("mouseup", () => {
    gsap.to(btn, { y: -2, duration: 0.06, ease: "power1.out" });
  });
});


//accessiblity//
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.globalTimeline.timeScale(0); // effectively stops animations
});

console.log("GSAP loaded?", typeof gsap !== "undefined");
console.log("Buttons found:", document.querySelectorAll(".btn").length);

gsap.utils.toArray(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { y: -6, scale: 1.05, duration: 0.12, ease: "power2.out", overwrite: "auto" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { y: 0, scale: 1, duration: 0.12, ease: "power2.out", overwrite: "auto" });
  });

  btn.addEventListener("pointerdown", () => {
    gsap.to(btn, { y: 2, scale: 0.98, duration: 0.06, ease: "power1.out", overwrite: "auto" });
  });

  btn.addEventListener("pointerup", () => {
    gsap.to(btn, { y: -6, scale: 1.05, duration: 0.06, ease: "power1.out", overwrite: "auto" });
  });
});

gsap.set(".window", { transformOrigin: "50% 0%" });

gsap.from(".window", {
  y: 18,
  opacity: 0,
  duration: 0.35,
  stagger: 0.08,
  ease: "power2.out",
  clearProps: "transform"
});

gsap.utils.toArray(".btn, .icon-btn, .dock-item").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, { y: -3, duration: 0.12, ease: "power2.out", overwrite: "auto" });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(el, { y: 0, duration: 0.12, ease: "power2.out", overwrite: "auto" });
  });
  el.addEventListener("pointerdown", () => {
    gsap.to(el, { y: 2, duration: 0.06, ease: "power1.out", overwrite: "auto" });
  });
  el.addEventListener("pointerup", () => {
    gsap.to(el, { y: -3, duration: 0.06, ease: "power1.out", overwrite: "auto" });
  });
});
gsap.to(".screen-badge", {
  y: 2,
  duration: 1.2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.from(".hero", {
  y: 14,
  opacity: 0,
  duration: 0.4,
  ease: "power2.out"
});