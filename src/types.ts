//Tipar las propiedades que requieran una union de tipos 

export type Rol = "Backend" | "Frontend" | "Qa" | "UI/UX";
export type Estado = "Abierto" | "Aprobado" | "Rechazado" | "Mergeado";
export type TipoIssue = "Bug" | "Mejora";
export type Prioridad = "Alta" | "Baja" | "Media";
export type Seniority = "Junior" | "Semi-Senior" | "Senior";


//Declarar una tupla de las tecnologias

export type Tecnologia =[string, number];


//Intefaces principales

export interface Desarrollador {
    nombre: string,
    rol: Rol,
    seniority: Seniority,
    tecnologias: Tecnologia[],
    disponibilidad: boolean
};

export interface Repositorio {
    nombre: string,
    url: string,
    ramaPrincipal: string,
    lenguajePrincipal: string
};

export interface PullRequest{
    id: number,
    tituñp: string,
    estado: Estado,
    autor:Desarrollador,
    reviewers:Desarrollador,
    lineasDeCodigo: number
};

export interface Issue{
    id: number,
    titulo: string,
    tipo: TipoIssue,
    prioridad: Prioridad,
    estado: Estado,
    asignadoA: Desarrollador
};

export interface Proyecto {
    nombre: string,
    repositorio: Repositorio,
    listaDeIssues: Issue,
    listaDePullRequest: PullRequest,
    equipoDeDesarrolladores: Desarrollador
};