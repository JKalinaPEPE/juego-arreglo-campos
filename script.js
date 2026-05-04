const screens = ["start", "map", "level1", "level2", "level3", "level4", "level5", "final"];

const mapZones = {
  montevideo: {
    title: "Montevideo",
    text: "Puerto, plaza militar y centro de autoridad colonial. Desde allí se intentaba vigilar la campaña, cobrar impuestos y afirmar el dominio español."
  },
  buenosaires: {
    title: "Buenos Aires",
    text: "Capital virreinal y punto clave del comercio imperial. Los documentos coloniales hablaban de los campos de Buenos Aires y Montevideo, no de un Uruguay independiente."
  },
  campania: {
    title: "Campaña ganadera",
    text: "La riqueza principal era el ganado vacuno: cuero, carne salada, sebo y otros productos. Pero el ganado disperso y las faenas sin control preocupaban a las autoridades."
  },
  frontera: {
    title: "Frontera con Portugal",
    text: "La frontera era imprecisa y disputada. El contrabando, la circulación de personas y el avance portugués debilitaban el control de la Corona española."
  },
  estancias: {
    title: "Estancias",
    text: "Las autoridades distinguían entre propietarios ausentistas, que acumulaban tierras sin poblarlas, y hacendados pobladores, que vivían, producían y defendían el territorio."
  },
  pueblos: {
    title: "Pueblos y capillas",
    text: "Poblar y cristianizar ayudaba a fijar población, registrar matrimonios y bautismos, crear comunidad y aumentar el control social."
  },
  norte: {
    title: "Norte misionero",
    text: "María Inés Moraes muestra que el territorio no estaba vacío: había presencia indígena, guaraní y misionera, especialmente vinculada a Yapeyú."
  }
};

const problems = [
  { text: "Contrabando", correct: true, explanation: "El comercio ilegal por caminos y fronteras debilitaba impuestos y autoridad española." },
  { text: "Ganado disperso o cimarrón", correct: true, explanation: "El ganado suelto dificultaba controlar la producción y las faenas." },
  { text: "Propietarios ausentistas", correct: true, explanation: "Acumulaban tierras, pero no siempre las poblaban ni producían en ellas." },
  { text: "Ocupación irregular de tierras", correct: true, explanation: "La ocupación sin títulos claros era parte del conflicto por el control territorial." },
  { text: "Población rural móvil", correct: true, explanation: "Peones, changadores y otros trabajadores circulaban por la campaña y escapaban al control." },
  { text: "Frontera débil frente a Portugal", correct: true, explanation: "La frontera oriental era disputada y de límites imprecisos." },
  { text: "Faenas clandestinas", correct: true, explanation: "Las matanzas sin permiso alimentaban circuitos ilegales de cuero y carne." },
  { text: "Falta de pueblos, capillas y autoridades", correct: true, explanation: "Sin instituciones locales, el control social y territorial era más débil." },
  { text: "Industrialización avanzada", correct: false, explanation: "No corresponde: la campaña rioplatense colonial era principalmente ganadera, no industrial." },
  { text: "Ferrocarriles", correct: false, explanation: "No corresponde al período: el debate tratado ocurre antes de la expansión ferroviaria." },
  { text: "Fábricas textiles modernas", correct: false, explanation: "Es un distractor: no era el problema central de la campaña colonial." },
  { text: "Elecciones nacionales uruguayas", correct: false, explanation: "No corresponde: Uruguay todavía no existía como Estado independiente." },
  { text: "Uruguay como Estado independiente", correct: false, explanation: "En 1784-1805 el marco era colonial e imperial, no nacional uruguayo." }
];

