const malla = document.getElementById("malla");

const datos = {
  "Semestre 1": [
    { nombre: "Fundamentos de Administración", prereq: [] },
    { nombre: "Economía, Sustentabilidad y Emprendimiento", prereq: [] },
    { nombre: "Introducción al Análisis de Datos", prereq: [] },
    { nombre: "Introducción a la Matemática", prereq: [] },
    { nombre: "Contabilidad", prereq: [] },
    { nombre: "Taller de Competencias Comunicativas", prereq: [] },
    { nombre: "Taller de Competencias para el Aprendizaje", prereq: [] }
  ],
  "Semestre 2": [
    { nombre: "Administración Estratégica", prereq: ["Fundamentos de Administración"] },
    { nombre: "Matemática", prereq: ["Introducción a la Matemática"] },
    { nombre: "Introducción al Análisis de Datos", prereq: [] },
    { nombre: "Fundamentos de Microeconomía", prereq: [] },
    { nombre: "Contabilidad Financiera", prereq: [] },
    { nombre: "Cultura y Valores", prereq: [] },
    { nombre: "Taller de Desarrollo Personal 1", prereq: [] }
  ],
  "Semestre 3": [
    { nombre: "Estrategia Competitiva", prereq: ["Administración Estratégica"] },
    { nombre: "Fundamentos de Marketing", prereq: ["Administración Estratégica"] },
    { nombre: "Cálculo 1", prereq: ["Matemática"] },
    { nombre: "Fundamentos de Macroeconomía", prereq: [] },
    { nombre: "Inglés Básico 1", prereq: [] },
    { nombre: "Persona y Sentido", prereq: [] },
    { nombre: "Taller de Desarrollo Personal 2", prereq: [] }
  ],
  "Semestre 4": [
    { nombre: "Derecho Comercial y Laboral", prereq: [] },
    { nombre: "Innovación en Modelos de Negocios", prereq: ["Economía, Sustentabilidad y Emprendimiento"] },
    { nombre: "Estadística 1", prereq: ["Matemática"] },
    { nombre: "Microeconomía", prereq: ["Fundamentos de Microeconomía"] },
    { nombre: "Costo para la Toma de Decisiones", prereq: ["Contabilidad Financiera"] },
    { nombre: "Inglés Básico 2", prereq: ["Inglés Básico 1"] }
  ],
  "Semestre 5": [
    { nombre: "Gestión de Personas", prereq: ["Derecho Comercial y Laboral", "Administración Estratégica"] },
    { nombre: "Gestión de la Innovación", prereq: ["Innovación en Modelos de Negocios"] },
    { nombre: "Métodos Cuantitativos para la Gestión", prereq: ["Cálculo 1", "Fundamentos de Microeconomía"] },
    { nombre: "Macroeconomía", prereq: ["Fundamentos de Macroeconomía"] },
    { nombre: "Administración Financiera", prereq: ["Costo para la Toma de Decisiones"] },
    { nombre: "Inglés Intermedio 1", prereq: ["Inglés Básico 2"] }
  ],
  "Semestre 6": [
    { nombre: "Comportamiento y Desarrollo Organizacional", prereq: ["Gestión de Personas"] },
    { nombre: "Investigación de Mercado", prereq: ["Fundamentos de Marketing", "Estadística 1"] },
    { nombre: "Métodos Avanzados en Estadística", prereq: ["Métodos Cuantitativos para la Gestión", "Estadística 1"] },
    { nombre: "Comercio Internacional", prereq: ["Macroeconomía"] },
    { nombre: "Mercado de Capitales", prereq: ["Estadística 1"] },
    { nombre: "Inglés Intermedio 2", prereq: ["Inglés Intermedio 1"] }
  ],
  "Semestre 7": [
    { nombre: "Marketing Estratégico", prereq: ["Investigación de Mercado"] },
    { nombre: "Econometría", prereq: ["Métodos Cuantitativos para la Gestión", "Métodos Avanzados en Estadística"] },
    { nombre: "Gestión de Operaciones", prereq: ["Métodos Cuantitativos para la Gestión"] },
    { nombre: "Electivo 1", prereq: [] },
    { nombre: "Finanzas Corporativas", prereq: ["Mercado de Capitales"] },
    { nombre: "Inglés Avanzado 1", prereq: ["Inglés Intermedio 2"] }
  ],
  "Semestre 8": [
    { nombre: "Gobernanza y Control Estratégico", prereq: ["Estrategia Competitiva"] },
    { nombre: "Consultoría Aplicada a Organizaciones", prereq: ["Gestión de la Innovación"] },
    { nombre: "Análisis de Datos", prereq: ["Introducción al Análisis de Datos", "Estadística 1"] },
    { nombre: "Electivo 2", prereq: [] },
    { nombre: "Formulación y Evaluación de Proyectos", prereq: ["Finanzas Corporativas"] },
    { nombre: "Inglés Avanzados 2", prereq: ["Inglés Avanzado 1"] }
  ],
  "Semestre 9": [
    { nombre: "Ética y Responsabilidad Social", prereq: ["Gobernanza y Control Estratégico"] },
    { nombre: "Políticas Públicas, Innovación y Emprendimiento", prereq: ["Gestión de la Innovación", "Macroeconomía"] },
    { nombre: "Simulación de Negocio", prereq: ["Análisis de Datos"] },
    { nombre: "Práctica Profesional", prereq: [] },
    { nombre: "Electivo 3", prereq: [] }
  ],
  "Semestre 10": [
    { nombre: "Seminario de Habilidades para la Gestión", prereq: ["Gobernanza y Control Estratégico"] },
    { nombre: "Plan de Negocios", prereq: ["Gobernanza y Control Estratégico", "Formulación y Evaluación de Proyectos"] },
    { nombre: "Electivo 4", prereq: [] }
  ]
};
const ramosEstado = {};

function actualizarDisponibilidad() {
  Object.keys(ramosEstado).forEach(nombre => {
    const div = document.querySelector(`[data-nombre='${nombre}']`);
    const prereqs = div.dataset.prereqs ? div.dataset.prereqs.split("|") : [];
    const desbloqueado = prereqs.every(p => ramosEstado[p]);
    if (desbloqueado) {
      div.classList.add("activo");
    }
  });
}

Object.entries(datos).forEach(([semestre, ramos]) => {
  const contenedor = document.createElement("div");
  contenedor.className = "semestre";
  const titulo = document.createElement("h3");
  titulo.textContent = semestre;
  contenedor.appendChild(titulo);

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.dataset.nombre = ramo.nombre;
    div.dataset.prereqs = ramo.prereq.join("|");
    ramosEstado[ramo.nombre] = false;
    if (ramo.prereq.length === 0) div.classList.add("activo");

    div.addEventListener("click", () => {
      if (!div.classList.contains("activo")) return;
      div.classList.toggle("aprobado");
      ramosEstado[ramo.nombre] = div.classList.contains("aprobado");
      actualizarDisponibilidad();
    });

    contenedor.appendChild(div);
  });

  malla.appendChild(contenedor);
});

actualizarDisponibilidad();
