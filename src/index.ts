import type { Proyecto, PullRequest, Tecnologia, Desarrollador, Repositorio, Issue } from './types.js';
import {equipoDeDesarrolladoresaArray, pullRequest, issues, proyecto} from './reportes.js'

//Recorrer todo el array de desarrolladores
/* for(const e of equipoDeDesarrolladores){
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

console.log(JSON.stringify(pullRequest, null, 2)); */

function mostrarProyecto(proyecto: Proyecto): void {
  console.log(`
Nombre del proyecto: ${proyecto.nombre}
Nombre del repositorio: ${proyecto.repositorio.nombre}

Lista de issues:
${proyecto.listaDeIssues
  .map((issue) => `- ${issue.titulo} (${issue.estado})`)
  .join("\n")}

Lista de pull request:
${proyecto.listaDePullRequest
  .map((pr) => `- ${pr.titulo} (${pr.estado})`) .join("\n")}

Equipo de desarrollo:
${proyecto.equipoDeDesarrolladores
  .map((dev) => `- ${dev.nombre}`)
  .join("\n")}
`);
}

mostrarProyecto(proyecto)