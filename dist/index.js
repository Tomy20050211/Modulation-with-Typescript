import { equipoDeDesarrolladores, pullRequest, issues } from './reportes.js';
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
console.log(JSON.stringify(issues, null, 2));
//# sourceMappingURL=index.js.map