const solutionDescriptions = [
  {
    title: "Reparto de tierras",
    text: "Buscaba entregar tierras a quienes realmente las trabajaran y poblaran, criticando a los grandes propietarios ausentistas."
  },
  {
    title: "Reparto de ganado",
    text: "El ganado era capital productivo. Tener vacas permitía producir, comerciar y sostener una familia."
  },
  {
    title: "Fundación de pueblos",
    text: "Servía para fijar población, crear comunidad y hacer más efectiva la presencia de la autoridad."
  },
  {
    title: "Construcción de capillas",
    text: "No era solo una medida religiosa; también ayudaba al control social mediante registros, matrimonios, bautismos y vínculos comunitarios."
  },
  {
    title: "Control del contrabando",
    text: "Buscaba evitar la pérdida de impuestos y de autoridad de la Corona española."
  },
  {
    title: "Defensa de frontera",
    text: "Permitía frenar el avance portugués y afirmar el dominio español sobre territorios de límites imprecisos."
  }
];

const solutionPairs = [
  { problem: "Contrabando", answer: "Controlar caminos y frontera" },
  { problem: "Ganado disperso", answer: "Organizar rodeos y regular faenas" },
  { problem: "Propietarios ausentistas", answer: "Favorecer a quienes poblaran y trabajaran la tierra" },
  { problem: "Población rural móvil", answer: "Crear pueblos, capillas e instituciones" },
  { problem: "Frontera portuguesa", answer: "Establecer guardias y poblar zonas estratégicas" },
  { problem: "Falta de capital productivo", answer: "Repartir ganado" },
  { problem: "Tierras sin trabajar", answer: "Repartir tierras a pobladores" }
];

const decisions = [
  {
    situation: "Un grupo de changadores faena ganado sin permiso y vende cueros en la frontera.",
    options: [
      { text: "Perseguirlos militarmente.", order: 16, production: 0, conflict: 14, feedback: "Aumenta el orden colonial, pero también el conflicto social." },
      { text: "Darles tierras y ganado para que se establezcan.", order: 8, production: 14, conflict: -10, feedback: "Baja el conflicto y aumenta la producción, aunque requiere recursos." },
      { text: "Ignorar la situación.", order: -15, production: -4, conflict: 4, feedback: "El problema sigue y baja la autoridad colonial." }
    ]
  },
  {
    situation: "Un gran propietario tiene muchas tierras, pero no vive en ellas ni las trabaja.",
    options: [
      { text: "Mantener sus privilegios.", order: 4, production: -6, conflict: -2, feedback: "Puede conservar apoyo de élites, pero no mejora la campaña." },
      { text: "Exigir poblamiento y producción.", order: 12, production: 12, conflict: 5, feedback: "Mejora producción y control, aunque presiona a los propietarios." },
      { text: "Repartir parte de las tierras a pobladores.", order: 8, production: 14, conflict: 12, feedback: "Mejora población y producción, pero genera conflicto con grandes propietarios." }
    ]
  },
  {
    situation: "La frontera con Portugal está poco poblada.",
    options: [
      { text: "Fundar pueblos y capillas.", order: 13, production: 8, conflict: -2, feedback: "Mejora defensa, control territorial y comunidad local." },
      { text: "Retirar población hacia Montevideo.", order: -12, production: -7, conflict: 4, feedback: "Debilita la frontera y deja más espacio a la disputa." },
      { text: "No hacer nada.", order: -16, production: -4, conflict: 8, feedback: "Permite avance del contrabando y presencia portuguesa." }
    ]
  }
];

const authorQuestions = [
  { statement: "El territorio no debe leerse como si Uruguay ya existiera.", answer: "Rodríguez Arrillaga" },
  { statement: "Hay que recuperar el papel de las misiones guaraníticas.", answer: "Moraes" },
  { statement: "El norte no era un espacio vacío.", answer: "Moraes" },
  { statement: "El debate debe entenderse dentro de las fronteras imperiales españolas.", answer: "Rodríguez Arrillaga" }
];

const artigasQuestions = [
  { statement: "Fortalecer la autoridad de la Corona española.", answer: "Colonial" },
  { statement: "Redistribuir tierras en clave revolucionaria.", answer: "Artiguista" },
  { statement: "Controlar la campaña para defender la frontera imperial.", answer: "Colonial" },
  { statement: "Ordenar la campaña desde un proyecto de soberanía de los pueblos.", answer: "Artiguista" }
];

