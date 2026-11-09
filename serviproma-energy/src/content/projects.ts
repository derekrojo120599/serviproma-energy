// Listado de proyectos para la página de Experiencia.
// Pendiente de entrega por el cliente: completar con proyectos reales y autorizados
// para publicación. Mientras esté vacío, el sitio no muestra la tabla en producción.
export interface Project {
  client: string;
  country: string;
  voltage: string; // por ejemplo "230 kV"
  scope: { es: string; en: string };
}

export const projects: Project[] = [
  // {
  //   client: 'Nombre del cliente',
  //   country: 'Venezuela',
  //   voltage: '400 kV',
  //   scope: { es: 'Alcance en español', en: 'Scope in English' },
  // },
];
