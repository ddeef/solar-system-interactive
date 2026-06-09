const canvas = document.querySelector("#spaceCanvas");
const ctx = canvas.getContext("2d");

const planets = [
  {
    name: "水星",
    english: "Mercury",
    highlight: "距离太阳最近的岩石行星，昼夜温差极大，表面布满撞击坑。",
    stats: [
      ["直径", "4,879 公里"],
      ["距太阳", "5,790 万公里"],
      ["公转周期", "88 地球日"],
      ["卫星", "0 颗"],
      ["主要特征", "最快的行星轨道"]
    ],
    gradient: "linear-gradient(135deg, #b9aa96, #5a5148 68%, #1a1b1f)",
    core: "#b9aa96",
    mid: "#70665a",
    dark: "#25262a",
    glow: "rgba(199, 184, 164, 0.55)",
    ring: "#d0bc96",
    ringOpacity: 0,
    image: "assets/planets/mercury.jpg",
    focusClass: "mercury",
    features: ["撞击坑", "昼夜温差", "最快公转"],
    orbit: 90,
    size: 8,
    speed: 0.9,
    angle: 4.8
  },
  {
    name: "金星",
    english: "Venus",
    highlight: "被浓厚云层包裹的高温世界，常被称为地球的姊妹星。",
    stats: [
      ["直径", "12,104 公里"],
      ["距太阳", "1.082 亿公里"],
      ["公转周期", "225 地球日"],
      ["卫星", "0 颗"],
      ["主要特征", "浓厚大气与极高温"]
    ],
    gradient: "linear-gradient(135deg, #f0c16a, #a9652d 62%, #3b261b)",
    core: "#f0c16a",
    mid: "#ad6a32",
    dark: "#332014",
    glow: "rgba(240, 193, 106, 0.54)",
    ring: "#f0c16a",
    ringOpacity: 0,
    image: "assets/planets/venus.jpg",
    focusClass: "venus",
    features: ["浓厚云层", "极高温", "逆向自转"],
    orbit: 126,
    size: 13,
    speed: 0.72,
    angle: 3.7
  },
  {
    name: "地球",
    english: "Earth",
    highlight: "目前已知唯一孕育生命的行星，蓝色海洋和白色云带构成独特外观。",
    stats: [
      ["直径", "12,756 公里"],
      ["距太阳", "1.496 亿公里 / 1 AU"],
      ["公转周期", "365.25 地球日"],
      ["卫星", "1 颗"],
      ["主要特征", "液态水与生命圈"]
    ],
    gradient: "linear-gradient(135deg, #d7f4ff, #2b83c6 38%, #1a5b43 58%, #0e214b)",
    core: "#d7f4ff",
    mid: "#2b83c6",
    dark: "#0e214b",
    glow: "rgba(110, 214, 255, 0.58)",
    ring: "#6ed6ff",
    ringOpacity: 0,
    image: "assets/planets/earth.jpg",
    focusClass: "earth",
    features: ["蓝色海洋", "云带", "生命圈"],
    orbit: 166,
    size: 14,
    speed: 0.6,
    angle: 2.9
  },
  {
    name: "火星",
    english: "Mars",
    highlight: "红色行星拥有峡谷、火山和极冠，是人类深空探测的重要目标。",
    stats: [
      ["直径", "6,779 公里"],
      ["距太阳", "2.279 亿公里"],
      ["公转周期", "687 地球日"],
      ["卫星", "2 颗"],
      ["主要特征", "铁氧化物红色地表"]
    ],
    gradient: "linear-gradient(135deg, #f28a48, #9a3f21 58%, #341811)",
    core: "#f28a48",
    mid: "#9a3f21",
    dark: "#341811",
    glow: "rgba(242, 138, 72, 0.54)",
    ring: "#f28a48",
    ringOpacity: 0,
    image: "assets/planets/mars.jpg",
    focusClass: "mars",
    features: ["红色地表", "极冠", "探测任务"],
    orbit: 208,
    size: 11,
    speed: 0.48,
    angle: 5.6
  },
  {
    name: "木星",
    english: "Jupiter",
    highlight: "太阳系最大的行星，拥有醒目的云带和持续数百年的巨大风暴。",
    stats: [
      ["直径", "139,822 公里"],
      ["距太阳", "7.78 亿公里 / 5.2 AU"],
      ["公转周期", "11.86 地球年"],
      ["卫星", "101 颗"],
      ["主要特征", "最大气态巨行星"]
    ],
    gradient: "linear-gradient(135deg, #f3d2a5, #c2763c 26%, #efe0bd 42%, #8f4f2d 60%, #2a1c16)",
    core: "#f3d2a5",
    mid: "#c2763c",
    dark: "#2a1c16",
    glow: "rgba(243, 210, 165, 0.52)",
    ring: "#f3d2a5",
    ringOpacity: 0,
    image: "assets/planets/jupiter.jpg",
    focusClass: "jupiter",
    features: ["巨大风暴", "条纹云带", "最大行星"],
    orbit: 268,
    size: 28,
    speed: 0.26,
    angle: 0.7
  },
  {
    name: "土星",
    english: "Saturn",
    highlight: "土星拥有壮丽的光环，由冰粒、岩石碎片和尘埃组成。",
    stats: [
      ["光环系统", "由冰粒、岩石碎片组成"],
      ["直径", "120,500 公里"],
      ["距太阳", "14.3 亿公里 / 9.5 AU"],
      ["公转周期", "29.46 地球年"],
      ["卫星", "274 颗"],
      ["主要特征", "最著名的光环行星"]
    ],
    gradient: "linear-gradient(135deg, #f6d49a, #b9894f 54%, #49301b)",
    core: "#f6d49a",
    mid: "#b9894f",
    dark: "#49301b",
    glow: "rgba(255, 210, 114, 0.58)",
    ring: "#ffd272",
    ringOpacity: 1,
    image: "assets/planets/saturn.jpg",
    focusClass: "saturn",
    features: ["壮丽光环", "低密度", "冰粒碎片"],
    orbit: 336,
    size: 25,
    speed: 0.18,
    angle: 0.05
  },
  {
    name: "天王星",
    english: "Uranus",
    highlight: "冰巨星呈青蓝色，自转轴几乎横躺，像在轨道上侧身前行。",
    stats: [
      ["直径", "51,118 公里"],
      ["距太阳", "28.7 亿公里"],
      ["公转周期", "84 地球年"],
      ["卫星", "28 颗"],
      ["主要特征", "倾斜自转的冰巨星"]
    ],
    gradient: "linear-gradient(135deg, #d8fbff, #7bd2dc 58%, #235e70)",
    core: "#d8fbff",
    mid: "#7bd2dc",
    dark: "#235e70",
    glow: "rgba(123, 210, 220, 0.58)",
    ring: "#bdf9ff",
    ringOpacity: 0,
    image: "assets/planets/uranus.jpg",
    focusClass: "uranus",
    features: ["横躺自转", "青蓝冰层", "极端季节"],
    orbit: 402,
    size: 20,
    speed: 0.12,
    angle: 5.95
  },
  {
    name: "海王星",
    english: "Neptune",
    highlight: "遥远的蓝色冰巨星，拥有太阳系中最强劲的风暴系统之一。",
    stats: [
      ["直径", "49,528 公里"],
      ["距太阳", "45.0 亿公里"],
      ["公转周期", "164.8 地球年"],
      ["卫星", "16 颗"],
      ["主要特征", "深蓝色冰巨星"]
    ],
    gradient: "linear-gradient(135deg, #74a7ff, #244ad5 54%, #09184c)",
    core: "#74a7ff",
    mid: "#244ad5",
    dark: "#09184c",
    glow: "rgba(82, 130, 255, 0.58)",
    ring: "#74a7ff",
    ringOpacity: 0,
    image: "assets/planets/neptune.jpg",
    focusClass: "neptune",
    features: ["深蓝冰巨星", "强烈风暴", "遥远轨道"],
    orbit: 472,
    size: 20,
    speed: 0.1,
    angle: 1.55
  }
];

