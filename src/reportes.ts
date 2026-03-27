import {dev1,dev2,dev3,dev4} from './desarrolladores.js';
import type { Desarrollador, Repositorio, PullRequest, Issue, Proyecto
 } from './types.js';

export let equipoDeDesarrolladoresaArray: Desarrollador[] =[
    dev1,dev2,dev3, dev4
];

//Crear un repositorio
export const repositorio:Repositorio = {
    nombre: "App Coffe",
    url:"http/:",
    ramaPrincipal: "main",
    lenguajePrincipal: "Typescript"
};

//Creacion de una lista de objetos con pull request.
export const pullRequest:PullRequest[] =[
    {id:1, titulo: "Filtrar por categoria", estado: "Abierto", autor: equipoDeDesarrolladoresaArray[0]!, reviewers:[equipoDeDesarrolladoresaArray[2]!], lineasDeCodigo: 120},
    {id:2, titulo: "Renderizar cartas", estado: "Mergeado", autor: equipoDeDesarrolladoresaArray[1]!, reviewers:[equipoDeDesarrolladoresaArray[3]!], lineasDeCodigo: 160},
    {id:1, titulo: "Filtrar por categoria", estado: "Rechazado", autor: equipoDeDesarrolladoresaArray[4]!, reviewers:[equipoDeDesarrolladoresaArray[1]!], lineasDeCodigo: 1000},
    {id:1, titulo: "Filtrar por categoria", estado: "Rechazado", autor: equipoDeDesarrolladoresaArray[3]!, reviewers:[equipoDeDesarrolladoresaArray[3]!], lineasDeCodigo: 2000},

];

//Creacion de issues
export const issues: Issue[] =[
    {id: 1, titulo: "cualquier cosa", tipo: "Bug", prioridad: "Alta", estado: "Abierto", asignadoA: equipoDeDesarrolladoresaArray[1]! },
    {id: 2, titulo: "cualquier cosa", tipo: "Mejora", prioridad: "Alta", estado: "Abierto", asignadoA: equipoDeDesarrolladoresaArray[3]!}
];

//Crear un proyecto
export const proyecto: Proyecto ={
    nombre: "Mahoraga",
    repositorio: repositorio,
    listaDeIssues: issues,
    listaDePullRequest: pullRequest,
    equipoDeDesarrolladores: equipoDeDesarrolladoresaArray
}



