import type {Desarrollador} from './types';

//Creacion de desarrolladores

export const dev1: Desarrollador ={
    nombre: "Thomas",
    rol: "Frontend",
    seniority: "Junior",
    tecnologias: [["Typescript", 10]],
    disponibilidad: true
};

export const dev2: Desarrollador ={
    nombre: "Danny",
    rol: "Frontend",
    seniority: "Senior",
    tecnologias: [["Javascript", 13]],
    disponibilidad: false
};

export const dev3: Desarrollador ={
    nombre: "Juan",
    rol: "Backend",
    seniority: "Junior",
    tecnologias: [["C#", 10]],
    disponibilidad: false
};

export const dev4: Desarrollador ={
    nombre: "Jose",
    rol: "Backend",
    seniority: "Semi-Senior",
    tecnologias: [["Python", 16]],
    disponibilidad: true
};