let score = 0;
let currentScreen = "start";
let currentDecision = 0;
let indicators = { order: 45, production: 45, conflict: 35 };
const answered = {
  level1: new Set(),
  level2: new Set(),
  level3: new Set(),
  level4: new Set(),
  level5: new Set()
};

const scoreEl = document.getElementById("score");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function addScore(points) {
  score = clamp(score + points, 0, 100);
  scoreEl.textContent = score;
}

function updateProgress() {
  const index = screens.indexOf(currentScreen);
  const progress = Math.round((index / (screens.length - 1)) * 100);
  progressBar.style.width = `${progress}%`;
  progressLabel.textContent = `${progress}%`;
}

function showScreen(name) {
  currentScreen = name;
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
  document.getElementById(`screen-${name}`).classList.add("active");
  updateProgress();
  if (name === "final") showFinal();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFeedback(elementId, message, good = true) {
  const box = document.getElementById(elementId);
  box.textContent = message;
  box.className = `feedback show ${good ? "good" : "bad"}`;
}

function renderProblems() {
  const grid = document.getElementById("problemGrid");
  grid.innerHTML = "";
  shuffle(problems).forEach((item, index) => {
    const card = document.createElement("button");
    card.className = "problem-card";
    card.textContent = item.text;
    card.addEventListener("click", () => {
      if (answered.level1.has(index)) return;
      answered.level1.add(index);
      card.disabled = true;
      card.classList.add(item.correct ? "correct" : "wrong");
      if (item.correct) addScore(4);
      showFeedback("level1Feedback", item.explanation, item.correct);
    });
    grid.appendChild(card);
  });
}

function renderSolutionGame() {
  const panel = document.getElementById("solutionGame");
  const descriptions = document.getElementById("solutionDescriptions");
  const options = shuffle(solutionPairs.map((item) => item.answer));

  panel.innerHTML = "";
  solutionPairs.forEach((pair, index) => {
    const row = document.createElement("div");
    row.className = "match-row";
    row.innerHTML = `
      <strong>${pair.problem}</strong>
      <select aria-label="Solución para ${pair.problem}">
        <option value="">Elegí una medida</option>
        ${options.map((option) => `<option value="${option}">${option}</option>`).join("")}
      </select>
    `;
    const select = row.querySelector("select");
    select.addEventListener("change", () => {
      if (answered.level2.has(index) || !select.value) return;
      answered.level2.add(index);
      select.disabled = true;
      const isCorrect = select.value === pair.answer;
      if (isCorrect) addScore(4);
      showFeedback(
        "level2Feedback",
        isCorrect ? `Correcto: ${pair.problem} se relaciona con ${pair.answer}.` : `No del todo: para ${pair.problem}, la medida más adecuada era ${pair.answer}.`,
        isCorrect
      );
    });
    panel.appendChild(row);
  });

  descriptions.innerHTML = "";
  solutionDescriptions.forEach((item) => {
    const card = document.createElement("article");
    card.className = "mini-card";
    card.innerHTML = `<h4>${item.title}</h4><p>${item.text}</p>`;
    descriptions.appendChild(card);
  });
}

function updateMeters() {
  document.getElementById("orderMeter").value = indicators.order;
  document.getElementById("productionMeter").value = indicators.production;
  document.getElementById("conflictMeter").value = indicators.conflict;
}

function renderDecision() {
  const box = document.getElementById("decisionBox");
  const decision = decisions[currentDecision];
  if (!decision) {
    box.innerHTML = "<h3>Decisiones completadas</h3><p>Ya resolviste las tres situaciones coloniales. Podés avanzar al debate historiográfico.</p>";
    return;
  }

  box.innerHTML = `
    <h3>Situación ${currentDecision + 1}</h3>
    <p>${decision.situation}</p>
    <div class="option-list">
      ${decision.options.map((option, index) => `<button class="option-button" data-option="${index}">${option.text}</button>`).join("")}
    </div>
  `;

  box.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      const option = decision.options[Number(button.dataset.option)];
      indicators.order = clamp(indicators.order + option.order, 0, 100);
      indicators.production = clamp(indicators.production + option.production, 0, 100);
      indicators.conflict = clamp(indicators.conflict + option.conflict, 0, 100);
      addScore(option.order > 0 || option.production > 0 ? 6 : 1);
      updateMeters();
      showFeedback("level3Feedback", option.feedback, option.order >= 0 || option.production > 0);
      currentDecision += 1;
      setTimeout(renderDecision, 850);
    });
  });
}

