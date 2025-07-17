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
