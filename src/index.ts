import type { Proyecto, PullRequest, Tecnologia, Desarrollador, Repositorio, Issue } from './types';

//Crear un desarrollador 

const equipoDeDesarrolladores: Desarrollador[] =[
    {  nombre: "Thomas", rol: "Frontend", seniority: "Junior", tecnologias: [["Typescript", 6]],  disponibilidad: true},
    {  nombre: "Danny", rol: "Frontend", seniority: "Junior", tecnologias: [["JavaScript", 10]],  disponibilidad: true},
    {  nombre: "Juan", rol: "Backend", seniority: "Junior", tecnologias: [["Java", 20]],  disponibilidad: false},
    {  nombre: "Thomas", rol: "Backend", seniority: "Junior", tecnologias: [["C#", 6]],  disponibilidad: false}
] 

//Recorrer todo el array de objetos
for(const e of equipoDeDesarrolladores){
        console.log(`
-------------------------
Nombre del desarrollador: ${e.nombre}
Rol: ${e.rol}
Seniority: ${e.seniority}
Tecnologias: ${e.tecnologias}
Disponibilidad: ${e.disponibilidad ? "Disponible" : "Inactivo"}

-------------------------
`);
};