const state = {
  selected: 5,
  speed: 1,
  scale: 1,
  showOrbits: true,
  paused: false,
  time: 0,
  stars: [],
  planetPositions: []
};

const planetList = document.querySelector("#planetList");
const planetPanel = document.querySelector("#planetPanel");
const planetIcon = document.querySelector("#planetIcon");
const planetName = document.querySelector("#planetName");
const planetEnglish = document.querySelector("#planetEnglish");
const planetPortrait = document.querySelector("#planetPortrait");
const planetHighlight = document.querySelector("#planetHighlight");
const planetStats = document.querySelector("#planetStats");
const speedRange = document.querySelector("#speedRange");
const speedLabel = document.querySelector("#speedLabel");
const scaleRange = document.querySelector("#scaleRange");
const scaleLabel = document.querySelector("#scaleLabel");
const orbitToggle = document.querySelector("#orbitToggle");
const orbitLabel = document.querySelector("#orbitLabel");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const focusOverlay = document.querySelector("#focusOverlay");
const focusPlanet = document.querySelector("#focusPlanet");
const focusName = document.querySelector("#focusName");
const focusEnglish = document.querySelector("#focusEnglish");
const focusDescription = document.querySelector("#focusDescription");
const featureTags = document.querySelector("#featureTags");
const focusStats = document.querySelector("#focusStats");

