import { initTheme, initLangToggle } from "./preferences.js";
import { initContactForm } from "./contact.js";

const pageCleanups = [];
const onPageCleanup = (cleanup) => pageCleanups.push(cleanup);
function cleanupPage() {
  pageCleanups.splice(0).forEach((cleanup) => cleanup());
  window._closeMenu?.();
  window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
  window.gsap?.killTweensOf(document.querySelectorAll("*"));
}
document.addEventListener("astro:before-swap", cleanupPage);

// ---- Lucide Icons ----
function createIcons() {
	if (window.lucide) window.lucide.createIcons();
}

// ---- Text Scramble ----
class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = "!<>-_\\/[]{}—=+*^?#________";
		this.update = this.update.bind(this);
	}
	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise(
			(resolve) => (this.resolve = resolve),
		);
		this.queue = [];
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			this.queue.push({ from, to, start, end });
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}
	update() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char =
						this.chars[
							Math.floor(
								Math.random() * this.chars.length,
							)
						];
					this.queue[i].char = char;
				}
				output += `<span class="dud">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.el.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}
}

// ---- Noise Canvas ----
function initNoise() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("noiseCanvas");
  if (!canvas) return;
  // A small, static, tiled texture avoids allocating a viewport-sized image each frame.
  canvas.width = canvas.height = 128;
  const context = canvas.getContext("2d");
  if (!context) return;
  const pixels = context.createImageData(128, 128);
  const buffer = new Uint32Array(pixels.data.buffer);
  for (let i = 0; i < buffer.length; i++) buffer[i] = Math.random() < 0.5 ? 0xff000000 : 0;
  context.putImageData(pixels, 0, 0);
  canvas.style.backgroundImage = `url(${canvas.toDataURL()})`;
  canvas.style.backgroundRepeat = 'repeat';
  canvas.style.backgroundSize = '128px 128px';
  context.clearRect(0, 0, 128, 128);
}

// ---- Custom Cursor (desktop only — hidden on touch devices) ----
function initCursor() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	const cursor = document.getElementById("cursor");
	if (!cursor) return;
	// Disable on touch / mobile
	if (window.matchMedia("(hover: none)").matches) {
		cursor.style.display = "none";
		return;
	}

	const pos = { x: -100, y: -100 };
	let started = false;

	if (!window._cursorListenersAdded) {
		window._cursorListenersAdded = true;
		window.addEventListener("mousemove", (e) => {
			window._mouseX = e.clientX;
			window._mouseY = e.clientY;
			window._mouseStarted = true;
		});

		document.addEventListener("mouseover", (e) => {
			if (
				e.target.closest(
					"a, button, .nav-link, .modal-item",
				)
			) {
				const c = document.getElementById("cursor");
				if (c) c.classList.add("hovering");
			}
		});
		document.addEventListener("mouseout", (e) => {
			if (
				e.target.closest(
					"a, button, .nav-link, .modal-item",
				)
			) {
				const c = document.getElementById("cursor");
				if (c) c.classList.remove("hovering");
			}
		});
	}

	cursor.style.opacity = "0";

	// Use GSAP ticker to smoothly follow the mouse
	const updateCursor = () => {
		if (!window._mouseStarted) return;

		if (!started) {
			pos.x = window._mouseX;
			pos.y = window._mouseY;
			started = true;
			cursor.style.opacity = "1";
		}

		pos.x += (window._mouseX - pos.x) * 0.15;
		pos.y += (window._mouseY - pos.y) * 0.15;
		gsap.set(cursor, { x: pos.x, y: pos.y });
	};

	gsap.ticker.add(updateCursor);

	// Cleanup on swap to avoid memory leaks/double tickers
	document.addEventListener(
		"astro:before-swap",
		() => {
			gsap.ticker.remove(updateCursor);
		},
		{ once: true },
	);
}

// ---- Lenis Smooth Scroll ----
let lenis;
function initLenis() {
  if (!window.Lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const instance = new window.Lenis({ duration: 1.2, smoothWheel: true });
  lenis = instance;
  let frame;
  const raf = (time) => {
    instance.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);
  onPageCleanup(() => {
    cancelAnimationFrame(frame);
    instance.destroy();
    if (lenis === instance) lenis = null;
  });
}

// ---- Scroll Effects (GSAP + ScrollTrigger) ----
function initScrollEffects() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.getAll().forEach((t) => t.kill());

	// Reset all .animate elements to invisible before creating triggers
	document.querySelectorAll(".animate").forEach((el) => {
		gsap.set(el, { opacity: 0, y: 30 });
		const label = el.querySelector(".section-label");
		if (label) label.classList.remove("visible");
	});

	gsap.to("#progress-bar", {
		scaleX: 1,
		ease: "none",
		scrollTrigger: { scrub: 0.3 },
	});

	document.querySelectorAll(".animate").forEach((el) => {
		const label = el.querySelector(".section-label");
		gsap.to(el, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play none none none",
				onEnter: () => {
					if (label) label.classList.add("visible");
				},
			},
		});
	});

	// Refresh after a tick so the new page layout is computed
	const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 50);
	onPageCleanup(() => clearTimeout(refreshTimer));
}

// ---- Command Palette / Menu (SINGLE state machine) ----
function initCommandPalette() {
	const cmdBtn = document.getElementById("cmdBtn");
	const overlay = document.getElementById("modalOverlay");
	const modalTime = document.getElementById("modalTime");
	const closeBtn = document.getElementById("modalCloseBtn");
	const closeText = document.getElementById("modalCloseText");
	if (!overlay) { window.onkeydown = null; window._openMenu = null; window._closeMenu = null; window._menuOpen = false; return; }

	const updateTime = () => {
		if (!modalTime) return;
		const t = new Date().toLocaleTimeString("en-GB", {
			timeZone: "America/Guayaquil",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
		modalTime.textContent = `Ecuador, ${t}`;
	};

	const resetMobileIcon = (isOpen) => {
		const icon = document.getElementById("mobileMenuIcon");
		if (!icon) return;
		icon.innerHTML = isOpen
			? `<line x1="18" y1="6" x2="6" y2="18" stroke-linecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke-linecap="round"/>`
			: `<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>`;
	};

	let previousFocus;
	const openMenu = () => {
		previousFocus = document.activeElement;
		updateTime();
		overlay.classList.add("active");
		document.body.classList.add("modal-open");
		window._menuOpen = true;
		lenis?.stop();
		cmdBtn?.setAttribute("aria-expanded", "true");
		document.getElementById("mobileMenuBtn")?.setAttribute("aria-expanded", "true");
		overlay.querySelector("button, a")?.focus();
		resetMobileIcon(true);
		const icon = document.getElementById("menu-icon");
		if (icon) {
			icon.setAttribute("data-lucide", "x");
			createIcons();
		}
	};

	const closeMenu = () => {
		overlay.classList.remove("active");
		document.body.classList.remove("modal-open");
		window._menuOpen = false;
		lenis?.start();
		cmdBtn?.setAttribute("aria-expanded", "false");
		document.getElementById("mobileMenuBtn")?.setAttribute("aria-expanded", "false");
		if (previousFocus?.isConnected) previousFocus.focus();
		resetMobileIcon(false);
		const icon = document.getElementById("menu-icon");
		if (icon) {
			icon.setAttribute("data-lucide", "chart-no-axes-gantt");
			createIcons();
		}
	};

	// Expose globally so mobile nav can use them
	window._openMenu = openMenu;
	window._closeMenu = closeMenu;

	// Desktop button
	if (cmdBtn)
		cmdBtn.onclick = () =>
			overlay.classList.contains("active")
				? closeMenu()
				: openMenu();

	// Backdrop click
	overlay.onclick = (e) => {
		if (e.target === overlay) closeMenu();
	};

	// Close buttons INSIDE the modal
	if (closeBtn) closeBtn.onclick = closeMenu;
	if (closeText) closeText.onclick = closeMenu;

	// Keyboard shortcuts
	window.onkeydown = (e) => {
		if (e.key === "Tab" && window._menuOpen) {
			const items = [...overlay.querySelectorAll("button, a[href]")];
			const first = items[0], last = items[items.length - 1];
			if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
			else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
		}
		if (
			(e.metaKey || e.ctrlKey) &&
			e.key.toLowerCase() === "k"
		) {
			e.preventDefault();
			overlay.classList.contains("active")
				? closeMenu()
				: openMenu();
		}
		if (e.key === "Escape") closeMenu();
	};
}

function initMobileNav() {
  const button = document.getElementById("mobileMenuBtn");
  if (button) button.onclick = () => window._menuOpen ? window._closeMenu?.() : window._openMenu?.();
}

// ---- Magnetic Buttons (floating UI) ----
function initMagneticButtons() {
	if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
	[
		{
			wrapId: "menu-wrap",
			btnId: "cmdBtn",
			inner: "#menu-icon",
		},
		{
			wrapId: "theme-wrap",
			btnId: "themeToggle",
			inner: ".theme-toggle-inner",
		},
		{
			wrapId: "lang-wrap",
			btnId: "langToggle",
			inner: "#langText",
		},
	].forEach(({ wrapId, btnId, inner }) => {
		const wrap = document.getElementById(wrapId);
		const btn = document.getElementById(btnId);
		if (!wrap || !btn) return;
		wrap.onmousemove = (e) => {
			const r = wrap.getBoundingClientRect();
			const x = e.clientX - r.left - r.width / 2;
			const y = e.clientY - r.top - r.height / 2;
			gsap.to(btn, {
				x: x * 0.5,
				y: y * 0.5,
				duration: 0.3,
				ease: "power2.out",
			});
			const el = btn.querySelector(inner);
			if (el)
				gsap.to(el, {
					x: x * 0.25,
					y: y * 0.25,
					duration: 0.3,
					ease: "power2.out",
				});
		};
		wrap.onmouseleave = () => {
			gsap.to(btn, {
				x: 0,
				y: 0,
				duration: 0.9,
				ease: "elastic.out(1, 0.3)",
			});
			const el = btn.querySelector(inner);
			if (el)
				gsap.to(el, {
					x: 0,
					y: 0,
					duration: 0.9,
					ease: "elastic.out(1, 0.3)",
				});
		};
	});
}

// ---- Magnetic Links (nav items) ----
function initMagneticLinks() {
	if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
	document
		.querySelectorAll(".avatar, .nav-link, .item")
		.forEach((el) => {
			el.onmousemove = (e) => {
				const r = el.getBoundingClientRect();
				const dx = e.clientX - (r.left + r.width / 2);
				const dy = e.clientY - (r.top + r.height / 2);
				gsap.to(el, {
					x: dx * 0.3,
					y: dy * 0.3,
					duration: 0.3,
				});
			};
			el.onmouseleave = () => {
				gsap.to(el, {
					x: 0,
					y: 0,
					duration: 0.6,
					ease: "elastic.out(1, 0.3)",
				});
			};
		});
}

// ---- Scramble Text ----
function initScramble() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".section-label").forEach((label) => {
    let scramble;
    let original;
    let target;
    const stop = () => {
      if (!scramble) return;
      cancelAnimationFrame(scramble.frameRequest);
      if (target) target.textContent = original;
      scramble = null;
    };
    onPageCleanup(stop);
    label.onmouseenter = () => {
      stop();
      target = label.querySelector("[data-translation-text]") || label;
      original = target.textContent || "";
      scramble = new TextScramble(target);
      scramble.setText(original);
    };
    label.addEventListener("portfolio:translate", stop);
  });
}

// ---- Dashboard Analytics ----
let dashInterval = null;
function initAnalytics() {
	const metricsEl = document.getElementById("demo-elapsed");
	const logsEl = document.getElementById("system-logs");
	if (!metricsEl && !logsEl) return;
	onPageCleanup(() => { clearInterval(dashInterval); dashInterval = null; });
	if (dashInterval) {
		clearInterval(dashInterval);
		dashInterval = null;
	}
	const msgs = [
		"CONNECTING_TO_KUBERNETES_CLUSTER...",
		"TERRAFORM_APPLY_STATE_VERIFIED...",
		"PROVISIONING_AWS_VPC_SUBNETS...",
		"DOCKER_CONTAINER_HEALTHY [HEALTHCHECK]",
		"SYNCING_ARGO_CD_APPLICATIONS...",
		"INGRESS_TRAFFIC_BALANCED [ALB]",
		"GITHUB_ACTIONS_PIPELINE_SUCCESS...",
		"PROMETHEUS_METRICS_SCRAPED [200]",
		"ESTABLISHING_SECURE_MTLS_GATEWAY",
		"KUBERNETES_NODE_AUTO_SCALED",
	];
	dashInterval = setInterval(() => {
		if (!logsEl) return;
		const t = new Date().toLocaleTimeString("en-GB", {
			hour12: false,
		});
		const div = document.createElement("div");
		div.className = "log-line";
		div.textContent = `[${t}] > ${msgs[Math.floor(Math.random() * msgs.length)]}`;
		logsEl.appendChild(div);
		if (logsEl.children.length > 12) logsEl.firstChild.remove();
	}, 1500);
	const start = Date.now();
	let metricsFrame;
	onPageCleanup(() => clearTimeout(metricsFrame));
	const tick = () => {
		if (!metricsEl || !document.body.contains(metricsEl))
			return;
		const s = Math.floor((Date.now() - start) / 1000);
		const m = String(Math.floor(s / 60)).padStart(2, "0");
		const sec = String(s % 60).padStart(2, "0");
		metricsEl.textContent = ` / ${m}:${sec}`;
		metricsFrame = setTimeout(tick, 1000);
	};
	tick();
}

// ---- Preloader (first load only) ----
function initPreloader() {
  const preloader = document.getElementById('system-preloader');
  if (!preloader) return;
  gsap.timeline()
    .to(preloader.querySelector('.preloader-bar'), { width: '100%', duration: 0.25 })
    .to(preloader, { opacity: 0, duration: 0.25, onComplete: () => { preloader.style.display = 'none'; } });
}

// ---- Page Transition Wipe ----
function initPageTransitions() {
	// IMPORTANT: Re-query cols inside handlers — they are recreated on each body swap
	document.addEventListener("astro:before-preparation", (ev) => {
		const cols =
			document.querySelectorAll(".transition-column");
		if (!cols.length || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const orig = ev.loader;
		ev.loader = async () => {
			// Reset cols to hidden state first
			gsap.set(cols, { scaleY: 0, transformOrigin: "top" });
			await new Promise((resolve) => {
				gsap.to(cols, {
					scaleY: 1,
					duration: 0.45,
					stagger: 0.06,
					ease: "power4.inOut",
					onComplete: resolve,
				});
			});
			await orig();
		};
	});

	document.addEventListener("astro:after-swap", () => {
		// Re-query: these are the NEW page's columns
		const cols =
			document.querySelectorAll(".transition-column");
		if (!cols.length || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		gsap.set(cols, { scaleY: 1, transformOrigin: "bottom" });
		gsap.to(cols, {
			scaleY: 0,
			duration: 0.45,
			stagger: 0.06,
			ease: "power4.inOut",
			delay: 0.05,
			onComplete: () =>
				gsap.set(cols, {
					transformOrigin: "top",
					scaleY: 0,
				}),
		});
	});
}

// ---- MAIN INIT — runs on first load and after each page swap ----
function init() {
	createIcons();

	const pl = document.getElementById("system-preloader");
	if (pl && window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !window._portfolioLoaded) {
		window._portfolioLoaded = true;
		initPreloader();
	} else if (pl) {
		pl.style.display = "none";
	}

	initTheme(onPageCleanup);
	initLangToggle();
	initCommandPalette();
	initMobileNav();
	initContactForm(onPageCleanup);
	if (!window.gsap || !window.ScrollTrigger) {
		if (pl) pl.style.display = "none";
		return;
	}
	initNoise();
	initCursor();
	initLenis();
	initScrollEffects();
	initMagneticButtons();
	initMagneticLinks();
	initScramble();
	initAnalytics();
}

// ---- Bootstrap ----
// Reset only the flags that SHOULD reset on first load
if (!window._portfolioBootstrapped) {
	window._portfolioBootstrapped = true;
	window._portfolioLoaded = false;
}
// One-time page transition setup
if (!window._transitionsReady) {
	window._transitionsReady = true;
	initPageTransitions();
}

// Re-run init after every Astro page swap
document.addEventListener("astro:page-load", init);
