import type { es } from './es';

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

/** Forma común de los diccionarios: el inglés debe tener exactamente las mismas claves. */
export type Content = Widen<typeof es>;