function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  state.stars = Array.from({ length: Math.min(320, Math.floor(window.innerWidth / 4)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.4 + 0.25,
    a: Math.random() * 0.8 + 0.16
  }));
}

function setPlanetVars(element, planet) {
  element.style.setProperty("--planet-gradient", planet.gradient);
  element.style.setProperty("--planet-core", planet.core);
  element.style.setProperty("--planet-mid", planet.mid);
  element.style.setProperty("--planet-dark", planet.dark);
  element.style.setProperty("--planet-glow", planet.glow);
  element.style.setProperty("--planet-ring", planet.ring);
  element.style.setProperty("--ring-opacity", planet.ringOpacity);
  element.style.setProperty("--planet-image", `url("${planet.image}")`);
}

function renderDock() {
  planetList.innerHTML = planets
    .map(
      (planet, index) => `
        <button class="planet-choice ${index === state.selected ? "active" : ""}" data-index="${index}">
          <span class="mini-planet ${planet.ringOpacity ? "has-ring" : ""}"></span>
          <span>${planet.name}</span>
        </button>
      `
    )
    .join("");

  planetList.querySelectorAll(".planet-choice").forEach((button) => {
    const planet = planets[Number(button.dataset.index)];
    setPlanetVars(button, planet);
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      selectPlanet(index);
      openPlanetFocus(index);
    });
  });
}

function renderPanel() {
  const planet = planets[state.selected];
  setPlanetVars(planetPanel, planet);
  planetIcon.textContent = "";
  planetName.textContent = planet.name;
  planetEnglish.textContent = planet.english;
  planetHighlight.textContent = planet.highlight;
  setPlanetVars(planetPortrait, planet);
  planetStats.innerHTML = planet.stats
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function selectPlanet(index) {
  state.selected = (index + planets.length) % planets.length;
  renderDock();
  renderPanel();
}

function openPlanetFocus(index = state.selected) {
  const planet = planets[index];
  selectPlanet(index);
  setPlanetVars(focusOverlay, planet);
  setPlanetVars(focusPlanet, planet);
  focusPlanet.className = `focus-planet photo-planet ${planet.focusClass}`;
  focusName.textContent = planet.name;
  focusEnglish.textContent = planet.english;
  focusDescription.textContent = planet.highlight;
  featureTags.innerHTML = planet.features.map((feature) => `<span>${feature}</span>`).join("");
  focusStats.innerHTML = planet.stats
    .slice(0, 4)
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
  focusOverlay.classList.add("open");
  focusOverlay.setAttribute("aria-hidden", "false");
}

function closePlanetFocus() {
  focusOverlay.classList.remove("open");
  focusOverlay.setAttribute("aria-hidden", "true");
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}

function scrollToHashTarget() {
  const id = window.location.hash.slice(1);
  const target = id ? document.getElementById(id) : null;

  if (target) {
    target.scrollIntoView({ block: "start" });
    setActiveNav(id);
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", `#${id}`);
    setActiveNav(id);
  });
});

