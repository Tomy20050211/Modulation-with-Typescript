import { dev1, dev2, dev3, dev4 } from './desarrolladores.js';
export let equipoDeDesarrolladores = [
    dev1, dev2, dev3, dev4
];
//Crear un repositorio
export const repositorio = {
    nombre: "App Coffe",
    url: "http/:",
    ramaPrincipal: "main",
    lenguajePrincipal: "Typescript"
};
//Creacion de una lista de objetos con pull request
export const pullRequest = [
    { id: 1, titulo: "Filtrar por categoria", estado: "Abierto", autor: equipoDeDesarrolladores[0], reviewers: [equipoDeDesarrolladores[2]], lineasDeCodigo: 120 },
    { id: 2, titulo: "Renderizar cartas", estado: "Mergeado", autor: equipoDeDesarrolladores[1], reviewers: [equipoDeDesarrolladores[3]], lineasDeCodigo: 160 },
    { id: 1, titulo: "Filtrar por categoria", estado: "Rechazado", autor: equipoDeDesarrolladores[4], reviewers: [equipoDeDesarrolladores[1]], lineasDeCodigo: 1000 },
    { id: 1, titulo: "Filtrar por categoria", estado: "Rechazado", autor: equipoDeDesarrolladores[3], reviewers: [equipoDeDesarrolladores[3]], lineasDeCodigo: 2000 },
];
//Creacion de issues
export const issues = [
    { id: 1, titulo: "cualquier cosa", tipo: "Bug", prioridad: "Alta", estado: "Abierto", asignadoA: equipoDeDesarrolladores[1] }
];
//# sourceMappingURL=reportes.js.map