import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  // TODO: implementar
  return developers.reduce((lenguajes, {language}) => {
  if(!lenguajes[language]){
    lenguajes[language] = 0;
  }
  lenguajes[language]++;

  return lenguajes;
}, {}) ;
}
