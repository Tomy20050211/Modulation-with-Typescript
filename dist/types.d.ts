export type Rol = "Backend" | "Frontend" | "Qa" | "UI/UX";
export type Estado = "Abierto" | "Aprobado" | "Rechazado" | "Mergeado";
export type TipoIssue = "Bug" | "Mejora";
export type Prioridad = "Alta" | "Baja" | "Media";
export type Seniority = "Junior" | "Semi-Senior" | "Senior";
export type Tecnologia = [string, number];
export interface Desarrollador {
    nombre: string;
    rol: Rol;
    seniority: Seniority;
    tecnologias: Tecnologia[];
    disponibilidad: boolean;
}
export interface Repositorio {
    nombre: string;
    url: string;
    ramaPrincipal: string;
    lenguajePrincipal: string;
}
export interface PullRequest {
    id: number;
    titulo: string;
    estado: Estado;
    autor: Desarrollador;
    reviewers: Desarrollador[];
    lineasDeCodigo: number;
}
export interface Issue {
    id: number;
    titulo: string;
    tipo: TipoIssue;
    prioridad: Prioridad;
    estado: Estado;
    asignadoA: Desarrollador;
}
export interface Proyecto {
    nombre: string;
    repositorio: Repositorio;
    listaDeIssues: Issue[];
    listaDePullRequest: PullRequest[];
    equipoDeDesarrolladores: Desarrollador[];
}
//# sourceMappingURL=types.d.ts.map