function drawStarfield(width, height) {
  const sky = ctx.createRadialGradient(width * 0.45, height * 0.28, 40, width * 0.45, height * 0.28, width * 0.8);
  sky.addColorStop(0, "#122746");
  sky.addColorStop(0.28, "#06111f");
  sky.addColorStop(1, "#020711");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  const nebula = ctx.createLinearGradient(width * 0.28, 0, width * 0.74, height * 0.45);
  nebula.addColorStop(0, "rgba(110, 214, 255, 0)");
  nebula.addColorStop(0.45, "rgba(122, 162, 255, 0.16)");
  nebula.addColorStop(0.56, "rgba(255, 210, 114, 0.08)");
  nebula.addColorStop(1, "rgba(110, 214, 255, 0)");
  ctx.strokeStyle = nebula;
  ctx.lineWidth = 80;
  ctx.beginPath();
  ctx.moveTo(width * 0.26, -20);
  ctx.bezierCurveTo(width * 0.42, height * 0.16, width * 0.48, height * 0.28, width * 0.72, height * 0.38);
  ctx.stroke();

  state.stars.forEach((star) => {
    ctx.globalAlpha = star.a;
    ctx.fillStyle = "#eaf8ff";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function drawPlanet(x, y, radius, planet, selected) {
  const gradient = ctx.createRadialGradient(x - radius * 0.32, y - radius * 0.36, radius * 0.15, x, y, radius);
  gradient.addColorStop(0, planet.core);
  gradient.addColorStop(0.48, planet.mid);
  gradient.addColorStop(1, planet.dark);
  ctx.save();
  if (planet.ringOpacity) {
    ctx.strokeStyle = planet.ring;
    ctx.globalAlpha = 0.72;
    ctx.lineWidth = Math.max(3, radius * 0.18);
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 2.0, radius * 0.48, -0.23, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  ctx.shadowColor = selected ? planet.ring : planet.glow;
  ctx.shadowBlur = selected ? 26 : 12;
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawScene() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  drawStarfield(width, height);

  const compact = width < 900;
  const cx = compact ? width * 0.5 : width * 0.42;
  const cy = compact ? height * 0.48 : height * 0.54;
  const orbitScale = (compact ? 0.72 : 1) * [0.78, 1, 1.18][state.scale];
  const flatten = compact ? 0.46 : 0.38;

  if (!state.paused) {
    state.time += 0.008 * state.speed;
  }

  if (state.showOrbits) {
    planets.forEach((planet, index) => {
      const orbit = planet.orbit * orbitScale;
      ctx.strokeStyle = index === state.selected ? "rgba(255, 210, 114, 0.86)" : "rgba(110, 214, 255, 0.18)";
      ctx.lineWidth = index === state.selected ? 1.8 : 1;
      ctx.setLineDash(index === 4 ? [3, 8] : []);
      ctx.beginPath();
      ctx.ellipse(cx, cy, orbit, orbit * flatten, -0.16, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.setLineDash([]);
  }

  const sunGradient = ctx.createRadialGradient(cx - 18, cy - 18, 8, cx, cy, 56);
  sunGradient.addColorStop(0, "#fffbe0");
  sunGradient.addColorStop(0.18, "#fff179");
  sunGradient.addColorStop(0.55, "#ff9d26");
  sunGradient.addColorStop(1, "rgba(255, 106, 0, 0)");
  ctx.fillStyle = sunGradient;
  ctx.beginPath();
  ctx.arc(cx, cy, 68 * orbitScale, 0, Math.PI * 2);
  ctx.fill();

  state.planetPositions = [];
  planets.forEach((planet, index) => {
    const orbit = planet.orbit * orbitScale;
    const angle = planet.angle + state.time * planet.speed;
    const x = cx + Math.cos(angle) * orbit * Math.cos(-0.16) - Math.sin(angle) * orbit * flatten * Math.sin(-0.16);
    const y = cy + Math.cos(angle) * orbit * Math.sin(-0.16) + Math.sin(angle) * orbit * flatten * Math.cos(-0.16);
    const radius = Math.max(7, planet.size * orbitScale);
    state.planetPositions.push({ x, y, radius: radius + 14, index });
    drawPlanet(x, y, radius, planet, index === state.selected);

    if (index === state.selected || index === 2) {
      ctx.fillStyle = index === state.selected ? "rgba(255, 210, 114, 0.98)" : "rgba(110, 214, 255, 0.95)";
      ctx.font = "700 14px system-ui, sans-serif";
      ctx.fillText(planet.name, x + radius + 12, y - radius - 6);
    }
  });

  requestAnimationFrame(drawScene);
}

speedRange.addEventListener("input", () => {
  state.speed = Number(speedRange.value);
  speedLabel.textContent = state.speed.toFixed(1);
});

scaleRange.addEventListener("input", () => {
  state.scale = Number(scaleRange.value);
  scaleLabel.textContent = ["紧凑比例", "沉浸比例", "宏观比例"][state.scale];
});

orbitToggle.addEventListener("change", () => {
  state.showOrbits = orbitToggle.checked;
  orbitLabel.textContent = state.showOrbits ? "开" : "关";
});

document.querySelector("#prevPlanet").addEventListener("click", () => selectPlanet(state.selected - 1));
document.querySelector("#nextPlanet").addEventListener("click", () => selectPlanet(state.selected + 1));
document.querySelector("#startTour").addEventListener("click", () => selectPlanet((state.selected + 1) % planets.length));
document.querySelectorAll("[data-planet-index]").forEach((button) => {
  button.addEventListener("click", () => openPlanetFocus(Number(button.dataset.planetIndex)));
});
document.querySelector("#focusSun").addEventListener("click", () => {
  state.selected = 5;
  state.scale = 1;
  scaleRange.value = "1";
  scaleLabel.textContent = "沉浸比例";
  renderDock();
  renderPanel();
});
document.querySelector("#closePanel").addEventListener("click", () => {
  planetPanel.scrollIntoView({ behavior: "smooth", block: "center" });
});
document.querySelector("#archiveButton").addEventListener("click", () => openPlanetFocus(state.selected));
document.querySelector("#focusClose").addEventListener("click", closePlanetFocus);
document.querySelector(".focus-backdrop").addEventListener("click", closePlanetFocus);

document.addEventListener("click", (event) => {
  if (event.target.closest("button, a, input, .planet-panel, .control-row, .planet-dock, .legend, .focus-card")) {
    return;
  }

  const hit = state.planetPositions.find((planet) => {
    const dx = event.clientX - planet.x;
    const dy = event.clientY - planet.y;
    return Math.hypot(dx, dy) <= planet.radius;
  });

  if (hit) {
    openPlanetFocus(hit.index);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closePlanetFocus();
  }

  if (event.code === "Space" && event.target === document.body) {
    event.preventDefault();
    state.paused = !state.paused;
  }
});

window.addEventListener("resize", resizeCanvas);
window.addEventListener("scroll", () => {
  document.body.classList.toggle("content-mode", window.scrollY > window.innerHeight * 0.68);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveNav(visible.target.id);
    }
  },
  {
    rootMargin: "-28% 0px -58% 0px",
    threshold: [0.08, 0.18, 0.32]
  }
);

["overview", "archive", "discoveries", "mapGuide", "about"].forEach((id) => {
  const section = document.getElementById(id);
  if (section) {
    sectionObserver.observe(section);
  }
});

window.addEventListener("hashchange", scrollToHashTarget);
resizeCanvas();
renderDock();
renderPanel();
drawScene();
requestAnimationFrame(scrollToHashTarget);