function renderQuiz(panelId, feedbackId, questions, choices, levelKey) {
  const panel = document.getElementById(panelId);
  panel.innerHTML = "";
  questions.forEach((question, index) => {
    const row = document.createElement("div");
    row.className = "quiz-row";
    row.innerHTML = `
      <strong>${question.statement}</strong>
      <div class="choices">
        ${choices.map((choice) => `<button data-choice="${choice}">${choice}</button>`).join("")}
      </div>
    `;
    row.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        if (answered[levelKey].has(index)) return;
        answered[levelKey].add(index);
        const isCorrect = button.dataset.choice === question.answer;
        row.classList.add("answered", isCorrect ? "correct" : "wrong");
        row.querySelectorAll("button").forEach((item) => (item.disabled = true));
        if (isCorrect) addScore(5);
        showFeedback(
          feedbackId,
          isCorrect ? "Correcto. Esa mirada ayuda a ubicar mejor el problema histórico." : `No exactamente. La respuesta más adecuada era: ${question.answer}.`,
          isCorrect
        );
      });
    });
    panel.appendChild(row);
  });
}

function showFinal() {
  const rank = score <= 40
    ? "Peón aprendiz"
    : score <= 70
      ? "Hacendado poblador"
      : score <= 90
        ? "Funcionario reformista"
        : "Historiador de la campaña";
  document.getElementById("rankTitle").textContent = rank;
  document.getElementById("finalScore").textContent = score;
}

function resetGame() {
  score = 0;
  currentDecision = 0;
  indicators = { order: 45, production: 45, conflict: 35 };
  Object.keys(answered).forEach((key) => answered[key].clear());
  scoreEl.textContent = "0";
  updateMeters();
  renderProblems();
  renderSolutionGame();
  renderDecision();
  renderQuiz("authorGame", "level4Feedback", authorQuestions, ["Rodríguez Arrillaga", "Moraes"], "level4");
  renderQuiz("artigasGame", "level5Feedback", artigasQuestions, ["Colonial", "Artiguista"], "level5");
  document.querySelectorAll(".feedback").forEach((box) => {
    box.className = "feedback";
    box.textContent = "";
  });
  document.querySelectorAll(".map-zone").forEach((zone) => zone.classList.remove("visited"));
  document.getElementById("mapInfo").innerHTML = "<h3>Elegí una zona del mapa</h3><p>Cada punto abre una explicación breve. Visitá varias zonas antes de avanzar al primer desafío.</p>";
  showScreen("start");
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

document.querySelectorAll("[data-summary]").forEach((button) => {
  button.addEventListener("click", () => document.getElementById("summaryDialog").showModal());
});

document.getElementById("closeSummary").addEventListener("click", () => {
  document.getElementById("summaryDialog").close();
});

document.querySelectorAll(".map-zone").forEach((button) => {
  button.addEventListener("click", () => {
    const zone = mapZones[button.dataset.zone];
    button.classList.add("visited");
    document.getElementById("mapInfo").innerHTML = `<h3>${zone.title}</h3><p>${zone.text}</p>`;
  });
});

document.getElementById("restartBtn").addEventListener("click", resetGame);

renderProblems();
renderSolutionGame();
renderDecision();
renderQuiz("authorGame", "level4Feedback", authorQuestions, ["Rodríguez Arrillaga", "Moraes"], "level4");
renderQuiz("artigasGame", "level5Feedback", artigasQuestions, ["Colonial", "Artiguista"], "level5");
updateMeters();
updateProgress();
